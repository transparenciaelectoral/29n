---
name: verificar-evidencia-de-trayectorias
description: Contrasta afirmaciones de empleo fuera de la política de candidaturas del 29N, registra sus fuentes y calcula la cobertura de verificación por formación y circunscripción.
---

# Verificar evidencia de trayectorias

Aplica este procedimiento a titulares y suplentes. Empieza por el listado oficial del BOE y sus rectificaciones, representado en `dist/candidaturas.js`. Usa la clave completa `formación|circunscripción|nombre` del catálogo. Comprueba identidad con la candidatura oficial y un dato profesional o biográfico público, especialmente ante homónimos o variantes del nombre. Publica solo información pertinente para el cargo.

## Revisar cada afirmación

1. Delimita el puesto, la organización y las fechas que puedan acreditarse. Incluye trabajo asalariado, por cuenta propia y puestos profesionales de carrera en el sector público. Separa los cargos electos, puestos de partido, voluntariado, participación societaria y formación. Una titulación o la autoría de una publicación por sí solas no prueban un empleo.
2. Localiza la fuente original del empleo. Prioriza el nombramiento en un boletín oficial, la ficha del empleador que identifique un puesto propio, un directorio de profesorado o un registro profesional que acredite la afirmación concreta. Un currículum alojado por un parlamento conserva su carácter de declaración. Un perfil institucional puede corroborar un puesto dentro de esa institución y reproducir declaraciones sobre otros empleos.
3. Clasifica cada afirmación con uno de estos estados:

   | Estado | Evidencia exigida |
   |---|---|
   | `corroborado` | Al menos una fuente directa ajena a la candidatura confirma el alcance exacto de la afirmación. |
   | `declarado` | La candidatura, su partido, su currículum o una biografía reproducen la afirmación sin que se haya obtenido confirmación directa independiente. |
   | `conflicto` | Fuentes identificadas discrepan sobre el mismo hecho y periodo. Enlaza las fuentes de cada versión y reduce el texto a la discrepancia comprobable. |
   | Pendiente | Falta información suficiente para clasificar una afirmación o falta revisar la ficha. |

4. Escribe una frase factual con el alcance que prueban las fuentes. Guarda cada enlace directo, título identificable y fecha pública cuando conste. Una adjudicación acredita la adjudicación. Para afirmar el desempeño, busca además una fuente que lo acredite. Una noticia que solo reproduce otra fuente no es una corroboración adicional.

## Integrar y verificar

Usa `dist/evidencias-trayectorias.js`. Cada clave exacta contiene una lista de objetos con `status`, `text` y `sources`. Cada fuente tiene `label`, `url` HTTPS y `date` opcional en formato AAAA-MM-DD. Conserva todas las fuentes utilizadas y añade una fila separada por afirmación cuando tengan estados distintos. No incluyas afirmaciones pendientes como si fueran declaraciones. Mantén el análisis de sectores y currículos de la web, que mide otra cobertura.

Comprueba que cada clave existe en el catálogo, que los enlaces llevan al documento, que el texto coincide con el alcance de la fuente y que se renderizan todos los enlaces en Análisis. Con cada corrección vuelve a comprobar identidad, fechas y alcance de la afirmación, anota los cambios que afecten a una discrepancia y actualiza los recuentos.

## Interpretar los recuentos

El denominador es el número de candidaturas dentro de los filtros seleccionados. Cuenta candidaturas únicas por estado mostrado. Para disponer de grupos mutuamente excluyentes, usa corroborada si hay al menos una afirmación corroborada, declarada si solo constan declaraciones, en conflicto si se documenta una discrepancia sin corroboración y pendiente en las restantes. Comprueba que las filas con una combinación de estados se puedan leer completas. Expresa cada porcentaje como cobertura documental. Acompaña los recuentos con las cifras absolutas y evita atribuir una puntuación de credibilidad a las personas. Elige tandas repartidas entre formaciones, circunscripciones y posiciones sin presentarlas como muestras representativas.

Mantén una copia exacta de esta guía en `dist/metodologia/verificar-evidencia-de-trayectorias/SKILL.md`.

## Fechar la experiencia respecto al primer cargo o candidatura documentados

Contrasta la fecha de inicio de cada puesto con la del primer cargo público, cargo de partido o candidatura que hayas podido documentar. Busca antecedentes en las fuentes públicas y cita la evidencia de ambas fechas. Un cargo o una candidatura previos que se documenten después pueden cambiar la clasificación. Indica en el detalle cualquier afiliación o actividad política anterior que conste.

Registra la comparación en `dist/cronologia-trayectorias.js`. Cada clave tiene una lista de comprobaciones con `index` de la afirmación en `evidenciasTrayectorias29N`, explicación `text` y `sources` con enlaces. Indica `relation: 'anterior'` o `relation: 'posterior'` según el orden de las dos fechas. Ante fechas ambiguas, deja la cronología pendiente. El gráfico cuenta una vez cada candidatura del filtro y prioriza anterior corroborado, anterior declarado, solo posterior fechado y cronología pendiente, por ese orden.
