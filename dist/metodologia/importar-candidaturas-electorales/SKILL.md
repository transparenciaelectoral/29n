---
name: importar-candidaturas-electorales
description: Regenera y verifica el catálogo, el historial de candidaturas y los enlaces a papeletas del Congreso del 29N.
---

# Importar candidaturas electorales

1. Parte de la proclamación del Congreso del [BOE, 3 de noviembre de 2026](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-23103) y sus rectificaciones. Descarga el HTML y ejecuta `python3 importar.py ruta-al-html`. El importador incorpora la [corrección del 7 de noviembre](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-23383). Comprueba las rectificaciones publicadas después y aplica las que afecten al Congreso antes de aceptar el resultado.
2. Contrasta los titulares, suplentes y su orden con el BOE. Conserva el rótulo oficial de cada lista y las coaliciones como entidades propias. Cuenta formaciones agrupadas, listas por circunscripción y circunscripciones como unidades distintas. La clave de perfil es formación, circunscripción y nombre completo.
3. Para el historial, ejecuta `python3 importar_candidaturas_previas.py ruta-al-boe-2023` con el [BOE del 23J](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2023-15066). Requiere coincidencia única de nombre, siglas y circunscripción. El importador excluye las juntas afectadas por las rectificaciones históricas hasta revisarlas. Una candidatura anterior acredita esa aparición en una lista.
4. Contrasta las papeletas con el [portal electoral oficial](https://29neleccionesgenerales.es/papeletas-descargables/). Abre la ruta que genera `dist/app.js`, comprueba cámara y circunscripción y localiza el rótulo de la lista en el documento. Mantén visible el alcance CERA cuando corresponda. Verifica que los perfiles y las fuentes siguen abriendo tras regenerar el catálogo.
