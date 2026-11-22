# 29N · Quién se presenta

Abre `dist/index.html` en el navegador. La web es estática y funciona sin instalación. Los enlaces a las fuentes requieren conexión.

## Metodologías reproducibles

Cada metodología tiene un archivo estándar `SKILL.md` en `.agents/skills/<nombre>/`. Copia el archivo completo a `dist/metodologia/<nombre>/SKILL.md` después de editarlo para que la web sirva la misma versión.

## Alcance

Elecciones generales de España del 29 de noviembre de 2026. El catálogo cubre el Congreso, con 534 listas proclamadas en 52 circunscripciones y 56 fichas agrupadas. La cifra de fichas depende de las equivalencias que usa el catálogo. En cada lista se conserva el rótulo oficial de su circunscripción. Se distingue entre titulares y suplentes.

Pulsa el nombre de un titular o suplente para consultar su perfil dentro de la lista. Los logotipos locales se acreditan en «Fuentes y metodología». La cobertura de investigación biográfica y económica es inicial. Cualquier campo sin evidencia verificada se etiqueta como «No disponible en esta ficha». Para incorporar hechos, añade su fuente directa en `dist/fichas.js`. Incluye ejercicio, ámbito o fecha de referencia cuando corresponda. La clave de perfil incluye formación, circunscripción y nombre completo.

## Programas electorales

Los programas se consultan desde las tarjetas y el apartado «Qué propone» de cada ficha. Para añadir uno en `dist/programas.js`, verifica en la web de la formación que el documento corresponde al 29N y a la candidatura concreta. Usa el enlace directo, indica el formato y el idioma cuando ayuden a la lectura y marca con `commitments: true` una publicación de compromisos parciales. Las fichas sin fuente muestran «Programa del 29N pendiente de verificar».

## Regenerar el análisis

La pestaña «Análisis» vuelve a calcular los recuentos desde los datos locales cada vez que se abre o cambia el filtro. Para incorporar una corrección, revisa la ficha y, cuando proceda, su clasificación en `dist/trabajos.js`, `dist/fundadores.js` o `dist/analisis.js`. Las reglas se mantienen en [análisis de trayectorias](.agents/skills/analizar-trayectorias-electorales/SKILL.md) y [orientación electoral](.agents/skills/documentar-orientacion-electoral/SKILL.md). Las copias públicas están en `dist/metodologia/`.

## Mantener el comparador de propuestas

Cada medida de `dist/propuestas.js` enlaza a una publicación de la formación y señala la página o el apartado. El comparador cruza las medidas con el catálogo electoral cada vez que se abre un tema. La [guía de análisis de programas](.agents/skills/analizar-programas-electorales/SKILL.md) explica cómo añadir medidas y revisar la cobertura. Su copia pública se sirve en `dist/metodologia/analizar-programas-electorales/SKILL.md`.

Para ampliar cada medida con competencia, coste, financiación y plazo, consulta la [guía de verificación de ejecución](.agents/skills/verificar-ejecucion-de-propuestas/SKILL.md).

## Revisar Imputaciones

La pestaña cruza procedimientos documentados en `dist/casos-judiciales.js` con las candidaturas publicadas. Cada ficha lleva su fecha, el estado procesal y la fuente pública oficial. La [guía de verificación judicial](.agents/skills/verificar-procesos-judiciales/SKILL.md) describe cómo actualizar las fichas y los importes.

## Actualizar el catálogo electoral

Descarga [el HTML de la proclamación del BOE](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-23103) y ejecuta `python3 importar.py ruta-al-html`. El importador incorpora las rectificaciones al Congreso de la [corrección del 7 de noviembre](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-23383). Ante publicaciones posteriores, revisa las rectificaciones antes de regenerar el catálogo.

## Fuentes de los currículos y correcciones

Los datos parlamentarios reutilizados se atribuyen a Congreso Abierto (congresoabierto.org), a partir de datos oficiales del Congreso de los Diputados, con licencia CC BY 4.0. Descarga [diputados.csv](https://congresoabierto.org/datos/csv/diputados.csv), [inmuebles.csv](https://congresoabierto.org/datos/csv/inmuebles.csv) y [borme.csv](https://congresoabierto.org/datos/csv/borme.csv) en una carpeta y ejecuta `python3 importar_perfiles.py ruta-a-la-carpeta`. El importador vincula el nombre completo y la circunscripción, y publica el tipo de inmueble, año y participación cuando están documentados. Los actos mercantiles enlazan al BORME y se omiten los que solo se apoyan en coincidencias por apellido.

Para actualizar los importes de altos cargos, descarga los documentos HTML del [BOE de 2024](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2024-6410), [2025](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-5822) y [2026](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-7339). Guarda cada archivo con el número del documento sin el prefijo BOE-A y ejecuta `python3 importar_declaraciones.py ruta/2024-6410.html ruta/2025-5822.html ruta/2026-7339.html`.

Las ampliaciones revisadas manualmente están en `dist/trayectorias.js` y `dist/formaciones-extra.js`. Contacto permite preparar una propuesta con la ficha, la corrección y su fuente pública,.

La regla de verificación aparece en las fichas con campos pendientes. El historial del 23J se obtiene con `python3 importar_candidaturas_previas.py ruta/boe-2023-15066.html`, usando el [HTML de la proclamación de 2023](https://www.boe.es/diario_boe/txt.php?id=BOE-A-2023-15066). El cruce exige coincidencias únicas por nombre completo, siglas y circunscripción. Se excluyen las juntas afectadas por las dos rectificaciones de julio, hasta revisar sus listas históricas.


## Publicación y correcciones

El flujo de GitHub Actions publica solo `dist/` en GitHub Pages desde `main`. En el repositorio público, activa **Issues** y en **Settings → Pages → Build and deployment** selecciona **GitHub Actions**.

En la URL de proyecto de GitHub Pages (`https://transparenciaelectoral.github.io/29n/`), el formulario abre un issue del repositorio con la ficha, la propuesta y la fuente ya rellenadas. La persona revisa el contenido y publica el issue desde su propia cuenta. El formulario no pide nombre ni correo de quien envía la propuesta. El issue muestra la cuenta de GitHub que lo publica. GitHub muestra el enlace definitivo tras publicar el issue.

Antes del primer commit público, usa una identidad de commit apta para publicar, por ejemplo la dirección noreply de tu cuenta de GitHub. Los créditos y las fuentes públicas se conservan en la web.
