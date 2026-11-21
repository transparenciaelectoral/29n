"""Genera el catálogo del Congreso desde los HTML oficiales del BOE."""
import json
import re
import sys
from html import unescape
from pathlib import Path

def paragraphs(path):
    body = Path(path).read_text().split('<div id="textoxslt">', 1)[1].split('</div>', 1)[0]
    for kind, markup in re.findall(r'<p class="([^"]+)"[^>]*>(.*?)</p>', body, re.S):
        yield kind, ' '.join(unescape(re.sub(r'<[^>]+>', '', markup)).split())

def numbered(text):
    return re.fullmatch(r'(\d+)\. (.+)', text)

def load(path):
    lists = {}
    for kind, value in paragraphs(path):
        if kind == 'centro_negrita' and value.startswith('JUNTA ELECTORAL'):
            district = re.sub(r'^JUNTA ELECTORAL (?:PROVINCIAL )?DE ', '', value).title()
            active = False
        if kind == 'centro_cursiva':
            active = value == 'CONGRESO DE LOS DIPUTADOS'
            current = None
        if not active:
            continue
        match = numbered(value)
        if kind == 'centro_redonda' and match:
            key = district, int(match[1])
            current = {'district': district, 'heading': match[2], 'names': [], 'reserves': []}
            bucket = current['names']
            assert key not in lists, key
            lists[key] = current
        elif current and value.lower().startswith(('suplentes:', 'suplente:')):
            bucket = current['reserves']
        elif current and match:
            assert int(match[1]) == len(bucket) + 1, (district, value)
            bucket.append(match[2].removesuffix('.'))
    return lists

def correct(lists):
    def replace(district, order, position, old, new):
        row = lists[district, order]
        assert old in row['names'][position - 1], row
        row['names'][position - 1] = new

    replace('Huesca', 5, 2, 'Milagros Roca Pérez', 'Milagros Roca López')
    row = lists['La Rioja', 5]
    assert row['names'] == ['Alejandro García Cáncer'], row
    row['names'] = ['Francisco Castro Portolés', 'María Eugenia Oleaga Muguerza',
                    'Gonzalo Alonso Alonso', 'Lucía Sáenz Burgos']
    row['reserves'] = ['José Ángel Sáenz Díaz']
    lists['Navarra', 1]['heading'] = 'EUSKAL HERRIA BILDU (EH BILDU)'
    lists['Navarra', 11]['heading'] = 'FRENTE AMPLIO-FRONTE ZABALA (FRENTE AMPLIO-FRONTE ZABALA)'
    lists['Navarra', 8]['reserves'][1] = 'Noelia González Salmerón'
    row = lists['Tarragona', 7]
    replace('Tarragona', 7, 1, 'Ester Roca Domodel', 'Ester Roca Domedel')
    for field in ('names', 'reserves'):
        row[field] = [name.removesuffix(' (COMUNS-FRONT AMPLI)') for name in row[field]]
    replace('Teruel', 1, 1, 'Herminio Rufino Sancho Íniguez', 'Herminio Rufino Sancho Íñiguez')
    replace('Valencia', 3, 3, 'Francisco José Domenech Gomis', 'Jose Francisco Domenech Gomis')

def group(lists):
    # Variantes territoriales o tipográficas. Las coaliciones con otros
    # integrantes se conservan con su propia ficha y su rótulo del BOE.
    aliases = {
        'PSIB-PSOE': 'PSOE', 'PSC': 'PSOE', 'PSDEG-PSOE': 'PSOE',
        'PSN-PSOE': 'PSOE', 'ELAK/PCTE': 'PCTE/ELAK', 'B.N.G.': 'BNG',
        'FRENTE AMPLIO - FRONTE AMPLA': 'FRENTE AMPLIO-FRONTE AMPLA',
        '1.ºCAN-CCA': 'CCA-1.ºCAN', 'F.I.A.': 'FIA',
        'PAZ,CASA Y TRABAJO': 'PODEMOS', 'FRENTE OBRERO': 'FO',
    }
    parties = {}
    for row in lists.values():
        match = re.fullmatch(r'(.*) \(([^()]*)\)', row['heading'])
        if not row['names']:
            print('Sin proclamación', row['district'], row['heading'])
            continue
        name, initials = match.groups() if match else (row['heading'], row['heading'])
        key = aliases.get(initials.upper(), initials.upper())
        party = parties.setdefault(key, {'id': key, 'name': name, 'lists': []})
        party['lists'].append(row)
    return list(parties.values())

if __name__ == '__main__':
    lists = load(sys.argv[1])
    correct(lists)
    parties = group(lists)
    output = Path(__file__).parent / 'dist' / 'candidaturas.js'
    output.write_text('const candidaturas = ' + json.dumps(parties, ensure_ascii=False) + ';\n')
    print(len(parties), len(lists), len({row['district'] for row in lists.values()}))
    for party in parties:
        print(party['id'], len(party['lists']), party['name'])
