---
name: verificar-datos-de-formaciones
description: Documenta la fundación, afiliación, financiación y patrimonio de las formaciones electorales.
---

# Verificar datos de formaciones

- Identifica la entidad exacta en la proclamación electoral y en el Registro de Partidos del Ministerio del Interior. Registra fundación, inscripción y constitución de una coalición como hechos separados. Para coaliciones, atribuye cada cifra a la entidad que firma o publica el documento.
- Usa cuentas anuales, informes del Tribunal de Cuentas, censos de afiliación o publicaciones oficiales de la formación. Para cada dato guarda fuente directa, fecha o ejercicio y el alcance. Para afiliación indica si la fuente cuenta militantes, personas inscritas o un censo interno.
- Lee la partida del balance antes de registrar patrimonio neto, capital y fondo social, dotación o financiación en `dist/fichas.js` y `dist/formaciones-extra.js`. Conserva el signo y las unidades. No derives capital de patrimonio ni afiliación de votos. Cuando falte una cifra verificable deja el campo pendiente. Usa cero solo si lo confirma la fuente.
- Comprueba que las tarjetas muestran cada partida con la fuente correcta y que ambas ordenaciones colocan al final los datos pendientes.
