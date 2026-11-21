"""Relaciona las proclamaciones al Congreso de 2023 y 2026.

Uso: python3 importar_candidaturas_previas.py ruta/al/boe-2023-15066.html
"""
import json
import re
import sys
from collections import defaultdict

from importar import load
from importar_perfiles import DIST, norm


# El BOE publicó rectificaciones para estas juntas (2023-15548 y 2023-15828).
# Se omiten sus listas históricas hasta verificar cada rectificación.
EXCLUDED = {'baleares', 'illesbalears', 'bizkaia', 'cuenca', 'teruel'}


def identity(district, heading, name):
    initials = re.search(r'\(([^()]*)\)$', heading)
    return norm(district), norm(initials[1] if initials else heading), norm(name)


def ballot_entries(ballot):
    for field, status in (('names', 'Titular'), ('reserves', 'Suplente')):
        for position, name in enumerate(ballot[field], 1):
            yield identity(ballot['district'], ballot['heading'], name), name, status, position


def match_history(path):
    historical = defaultdict(list)
    for ballot in load(path).values():
        if norm(ballot['district']) in EXCLUDED or not ballot['names']:
            continue
        for key, _, status, position in ballot_entries(ballot):
            historical[key].append(f'{status} {position} · {ballot["heading"]} · {ballot["district"]} · Congreso, 23J de 2023')
    current = defaultdict(list)
    script = (DIST / 'candidaturas.js').read_text(encoding='utf-8')
    for party in json.loads(script.removeprefix('const candidaturas = ').strip().removesuffix(';')):
        for ballot in party['lists']:
            for key, name, _, _ in ballot_entries(ballot):
                current[key].append('|'.join([party['id'], ballot['district'], name]))
    return {keys[0]: [historical[key][0], 'boe2023'] for key, keys in current.items()
            if len(keys) == 1 and len(historical[key]) == 1}


if __name__ == '__main__':
    matches = match_history(sys.argv[1])
    output = DIST / 'candidaturas-previas.js'
    output.write_text('const candidaturasPrevias = ' + json.dumps(matches, ensure_ascii=False, indent=2) + ';\n',
                      encoding='utf-8')
    print(f'{len(matches)} coincidencias entre proclamaciones')
