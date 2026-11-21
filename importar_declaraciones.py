"""Importa los importes declarados por altos cargos que son candidatos.

Uso: python3 importar_declaraciones.py ruta/2024-6410.html ruta/2025-5822.html ...
Los nombres de archivo son los sufijos de las referencias del BOE.
"""
import json
import re
import sys
from html import unescape
from pathlib import Path

from importar_perfiles import DIST, PARLIAMENTARY_NAME_ALIASES, norm


CATEGORIES = {
    'Bienes inmuebles': 'Bienes inmuebles',
    'Depósitos': 'Depósitos y cuentas',
    'Accs. y participaciones en el capital social': 'Valores negociados',
    'Accs. y participaciones en capital social': 'Participaciones no negociadas',
    'Seguros de vida': 'Seguros de vida y planes de pensiones',
    'Demás bienes y derechos': 'Otros bienes y derechos',
    'Pasivo': 'Pasivo',
}


def clean(text):
    return ' '.join(unescape(re.sub(r'<[^>]*>', '', text)).split())


def read_declarations(path):
    content = path.read_text(encoding='utf-8')
    for section in re.split(r'<p[^>]*>Apellidos y nombre:\s*', content)[1:]:
        name, _, remainder = section.partition('</p>')
        surnames, separator, given = clean(name).rstrip('.').partition(',')
        if not separator:
            continue
        action = clean(remainder.partition('</p>')[0]).partition(':')[0]
        table = remainder.partition('<table')[2].partition('</table>')[0]
        if not table or action not in {'Nombramiento', 'Cese'}:
            continue
        values = []
        for row in re.findall(r'<tr[^>]*>(.*?)</tr>', table, re.S):
            cells = [clean(cell) for cell in re.findall(r'<td[^>]*>(.*?)</td>', row, re.S)]
            if len(cells) != 2:
                continue
            label, amount = cells
            if not re.fullmatch(r'[+-]?\d+(?:\.\d{3})*(?:,\d+)?', amount):
                continue
            category = next((value for match, value in CATEGORIES.items() if label.startswith(match)), None)
            if category:
                values.append([category, float(amount.replace('.', '').replace(',', '.'))])
        if values:
            yield norm(given + surnames), {
                'edition': path.stem[:4],
                'action': action,
                'source': 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-' + path.stem,
                'values': values,
            }


if __name__ == '__main__':
    data = (DIST / 'perfiles-publicos.js').read_text(encoding='utf-8')
    profiles = json.loads(data.removeprefix('const perfilesPublicos = ').strip().removesuffix(';'))
    names = {norm(key.split('|')[-1]): key for key in profiles}
    names.update({norm(name): key for key, name in PARLIAMENTARY_NAME_ALIASES.items()})
    declarations = {}
    for path in sorted(map(Path, sys.argv[1:]), key=lambda item: tuple(map(int, item.stem.split('-')))):
        for name, record in read_declarations(path):
            if name in names:
                previous = declarations.get(names[name], {})
                if previous.get('source') != record['source'] or record['action'] == 'Nombramiento':
                    declarations[names[name]] = record
    (DIST / 'declaraciones-publicas.js').write_text(
        'const declaracionesPublicas = ' + json.dumps(declarations, ensure_ascii=False, indent=2) + ';\n',
        encoding='utf-8',
    )
    print(f'{len(declarations)} coincidencias con las declaraciones del BOE')
