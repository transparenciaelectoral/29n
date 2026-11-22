---
name: actualizar-fichas-candidatos
description: Importa y verifica biografías, cargos, experiencia profesional y declaraciones patrimoniales de las candidaturas.
---

# Actualizar fichas de candidatos

1. Vincula cada evidencia a formación, circunscripción y nombre completo. Resuelve variantes de nombre con otra evidencia oficial. Fecha el dato y conserva su enlace en `dist/fichas.js` o `dist/trayectorias.js`. Distingue cargos, empleo fuera de la política, antigüedad de afiliación y actividad mercantil.
2. Descarga los CSV de diputados, inmuebles y BORME de [Congreso Abierto](https://congresoabierto.org/datos/) y ejecuta `python3 importar_perfiles.py directorio-con-los-csv`. Mantén la atribución CC BY 4.0. Conserva solo actos mercantiles identificados y documenta si derivan de un cargo público.
3. Para declaraciones de altos cargos usa los HTML del BOE indicados en el README y ejecuta `python3 importar_declaraciones.py ruta/2024-6410.html ruta/2025-5822.html ruta/2026-7339.html`. Registra partidas, fecha de declaración y porcentajes de titularidad cuando consten. Publica los inmuebles por tipo, año y participación.
4. Comprueba que el perfil muestra datos y fuentes, que los campos pendientes conservan su aviso y que las correcciones relevantes se reflejan en la clasificación de «Análisis».
