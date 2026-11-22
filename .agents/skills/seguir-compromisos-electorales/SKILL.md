---
name: seguir-compromisos-electorales
description: Verifica qué promesas de programas electorales anteriores se cumplieron durante el mandato correspondiente y calcula el mínimo acreditado sobre un bloque completo del programa.
---

# Verificar el cumplimiento electoral histórico

## Definir el conjunto

1. Descarga el programa publicado para la elección concreta. Identifica formación, fecha de la convocatoria, territorio, versión y páginas. Añade una fuente oficial del mandato y de la composición del Gobierno cuando intervenga una coalición.
2. Delimita un conjunto antes de contar resultados. Usa el programa íntegro o un bloque publicado y reproducible, como un capítulo completo con todos sus puntos. Registra su tamaño, numeración y regla de recuento. Conserva en el denominador los puntos sin evidencia suficiente. Evita duplicar una promesa al comparar documentos que se solapan.
3. Si un punto contiene varios compromisos y la unidad del denominador es el punto, exige que se cumplan todos para contarlo. Registra la unidad y conserva el mismo criterio al ampliar la revisión.

## Acreditar el resultado

- Vincula cada promesa al texto electoral y a un resultado oficial dentro de ese mandato y territorio. Usa el BOE o boletines territoriales para normas y presupuestos, y memorias, registros y estadísticas oficiales para la ejecución. Cita el acto y su fecha. Atribuye a cada administración o socio la intervención que consta en la fuente.
- Si la promesa era aprobar una ley, el acto de aprobación puede acreditar su cumplimiento. Si prometía aplicar una medida, alcanzar una cobertura o entregar viviendas, comprueba ese resultado con una fuente de ejecución y su fecha de corte. Registra solo los puntos plenamente acreditados en la lista pública de promesas cumplidas.
- Conserva la línea de base cuando haga falta distinguir un cambio de una política preexistente. Un resultado de un mandato anterior se estudia en el conjunto electoral de ese mandato.

## Registrar y reproducir

Usa `cumplimientoHistorico` en `dist/seguimiento.js`. Cada conjunto lleva `id`, `party`, `territory`, `election`, `mandate`, `title`, `scope`, `proposalCount` y `program` con `label` y `url`. En `completed`, registra un objeto por punto cumplido con `id`, `title`, `promise`, `result` y `sources`. Añade `date` en formato ISO para fechar el resultado cuando corresponda. Enlaza toda fuente empleada, con página o artículo cuando sea posible. Si añades `mandateSource`, incluye el título y enlace de la fuente oficial del gobierno.

Calcula el mínimo documentado como puntos acreditados entre todos los puntos del conjunto. Publica numerador, denominador y selección. Ese cociente describe la cobertura acreditada de un bloque y mandato concretos. No lo extrapoles al conjunto de la historia del partido. La discrepancia entre numerador y denominador incluye puntos aún no verificados. Evita un ranking entre bloques de alcance distinto.

Comprueba que todos los puntos contabilizados tienen una fuente del programa y del resultado, que las fechas encajan en el mandato y que el numerador no supera el denominador. Sincroniza la copia de `dist/metodologia/seguir-compromisos-electorales/SKILL.md`.
