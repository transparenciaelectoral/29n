# Analizar programas electorales

Trabaja con las formaciones del catálogo del Congreso en `dist/candidaturas.js`. Consulta en `dist/programas.js` si la fuente publicada es un programa electoral o una página de compromisos. Comprueba que el documento es de la convocatoria del 29N de 2026 y corresponde a la formación o coalición exacta. Una propuesta de un miembro de una coalición requiere confirmación en una publicación de la coalición para atribuírsela a esta.

## Seleccionar y resumir medidas

- Aplica las mismas preguntas a cada formación y tema. Prioriza medidas concretas, como el cambio propuesto, a quién se aplica, el ámbito y la cifra o el plazo si el documento los indica. Atribuye cada medida a quien la propone. Distingue objetivos, condiciones y vías de financiación cuando estén expresos. La cita acredita el compromiso publicado.
- Usa una o dos medidas por formación y tema. Resume con tus propias palabras y conserva las diferencias relevantes. Si la fuente se limita a señalar un objetivo general, indícalo. Evita convertir la falta de una cifra en cero o atribuir un plazo de toda la legislatura a un hito concreto.
- El criterio temático está en `temasPropuestas` en `dist/comparar-propuestas.js`. En defensa incluye política militar y alianzas. En I+D exige una medida sobre investigación, desarrollo experimental o apoyo explícito a esas actividades. En digitalización incluye conectividad, administración digital, inteligencia artificial y derechos digitales.
- Cada medida lleva un enlace directo a la fuente primaria y una referencia breve de la página o el apartado. Para PDF añade `#page=N` si has comprobado la posición en el visor, que puede diferir de la numeración impresa. Para HTML usa el enlace de la propia medida o un ancla comprobada. Una página de compromisos conserva esa etiqueta en la interfaz.
- Deja como pendiente cualquier tema sin medida verificada. El gráfico de cobertura o el recuento de fichas indica selección editorial. No permite atribuir una postura por ausencia, inferir viabilidad ni ordenar a las formaciones por calidad.

## Actualizar y comprobar

En `dist/propuestas.js`, busca las siglas exactas de la formación y la clave del tema. Cada medida del array contiene `text` (resumen), `url` (fuente HTTPS) y `reference` (página, capítulo o apartado). Si cambió la versión del documento, vuelve a comprobar las cifras y páginas de todas sus medidas. Para una nueva categoría, actualiza también las preguntas públicas de `temasPropuestas`.

Abre Propuestas, prueba la navegación por tema y el filtro, y abre los enlaces de las medidas editadas. Verifica que el estado de cobertura y la etiqueta de compromisos siguen correspondiendo a las fuentes. Sincroniza `dist/metodologia/propuestas.md` cuando cambien estas instrucciones.
