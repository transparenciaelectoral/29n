"""Incorpora datos públicos de la XV Legislatura a las candidaturas del 29N.

Uso: python3 importar_perfiles.py directorio_con_los_tres_csv
"""
import csv
import json
import re
import sys
import unicodedata
from collections import defaultdict
from pathlib import Path
from urllib.parse import urlsplit


DIST = Path(__file__).resolve().parent / 'dist'
# La ficha oficial del Congreso omite el primer nombre de pila.
PARLIAMENTARY_NAME_ALIASES = {
    'PSOE|Madrid|María Margarita Robles Fernández': 'Margarita Robles Fernández',
}
DECLARED_AMOUNTS = {
    'rentas_declaradas': ('Rentas declaradas', 'rentas_al_menos'),
    'depositos': ('Depósitos', 'depositos_al_menos'),
    'valores_declarados': ('Valores declarados', 'valores_al_menos'),
    'deuda_pendiente': ('Deuda pendiente', 'deuda_al_menos'),
}
DISTRICTS = {
    'alava': 'arabaalava', 'alicante': 'alicantealacant',
    'acoruna': 'corunaa', 'castellon': 'castelloncastello',
    'illesbalears': 'balearsilles', 'larioja': 'riojala', 'laspalmas': 'palmaslas',
    'santacruzdetenerife': 'sctenerife', 'valencia': 'valenciavalencia',
}


def norm(value):
    decomposed = unicodedata.normalize('NFD', value.casefold())
    return ''.join(char for char in decomposed if char.isalnum())


def rows(directory, filename):
    with (directory / filename).open(encoding='utf-8-sig', newline='') as stream:
        yield from csv.DictReader(stream)


def public_link(value, host, prefix):
    url = urlsplit(value)
    if url.scheme == 'https' and url.netloc == host and url.path.startswith(prefix):
        return value
    return None


def year(value):
    return int(value) if re.fullmatch(r'(?:19|20)\d{2}', value) else None


def read_properties(directory):
    properties = defaultdict(list)
    for record in rows(directory, 'inmuebles.csv'):
        link = public_link(record['url_declaracion'], 'www.congreso.es', '/docbienes/')
        if not link or record['lectura_no_confirmada'] != 'false':
            continue
        category = 'Vivienda' if record['es_vivienda'] == 'true' else {
            'urbana': 'Otro inmueble urbano', 'rustica': 'Inmueble rústico',
        }.get(record['naturaleza'], 'Otro inmueble')
        share = record['porcentaje']
        properties[record['diputado_id']].append({
            'type': category,
            'company': record['titular'] == 'sociedad',
            'year': year(record['anio_adquisicion']),
            'share': float(share) if re.fullmatch(r'\d{1,3}(?:\.\d+)?', share) else None,
            'source': link,
        })
    return properties


def read_companies(directory):
    companies = defaultdict(list)
    for record in rows(directory, 'borme.csv'):
        link = public_link(record['url_borme'], 'www.boe.es', '/diario_borme/')
        if link and record['confirmacion'] in {'declarada', 'cargo-publico'}:
            companies[record['diputado_id']].append({
                'name': record['empresa'], 'role': record['cargo'], 'action': record['acto'],
                'date': record['fecha'], 'publicRole': record['confirmacion'] == 'cargo-publico',
                'source': link,
            })
    return companies


def declared_amounts(record):
    if record['lectura_no_confirmada'] != 'false':
        return []
    amounts = []
    for key, (label, lower_bound) in DECLARED_AMOUNTS.items():
        value = record[key]
        if re.fullmatch(r'\d+(?:\.\d+)?', value) and float(value) > 0:
            amounts.append([label, float(value), record[lower_bound] == 'true'])
    return amounts


def read_profiles(directory):
    properties = read_properties(directory)
    companies = read_companies(directory)
    names = defaultdict(list)
    for record in rows(directory, 'diputados.csv'):
        names[norm(record['nombre'] + record['apellidos'])].append(record)

    data = (DIST / 'candidaturas.js').read_text(encoding='utf-8')
    parties = json.loads(data.removeprefix('const candidaturas = ').strip().removesuffix(';'))
    profiles = {}
    for party in parties:
        for ballot in party['lists']:
            district = norm(ballot['district'])
            for name in ballot['names'] + ballot['reserves']:
                key = '|'.join([party['id'], ballot['district'], name])
                candidates = names[norm(PARLIAMENTARY_NAME_ALIASES.get(key, name))]
                if len(candidates) != 1:
                    continue
                record = candidates[0]
                if norm(record['circunscripcion']) != DISTRICTS.get(district, district):
                    continue
                deputy_id = record['id']
                profiles[key] = {
                    'source': public_link(record['url_ficha_oficial'], 'www.congreso.es', '/es/'),
                    'creditedSource': public_link(record['url_congreso_abierto'], 'congresoabierto.org', '/diputado/'),
                    'declaration': public_link(record['url_declaracion_bienes'], 'www.congreso.es', '/docbienes/'),
                    'birthYear': year(record['anio_nacimiento']),
                    'education': record['formacion'].split(' | ') if record['formacion'] else [],
                    'offices': record['cargos'].split(' | ') if record['cargos'] else [],
                    'terms': int(record['legislaturas']) if record['legislaturas'].isdigit() else None,
                    'properties': properties[deputy_id],
                    'amounts': declared_amounts(record),
                    'companies': sorted(companies[deputy_id], key=lambda company: company['date'], reverse=True),
                }
    return profiles


if __name__ == '__main__':
    profiles = read_profiles(Path(sys.argv[1]))
    (DIST / 'perfiles-publicos.js').write_text(
        'const perfilesPublicos = ' + json.dumps(profiles, ensure_ascii=False, indent=2) + ';\n',
        encoding='utf-8',
    )
    print(f'{len(profiles)} perfiles parlamentarios conciliados')
