---
name: analizar-trayectorias-electorales
description: Actualiza y audita el análisis público de estudios, trayectoria profesional y empresas fundadas de las candidaturas de Quién se presenta. Úsala al incorporar correcciones o regenerar el análisis electoral.
---

# Analizar trayectorias electorales

Recalcula desde el catálogo vigente de `dist/`. La proclamación y sus correcciones definen el universo electoral. Usa el identificador de formación, la circunscripción y el nombre completo para cruzar las fichas del BOE con la evidencia. La pestaña analiza apariciones en listas y las denomina «candidaturas». Incluye titulares y suplentes. En una ampliación que deduplique personas, verifica la identidad antes de fusionar apariciones. Una coincidencia de nombre por sí sola es insuficiente.

## Revisar la evidencia

- Para estudios, revisa los campos de estudios y formación institucional y la parte académica de las biografías verificadas. Registra el ámbito y, cuando conste, la titulación, el estado de finalización y la fuente. Distingue doctorados obtenidos, másteres acreditados y estudios cursados. Un cargo docente o un tratamiento de cortesía requiere evidencia adicional para acreditar un título.
- Para empleo, registra trabajos y actividades profesionales documentados con una fuente que acredite su ejercicio. Excluye los cargos electos, la dirección de partido y el trabajo de gabinete del cálculo de experiencia externa. La docencia, la sanidad y otros trabajos no políticos en el sector público cuentan como experiencia externa. Cuando la fuente solo indique una profesión, indica ese alcance y evita inferir empleador, fechas o experiencia efectiva.
- Para empresas, cuenta a la persona como fundadora si la fuente la vincula expresamente con la fundación o constitución de una empresa o negocio. Separa los empleos, las participaciones, la propiedad, los nombramientos y los cargos de administración. Un acto mercantil de constitución acredita que la entidad se constituyó, pero el nombramiento que lo acompaña no basta para identificar a los socios fundadores. Registra el nombre de la entidad y el sector cuando consten, así como la fuente de la fundación. Añade un enlace oficial de la entidad si verificas que le pertenece. Ante un negocio sin nombre, conserva la evidencia sin inventar una marca ni sumar varias menciones como negocios distintos.
- Ante una corrección, verifica la fuente y la identidad, actualiza la ficha que la contextualiza y revisa su clasificación. Conserva la fecha o periodo que figura en la fuente si afecta a su interpretación.

## Actualizar el cálculo

- Abre `dist/analisis.js` para revisar cómo usa el censo y las fuentes. El análisis lee los datos al abrir la pestaña. Los gráficos circulares cuentan una categoría por candidatura y reúnen en «Varias áreas» los perfiles con más de una categoría identificada.
- Para estudios, revisa la formación institucional y las cláusulas académicas de los campos de estudios y biografía. La lista de formación avanzada incluye másteres y doctorados completados cuando la fuente lo acredita.
- Para sectores de empleo, revisa las asignaciones de `dist/trabajos.js`. Guarda la clave de candidatura, el texto exacto de `experiencia` y las áreas que acredita. Si una corrección cambia la descripción exacta, revisa y actualiza su clasificación. Mantén sin clasificar cualquier actividad cuyo sector siga siendo ambiguo.
- Para fundadores, actualiza `dist/fundadores.js` con la clave de candidatura y los campos `name`, `sector`, `source`, `website` y `note` según la evidencia disponible. `name`, `sector` y `source` son obligatorios. Si el nombre comercial queda pendiente, usa una descripción explícita y, si se trata de más de una iniciativa, distingue cada entidad con la evidencia disponible. Para contar iniciativas distintas, el cálculo agrupa los nombres normalizados. `website` y `note` son opcionales.

## Publicar y comprobar

Aplica la misma taxonomía a titulares y suplentes de cualquier formación. Publica el significado de cada categoría y el criterio de asignación. Si una persona puede tener varios campos de estudio o trabajo, usa un gráfico de barras para contar todas las áreas o una categoría por candidatura para usar un gráfico circular. En un circular, explica cómo se elige la categoría o cómo se agrupan los perfiles multidisciplinares. Los porcentajes deben usar el denominador que indica el gráfico.

Presenta total, cobertura y datos pendientes por indicador. «Sin documentar» señala una ausencia de evidencia en el catálogo. Solo usa cero si el indicador lo permite y la fuente lo respalda. Explica si la cobertura para cada formación es limitada o desigual. Trata los recuentos brutos como medidas de cobertura. Compara por circunscripción, titularidad o formación solo si la cobertura permite interpretar el resultado. Una pregunta editorial útil es qué experiencia profesional documentada aporta cada lista y qué perfiles quedan pendientes de investigar.

Antes de terminar, comprueba que cada perfil clasificado se vincula a una candidatura real, que los registros enlazan a su evidencia, que cada gráfico cuadra con su denominador y que los pendientes permanecen visibles. Revisa que el texto público explica las mismas reglas que usa el cálculo. Si actualizas estas instrucciones, sincroniza la copia de `dist/metodologia/analizar-trayectorias-electorales/SKILL.md` destinada a la web.
