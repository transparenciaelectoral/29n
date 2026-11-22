"use strict";

// Medidas de la convocatoria del 29N verificadas en los documentos enlazados.
const propuestas29N = {
  "PSOE": {
    "vivienda": [
      {
        "text": "Movilizar cada año el equivalente al 1 % del PIB para vivienda y ampliar el parque público y protegido.",
        "url": "https://www.psoe.es/media-content/2026/11/PROGRAMAPSOE29N26-1.pdf",
        "reference": "Programa del 29N · Medidas 38 y 39"
      }
    ],
    "sanidad": [
      {
        "text": "Garantizar atención psicológica gratuita en la sanidad pública y una primera consulta en un máximo de 30 días.",
        "url": "https://www.psoe.es/media-content/2026/11/PROGRAMAPSOE29N26-1.pdf",
        "reference": "Programa del 29N · Medida 143"
      }
    ],
    "empleo": [
      {
        "text": "Incentivar que las empresas contraten a mayores de 45 años y formar en sectores estratégicos a personas en paro de larga duración.",
        "url": "https://www.psoe.es/media-content/2026/11/PROGRAMAPSOE29N26-1.pdf",
        "reference": "Programa del 29N · Medida 119"
      }
    ],
    "defensa": [
      {
        "text": "Impulsar la Unión Europea de la Defensa y la adquisición conjunta de capacidades militares con socios europeos.",
        "url": "https://www.psoe.es/media-content/2026/11/PROGRAMAPSOE29N26-1.pdf",
        "reference": "Programa del 29N · Medidas 482 y 494"
      }
    ],
    "investigacion": [
      {
        "text": "Aumentar la inversión pública en investigación y desarrollo hasta el 1,5 % del PIB en 2035.",
        "url": "https://www.psoe.es/media-content/2026/11/PROGRAMAPSOE29N26-1.pdf",
        "reference": "Programa del 29N · Medida 8"
      }
    ],
    "digitalizacion": [
      {
        "text": "Crear una ventanilla digital única para que ciudadanía y empresas hagan trámites y accedan a ayudas públicas.",
        "url": "https://www.psoe.es/media-content/2026/11/PROGRAMAPSOE29N26-1.pdf",
        "reference": "Programa del 29N · Medida 19"
      }
    ],
    "impuestos": [
      {
        "text": "Elevar del 0,2 % al 0,4 % el tipo del impuesto sobre las transacciones financieras.",
        "url": "https://www.psoe.es/media-content/2026/11/PROGRAMAPSOE29N26-1.pdf",
        "reference": "Programa del 29N · Medida 135"
      }
    ],
    "clima": [
      {
        "text": "Alcanzar el 81 % de generación eléctrica renovable en 2030 y mantener el calendario de cierre de las centrales nucleares hasta 2035.",
        "url": "https://www.psoe.es/media-content/2026/11/PROGRAMAPSOE29N26-1.pdf",
        "reference": "Programa del 29N · Medidas 234 y 240"
      }
    ],
    "educacion": [
      {
        "text": "Ampliar la financiación y cobertura de las becas y establecer límites de alumnado por aula.",
        "url": "https://www.psoe.es/media-content/2026/11/PROGRAMAPSOE29N26-1.pdf",
        "reference": "Programa del 29N · Medida 158"
      }
    ]
  },
  "PP": {
    "vivienda": [
      {
        "text": "Construir un millón de viviendas mediante la movilización de suelo público y privado y una nueva Ley del Suelo.",
        "url": "https://www.pp.es/wp-content/uploads/2026/11/PROGRAMA-ELECTORAL-PP-2026-RECONSTRUCCION-NACIONAL.pdf?sma=%3C%25%3D+delivery.label+%25%3E",
        "reference": "Programa del 29N · Medida 144"
      }
    ],
    "sanidad": [
      {
        "text": "Acordar con las comunidades un plan para reducir la espera sanitaria e incorporar al menos 4.500 médicos más a atención primaria.",
        "url": "https://www.pp.es/wp-content/uploads/2026/11/PROGRAMA-ELECTORAL-PP-2026-RECONSTRUCCION-NACIONAL.pdf?sma=%3C%25%3D+delivery.label+%25%3E",
        "reference": "Programa del 29N · Medidas 219 y 220"
      }
    ],
    "empleo": [
      {
        "text": "Bonificar las cotizaciones empresariales del primer trabajador contratado por un autónomo, al 100 % el primer año y al 50 % el segundo.",
        "url": "https://www.pp.es/wp-content/uploads/2026/11/PROGRAMA-ELECTORAL-PP-2026-RECONSTRUCCION-NACIONAL.pdf?sma=%3C%25%3D+delivery.label+%25%3E",
        "reference": "Programa del 29N · Medida 171"
      }
    ],
    "defensa": [
      {
        "text": "Aumentar el personal militar, renovar sus medios y reforzar la industria española de defensa.",
        "url": "https://www.pp.es/wp-content/uploads/2026/11/PROGRAMA-ELECTORAL-PP-2026-RECONSTRUCCION-NACIONAL.pdf?sma=%3C%25%3D+delivery.label+%25%3E",
        "reference": "Programa del 29N · Medidas 53 y 55"
      }
    ],
    "investigacion": [
      {
        "text": "Aumentar la deducción fiscal por investigación e innovación y facilitar las licencias de patentes públicas.",
        "url": "https://www.pp.es/wp-content/uploads/2026/11/PROGRAMA-ELECTORAL-PP-2026-RECONSTRUCCION-NACIONAL.pdf?sma=%3C%25%3D+delivery.label+%25%3E",
        "reference": "Programa del 29N · Medida 189"
      }
    ],
    "digitalizacion": [
      {
        "text": "Permitir que las empresas amorticen íntegramente en el mismo año sus inversiones en digitalización, IA y ciberseguridad.",
        "url": "https://www.pp.es/wp-content/uploads/2026/11/PROGRAMA-ELECTORAL-PP-2026-RECONSTRUCCION-NACIONAL.pdf?sma=%3C%25%3D+delivery.label+%25%3E",
        "reference": "Programa del 29N · Medida 181"
      }
    ],
    "educacion": [
      {
        "text": "Reconocer por ley el derecho a beca para quien cumpla los requisitos de renta y apruebe, con los mismos umbrales en universidad y FP.",
        "url": "https://www.pp.es/wp-content/uploads/2026/11/PROGRAMA-ELECTORAL-PP-2026-RECONSTRUCCION-NACIONAL.pdf?sma=%3C%25%3D+delivery.label+%25%3E",
        "reference": "Programa del 29N · Medida 218"
      }
    ],
    "impuestos": [
      {
        "text": "Subir los mínimos personales y familiares del IRPF y ligar a futuras subidas del salario mínimo el umbral para que siga exento.",
        "url": "https://www.pp.es/wp-content/uploads/2026/11/PROGRAMA-ELECTORAL-PP-2026-RECONSTRUCCION-NACIONAL.pdf?sma=%3C%25%3D+delivery.label+%25%3E",
        "reference": "Programa del 29N · Medida 177"
      }
    ],
    "clima": [
      {
        "text": "Tramitar en los primeros cien días la extensión de la vida útil de cinco centrales nucleares, sujeta al visto bueno del Consejo de Seguridad Nuclear.",
        "url": "https://www.pp.es/wp-content/uploads/2026/11/PROGRAMA-ELECTORAL-PP-2026-RECONSTRUCCION-NACIONAL.pdf?sma=%3C%25%3D+delivery.label+%25%3E",
        "reference": "Programa del 29N · Medida 228"
      }
    ]
  },
  "VOX": {
    "vivienda": [
      {
        "text": "Derogar la Ley de Vivienda y aplicar un IVA del 0 % a la primera vivienda nueva de las familias españolas, o una bonificación del 100 % del ITP si es usada.",
        "url": "https://www.voxespana.es/abascal/es-sentido-comun-estas-son-las-medidas-de-vox-para-el-29n-20261112?amp=&noamp=mobile",
        "reference": "Presentación del programa · 5. Vivienda"
      }
    ],
    "sanidad": [
      {
        "text": "Implantar una tarjeta sanitaria única con historial clínico compartido y un plan nacional para reducir las listas de espera.",
        "url": "https://www.voxespana.es/abascal/es-sentido-comun-estas-son-las-medidas-de-vox-para-el-29n-20261112?amp=&noamp=mobile",
        "reference": "Presentación del programa · 8. Sanidad"
      }
    ],
    "empleo": [
      {
        "text": "Eliminar la cuota a los autónomos por debajo del salario mínimo y establecer por encima una cuota progresiva desde 50 euros.",
        "url": "https://www.voxespana.es/abascal/es-sentido-comun-estas-son-las-medidas-de-vox-para-el-29n-20261112?amp=&noamp=mobile",
        "reference": "Presentación del programa · 2. Economía, industria y energía"
      }
    ],
    "defensa": [
      {
        "text": "Aumentar la inversión en defensa, reforzar la protección fronteriza con las Fuerzas Armadas y mejorar la ciberseguridad.",
        "url": "https://www.voxespana.es/abascal/es-sentido-comun-estas-son-las-medidas-de-vox-para-el-29n-20261112?amp=&noamp=mobile",
        "reference": "Presentación del programa · 10. Seguridad y Defensa"
      }
    ],
    "investigacion": [
      {
        "text": "Impulsar la investigación y el desarrollo de inteligencia artificial para su aplicación en la economía española.",
        "url": "https://www.voxespana.es/wp-content/uploads/2026/11/Programa-completo-A5-1.pdf",
        "reference": "Programa del 29N · Medida 37"
      }
    ],
    "digitalizacion": [
      {
        "text": "Introducir inteligencia artificial en la Administración para agilizar trámites y mantener la atención presencial.",
        "url": "https://www.voxespana.es/wp-content/uploads/2026/11/Programa-completo-A5-1.pdf",
        "reference": "Programa del 29N · Medida 37"
      }
    ],
    "educacion": [
      {
        "text": "Establecer un currículo y una prueba de acceso a la universidad comunes en toda España.",
        "url": "https://www.voxespana.es/abascal/es-sentido-comun-estas-son-las-medidas-de-vox-para-el-29n-20261112?amp=&noamp=mobile",
        "reference": "Presentación del programa · 9. Educación, Cultura y Deporte"
      }
    ],
    "impuestos": [
      {
        "text": "Reducir el IRPF, el IVA y el impuesto sobre sociedades.",
        "url": "https://www.voxespana.es/abascal/es-sentido-comun-estas-son-las-medidas-de-vox-para-el-29n-20261112?amp=&noamp=mobile",
        "reference": "Presentación del programa · 2. Economía, industria y energía"
      }
    ],
    "clima": [
      {
        "text": "Derogar el calendario de cierre de las centrales nucleares y revertir normas derivadas del Pacto Verde.",
        "url": "https://www.voxespana.es/abascal/es-sentido-comun-estas-son-las-medidas-de-vox-para-el-29n-20261112?amp=&noamp=mobile",
        "reference": "Presentación del programa · 2. Economía, industria y energía"
      }
    ]
  },
  "PODEMOS": {
    "vivienda": [
      {
        "text": "Reducir por ley los alquileres un 40 %, con un suelo del 60 % del precio medio actual de la zona.",
        "url": "https://pazcasaytrabajo.es/programa-electoral/programa-electoral-paz-casa-y-trabajo.pdf#page=8",
        "reference": "Programa del 29N · Medida 1, p. 8"
      }
    ],
    "sanidad": [
      {
        "text": "Derogar las normas que habilitan la gestión sanitaria privada y blindar la titularidad y la gestión públicas del Sistema Nacional de Salud.",
        "url": "https://pazcasaytrabajo.es/programa-electoral/programa-electoral-paz-casa-y-trabajo.pdf#page=88",
        "reference": "Programa del 29N · Gestión sanitaria, p. 88"
      }
    ],
    "empleo": [
      {
        "text": "Reducir la jornada semanal sin bajar salarios, primero a 35 horas y después a 30 durante la legislatura.",
        "url": "https://pazcasaytrabajo.es/programa-electoral/programa-electoral-paz-casa-y-trabajo.pdf#page=41",
        "reference": "Programa del 29N · Medida 113, p. 41"
      }
    ],
    "defensa": [
      {
        "text": "Impulsar la salida de la OTAN, revertir el aumento del gasto militar y congelarlo después, salvo mejoras salariales, laborales y de alojamiento de la tropa.",
        "url": "https://pazcasaytrabajo.es/programa-electoral/programa-electoral-paz-casa-y-trabajo.pdf#page=28",
        "reference": "Programa del 29N · Medidas 70 y 72, p. 28"
      }
    ],
    "investigacion": [
      {
        "text": "Elevar la inversión pública en ciencia e innovación al 2 % del PIB y priorizar las ayudas directas frente al crédito.",
        "url": "https://pazcasaytrabajo.es/programa-electoral/programa-electoral-paz-casa-y-trabajo.pdf#page=87",
        "reference": "Programa del 29N · Medida 298, p. 87"
      }
    ],
    "digitalizacion": [
      {
        "text": "Modernizar la plataforma digital de extranjería Mercurio para reducir bloqueos y facilitar el seguimiento de expedientes.",
        "url": "https://pazcasaytrabajo.es/programa-electoral/programa-electoral-paz-casa-y-trabajo.pdf#page=68",
        "reference": "Programa del 29N · Medida 213, p. 68"
      }
    ],
    "educacion": [
      {
        "text": "Reducir por etapa el máximo de alumnado por aula en centros sostenidos con fondos públicos.",
        "url": "https://pazcasaytrabajo.es/programa-electoral/programa-electoral-paz-casa-y-trabajo.pdf#page=79",
        "reference": "Programa del 29N · Medida 280, pp. 79–80"
      }
    ],
    "impuestos": [
      {
        "text": "Bajar del 9,5 % al 9 % el tipo mínimo de la escala estatal general del IRPF y subir los tipos de bases superiores a 60.000 euros.",
        "url": "https://pazcasaytrabajo.es/programa-electoral/programa-electoral-paz-casa-y-trabajo.pdf#page=21",
        "reference": "Programa del 29N · Progresividad fiscal, p. 21"
      }
    ],
    "clima": [
      {
        "text": "Mantener el calendario de cierre de las centrales nucleares y acompañar el proceso con medidas de transición justa.",
        "url": "https://pazcasaytrabajo.es/programa-electoral/programa-electoral-paz-casa-y-trabajo.pdf#page=103",
        "reference": "Programa del 29N · Medida 339, p. 103"
      }
    ]
  },
  "FA": {
    "vivienda": [
      {
        "text": "Limitar por ley el precio del alquiler en zonas tensionadas con un tope vinculado a las rentas del barrio.",
        "url": "https://frenteamplio.info/programa/vivienda/",
        "reference": "Programa del 29N · Vivienda"
      }
    ],
    "sanidad": [
      {
        "text": "Dedicar a sanidad pública el 8 % del PIB y hacer de la gestión pública directa la fórmula general del Sistema Nacional de Salud.",
        "url": "https://frenteamplio.info/programa/sanidad/",
        "reference": "Programa del 29N · Servicios públicos de calidad"
      }
    ],
    "empleo": [
      {
        "text": "Reducir la jornada a 32 horas y fijar por ley un salario mínimo de al menos el 60 % del salario medio neto.",
        "url": "https://frenteamplio.info/programa/trabajo/",
        "reference": "Programa del 29N · Salarios y pensiones"
      }
    ],
    "defensa": [
      {
        "text": "Centrar la acción exterior en la seguridad humana y en prevenir los conflictos mediante la diplomacia.",
        "url": "https://frenteamplio.info/programa/exterior/",
        "reference": "Programa del 29N · Seguridad humana, paz, solidaridad y Europa"
      }
    ],
    "investigacion": [
      {
        "text": "Elevar la inversión pública y privada en investigación, desarrollo e innovación al 3 % del PIB en 2030.",
        "url": "https://frenteamplio.info/programa/politica-industrial-y-soberania-tecnologica/",
        "reference": "Programa del 29N · Política industrial y soberanía tecnológica"
      }
    ],
    "digitalizacion": [
      {
        "text": "Aprobar una ley para el uso de IA en la Administración con inventario público de sistemas y revisión humana de decisiones.",
        "url": "https://frenteamplio.info/programa/democracia-digital/",
        "reference": "Programa del 29N · Poder digital y pluralismo informativo"
      }
    ],
    "educacion": [
      {
        "text": "Llevar la inversión educativa al 7 % del PIB en 2030 y limitar por ley el número máximo de alumnos por aula.",
        "url": "https://frenteamplio.info/programa/sanidad/",
        "reference": "Programa del 29N · Servicios públicos de calidad"
      }
    ],
    "impuestos": [
      {
        "text": "Crear un impuesto ambiental para aviones privados, yates, coches de lujo y otros bienes suntuarios.",
        "url": "https://frenteamplio.info/programa/impuestos/",
        "reference": "Programa del 29N · Reforma fiscal"
      },
      {
        "text": "Igualar la pensión mínima al salario mínimo y establecer la edad de jubilación en 65 años.",
        "url": "https://frenteamplio.info/programa/",
        "reference": "Pensión mínima igual al SMI"
      }
    ],
    "clima": [
      {
        "text": "Aprobar un Plan Estatal de Seguridad Ambiental para proteger a la población del calor extremo, las inundaciones, los incendios y las sequías.",
        "url": "https://frenteamplio.info/programa/cambio-climatico/",
        "reference": "Programa del 29N · Transición ecológica"
      }
    ]
  },
  "PACMA": {
    "vivienda": [
      {
        "text": "Construir vivienda pública, adquirir inmuebles vacíos y destinarlos a compra o alquiler social.",
        "url": "https://pacma.es/wp-content/uploads/2026/11/PE_GENERALES_29N26.pdf#page=69",
        "reference": "Programa del 29N · Sección 3.5, pp. 69–70"
      }
    ],
    "sanidad": [
      {
        "text": "Reincorporar a la sanidad pública los servicios privatizados y reforzar la atención primaria.",
        "url": "https://pacma.es/wp-content/uploads/2026/11/PE_GENERALES_29N26.pdf#page=56",
        "reference": "Programa del 29N · Sección 3.2.1, pp. 55–56"
      }
    ],
    "empleo": [
      {
        "text": "Crear un plan nacional para apoyar la formación, el empleo y la accesibilidad universal de las personas con discapacidad.",
        "url": "https://pacma.es/wp-content/uploads/2026/11/PE_GENERALES_29N26.pdf#page=66",
        "reference": "Programa del 29N · Sección 3.4.3, pp. 65–66"
      }
    ],
    "investigacion": [
      {
        "text": "Aumentar la financiación de proyectos científicos que desarrollen sustitutos de la experimentación con animales.",
        "url": "https://pacma.es/wp-content/uploads/2026/11/PE_GENERALES_29N26.pdf#page=29",
        "reference": "Programa del 29N · Sección 1.5, pp. 29–30"
      }
    ],
    "digitalizacion": [
      {
        "text": "Mejorar la conectividad digital en ciudades medianas y zonas rurales para facilitar el teletrabajo y distribuir el empleo.",
        "url": "https://pacma.es/wp-content/uploads/2026/11/PE_GENERALES_29N26.pdf#page=70",
        "reference": "Programa del 29N · Sección 3.5, p. 70"
      }
    ],
    "clima": [
      {
        "text": "Reforzar la prevención de incendios con áreas cortafuegos y actuaciones de prevención en núcleos cercanos a masas forestales.",
        "url": "https://pacma.es/wp-content/uploads/2026/11/PE_GENERALES_29N26.pdf#page=51",
        "reference": "Programa del 29N · Sección 2.12, pp. 48–51"
      }
    ],
    "educacion": [
      {
        "text": "Promover un pacto de Estado por la educación pública que, entre otros fines, extienda la educación universal de cero a tres años.",
        "url": "https://pacma.es/wp-content/uploads/2026/11/PE_GENERALES_29N26.pdf#page=59",
        "reference": "Programa del 29N · Sección 3.3.1, p. 59"
      }
    ],
    "impuestos": [
      {
        "text": "Reforzar los controles fiscales y la cooperación internacional y usar nuevas tecnologías para detectar el fraude.",
        "url": "https://pacma.es/wp-content/uploads/2026/11/PE_GENERALES_29N26.pdf#page=72",
        "reference": "Programa del 29N · Sección 3.8, p. 72"
      }
    ]
  },
  "EAJ-PNV": {
    "vivienda": [
      {
        "text": "Facilitar la construcción, rehabilitación y movilización de viviendas vacías. Evitar que se usen los contratos de temporada para eludir las garantías del alquiler habitual.",
        "url": "https://www.eaj-pnv.eus/es/programa-elecciones-generales-2026/",
        "reference": "Programa del 29N · bloque 01, medidas 1 y 2"
      }
    ],
    "sanidad": [
      {
        "text": "Ajustar la formación sanitaria especializada a las necesidades de personal de Osakidetza.",
        "url": "https://www.eaj-pnv.eus/es/programa-elecciones-generales-2026/",
        "reference": "Programa del 29N · bloque 04, medida 4"
      }
    ],
    "empleo": [
      {
        "text": "Reclamar la competencia para fijar en Euskadi un salario mínimo propio superior al estatal. Ampliar de 24 a 36 meses la duración máxima de la prestación contributiva por desempleo.",
        "url": "https://www.eaj-pnv.eus/es/programa-elecciones-generales-2026/",
        "reference": "Programa del 29N · bloque 01, medidas 3 y 4"
      }
    ],
    "investigacion": [
      {
        "text": "Adaptar los programas estatales de innovación a las necesidades de la industria vasca y facilitar financiación a sus empresas para investigación y desarrollo tecnológico.",
        "url": "https://www.eaj-pnv.eus/es/adjuntos-documentos/21765/pdf/programa-electoral-29n",
        "reference": "Programa del 29N · apartado 2.1, medida 4"
      }
    ],
    "digitalizacion": [
      {
        "text": "Apoyar que las pymes incorporen herramientas digitales e inteligencia artificial para modernizar sus procesos de producción.",
        "url": "https://www.eaj-pnv.eus/es/adjuntos-documentos/21765/pdf/programa-electoral-29n",
        "reference": "Programa del 29N · apartado 2.1, medida 5"
      }
    ]
  },
  "EH BILDU": {
    "vivienda": [
      {
        "text": "Introducir prórrogas automáticas en los contratos ordinarios de alquiler y prohibir de forma permanente el desahucio de hogares vulnerables sin alternativa habitacional, con compensación financiada por el Estado.",
        "url": "https://posibleegin.ehbildu.eus/wp-content/uploads/2026/11/PROGRAMA-CAS.pdf#page=5",
        "reference": "Programa del 29N · apartado 1.1 · p. 5"
      }
    ],
    "sanidad": [
      {
        "text": "Reforzar la atención primaria dando prioridad a la especialidad de Medicina Familiar y Comunitaria en la formación sanitaria.",
        "url": "https://posibleegin.ehbildu.eus/wp-content/uploads/2026/11/PROGRAMA-CAS.pdf#page=10",
        "reference": "Programa del 29N · apartado 1.5.1 · p. 10"
      }
    ],
    "empleo": [
      {
        "text": "Reducir la jornada a 32 horas semanales o cuatro días sin rebaja salarial. Para las pymes prevé partir de 35 horas y avanzar hasta el objetivo en un máximo de tres años.",
        "url": "https://posibleegin.ehbildu.eus/wp-content/uploads/2026/11/PROGRAMA-CAS.pdf#page=6",
        "reference": "Programa del 29N · apartado 1.2 · p. 6"
      }
    ],
    "defensa": [
      {
        "text": "Rechazar el aumento del gasto militar reclamado por la OTAN y promover un marco europeo de seguridad menos dependiente de la Alianza y de Estados Unidos.",
        "url": "https://posibleegin.ehbildu.eus/wp-content/uploads/2026/11/PROGRAMA-CAS.pdf#page=28",
        "reference": "Programa del 29N · apartados 3.2.2 a 3.2.4 · p. 28"
      }
    ],
    "digitalizacion": [
      {
        "text": "Promover la supervisión pública y la auditoría de los sistemas de inteligencia artificial. Priorizar el software libre y los estándares abiertos en la infraestructura digital.",
        "url": "https://posibleegin.ehbildu.eus/wp-content/uploads/2026/11/PROGRAMA-CAS.pdf#page=21",
        "reference": "Programa del 29N · apartado 1.12 · p. 21"
      }
    ]
  },
  "ERC": {
    "vivienda": [
      {
        "text": "Dedicar al menos el 1,5 % del PIB a políticas de vivienda. Traspasar a la Generalitat los inmuebles de Sareb y Casa 47 para incorporarlos al parque público.",
        "url": "https://img.beteve.cat/wp-content/uploads/2026/11/ERC-programa-electoral-29-N-2026-2026-11-12.pdf",
        "reference": "Programa de ERC del 29N (copia en betevé) · medidas 56 y 57"
      }
    ],
    "sanidad": [
      {
        "text": "Incorporar a la cartera pública la atención bucodental integral y ampliar la financiación para garantizar acceso universal y gratuito a la atención psicológica.",
        "url": "https://img.beteve.cat/wp-content/uploads/2026/11/ERC-programa-electoral-29-N-2026-2026-11-12.pdf",
        "reference": "Programa de ERC del 29N (copia en betevé) · medidas 237 y 238"
      }
    ],
    "empleo": [
      {
        "text": "Elevar el salario mínimo estatal hasta el 60 % del salario bruto medio y transferir a la Generalitat la competencia para establecer un salario mínimo catalán de 1.460 euros.",
        "url": "https://img.beteve.cat/wp-content/uploads/2026/11/ERC-programa-electoral-29-N-2026-2026-11-12.pdf",
        "reference": "Programa de ERC del 29N (copia en betevé) · medidas 66 y 67"
      }
    ],
    "defensa": [
      {
        "text": "Defender una Unión Europea con autonomía respecto de la OTAN en materia de defensa y mantener su apoyo a Ucrania ante la agresión rusa.",
        "url": "https://img.beteve.cat/wp-content/uploads/2026/11/ERC-programa-electoral-29-N-2026-2026-11-12.pdf",
        "reference": "Programa de ERC del 29N (copia en betevé) · apartado G, Unión Europea, proyección internacional y cooperación"
      }
    ],
    "investigacion": [
      {
        "text": "Aumentar progresivamente la inversión pública en investigación hasta el 1,5 % del PIB en 2030.",
        "url": "https://img.beteve.cat/wp-content/uploads/2026/11/ERC-programa-electoral-29-N-2026-2026-11-12.pdf",
        "reference": "Programa de ERC del 29N (copia en betevé) · medida 252"
      }
    ],
    "digitalizacion": [
      {
        "text": "Usar la compra pública para favorecer soluciones europeas abiertas e interoperables y desarrollar capacidades propias en computación, inteligencia artificial y servicios en la nube.",
        "url": "https://img.beteve.cat/wp-content/uploads/2026/11/ERC-programa-electoral-29-N-2026-2026-11-12.pdf",
        "reference": "Programa de ERC del 29N (copia en betevé) · medida 198"
      }
    ]
  },
  "JXCAT": {
    "vivienda": [
      {
        "text": "Ampliar el parque público de vivienda con suelo e inmuebles estatales en Cataluña y reducir los impuestos sobre la construcción y rehabilitación de vivienda asequible dentro del marco fiscal europeo.",
        "url": "https://www.tualcentre.cat/app/uploads/2026/11/PROGRAMA-ELECTORAL_JUNTS_29N.pdf#page=18",
        "reference": "Programa del 29N · bloque I, vivienda y propiedad · p. 18"
      }
    ],
    "sanidad": [
      {
        "text": "Traspasar a la Generalitat la formación sanitaria especializada y ampliar las plazas MIR según necesidades asistenciales, con atención a Medicina Familiar y Comunitaria y a especialidades deficitarias.",
        "url": "https://www.tualcentre.cat/app/uploads/2026/11/PROGRAMA-ELECTORAL_JUNTS_29N.pdf#page=51",
        "reference": "Programa del 29N · bloque II, objetivo 2 de salud · p. 51"
      }
    ],
    "empleo": [
      {
        "text": "Impulsar un salario mínimo catalán que se acerque progresivamente al 60 % del salario medio catalán, mediante diálogo social.",
        "url": "https://www.tualcentre.cat/app/uploads/2026/11/PROGRAMA-ELECTORAL_JUNTS_29N.pdf#page=70",
        "reference": "Programa del 29N · bloque III, objetivo 5 de economía, empresas y trabajo · p. 70"
      }
    ],
    "defensa": [
      {
        "text": "Apoyar una defensa europea más integrada que complemente a la OTAN.",
        "url": "https://www.tualcentre.cat/app/uploads/2026/11/PROGRAMA-ELECTORAL_JUNTS_29N.pdf#page=28",
        "reference": "Programa del 29N · bloque I, objetivo 3 de política internacional · p. 28"
      }
    ],
    "investigacion": [
      {
        "text": "Crear mecanismos estatales de financiación estable para la investigación biomédica, clínica y traslacional en medicamentos, con participación de centros de investigación, hospitales, universidades y empresas.",
        "url": "https://www.tualcentre.cat/app/uploads/2026/11/PROGRAMA-ELECTORAL_JUNTS_29N.pdf#page=51",
        "reference": "Programa del 29N · bloque II, objetivo 5 de salud · p. 51"
      }
    ],
    "digitalizacion": [
      {
        "text": "Pedir el traspaso a Cataluña de la regulación de las telecomunicaciones y de la gestión del espectro para poder exigir cobertura 5G en todo el territorio.",
        "url": "https://www.tualcentre.cat/app/uploads/2026/11/PROGRAMA-ELECTORAL_JUNTS_29N.pdf#page=79",
        "reference": "Programa del 29N · bloque III, soberanía digital · p. 79"
      }
    ]
  },
  "BNG": {
    "vivienda": [
      {
        "text": "Garantizar por ley que las viviendas financiadas con recursos públicos sigan siendo públicas de forma permanente.",
        "url": "https://www.bng.gal/media/bnggaliza/files/2026/11/03/26_bng_xerais_documentos_programa_electoral.pdf#page=12",
        "reference": "Programa del 29N · apartado 2.1 · p. 12"
      }
    ],
    "sanidad": [
      {
        "text": "Elevar la financiación de la sanidad pública al menos a la media de inversión por habitante de la UE y reforzar el peso de la dispersión y el envejecimiento en el reparto.",
        "url": "https://www.bng.gal/media/bnggaliza/files/2026/11/03/26_bng_xerais_documentos_programa_electoral.pdf#page=37",
        "reference": "Programa del 29N · apartado 3.2 · p. 37"
      }
    ],
    "empleo": [
      {
        "text": "Restablecer la indemnización por despido improcedente de 45 días por año trabajado, con un máximo de 42 mensualidades, y recuperar la autorización administrativa de los despidos colectivos.",
        "url": "https://www.bng.gal/media/bnggaliza/files/2026/11/03/26_bng_xerais_documentos_programa_electoral.pdf#page=15",
        "reference": "Programa del 29N · apartado 2.2 · p. 15"
      }
    ],
    "defensa": [
      {
        "text": "Promover la salida de España de la OTAN y retirar a los efectivos españoles de sus misiones.",
        "url": "https://www.bng.gal/media/bnggaliza/files/2026/11/03/26_bng_xerais_documentos_programa_electoral.pdf#page=89",
        "reference": "Programa del 29N · apartado 11 · p. 89"
      }
    ],
    "investigacion": [
      {
        "text": "Elevar progresivamente la inversión estatal en I+D+i hasta el 3 % del PIB en 2030 y mejorar la estabilidad y las condiciones del personal investigador.",
        "url": "https://www.bng.gal/media/bnggaliza/files/2026/11/03/26_bng_xerais_documentos_programa_electoral.pdf#page=52",
        "reference": "Programa del 29N · apartado 4.5 · p. 52"
      }
    ],
    "digitalizacion": [
      {
        "text": "Crear una red pública estatal de almacenamiento y computación y financiar una infraestructura gallega de servidores para administraciones, universidades y servicios públicos.",
        "url": "https://www.bng.gal/media/bnggaliza/files/2026/11/03/26_bng_xerais_documentos_programa_electoral.pdf#page=79",
        "reference": "Programa del 29N · apartado 8.5 · p. 79"
      }
    ]
  },
  "CCA-1.ºCAN": {
    "vivienda": [
      {
        "text": "Incentivar fiscalmente a pequeños propietarios que incorporen viviendas a programas de alquiler asequible e impulsar reformas para limitar la compra de vivienda en Canarias por extranjeros.",
        "url": "https://coalicioncanaria.org/wp-content/uploads/2026/11/CCA-26-Programa_Electoral-29NOV.pdf",
        "reference": "Programa del 29N · medidas 24 y 26"
      }
    ],
    "sanidad": [
      {
        "text": "Reclamar más financiación estatal para salud mental en Canarias, orientada tanto a atención primaria como a los servicios especializados.",
        "url": "https://coalicioncanaria.org/wp-content/uploads/2026/11/CCA-26-Programa_Electoral-29NOV.pdf",
        "reference": "Programa del 29N · medida 12"
      }
    ],
    "empleo": [
      {
        "text": "Solicitar financiación estatal para un plan de empleo de cuatro años dirigido a menores de 35 años en Canarias, con seguimiento del acceso a empleos estables.",
        "url": "https://coalicioncanaria.org/wp-content/uploads/2026/11/CCA-26-Programa_Electoral-29NOV.pdf",
        "reference": "Programa del 29N · medida 45"
      }
    ],
    "defensa": [
      {
        "text": "Negociar con el Estado la cesión para uso civil de instalaciones militares en Canarias, entre ellas el campo de tiro de Pájara en Fuerteventura.",
        "url": "https://coalicioncanaria.org/wp-content/uploads/2026/11/CCA-26-Programa_Electoral-29NOV.pdf",
        "reference": "Programa del 29N · medida 9"
      }
    ],
    "investigacion": [
      {
        "text": "Adaptar las convocatorias estatales de I+D+i a la ultraperiferia y reclamar financiación plurianual para universidades públicas canarias y para áreas como astrofísica, ciencias marinas y biotecnología.",
        "url": "https://coalicioncanaria.org/wp-content/uploads/2026/11/CCA-26-Programa_Electoral-29NOV.pdf",
        "reference": "Programa del 29N · medida 48"
      }
    ],
    "digitalizacion": [
      {
        "text": "Pedir el plan específico de telecomunicaciones previsto en el Estatuto de Canarias para mejorar la conectividad en zonas rurales y en las islas afectadas por la doble insularidad.",
        "url": "https://coalicioncanaria.org/wp-content/uploads/2026/11/CCA-26-Programa_Electoral-29NOV.pdf",
        "reference": "Programa del 29N · medida 74"
      }
    ]
  },
  "FE DE LAS JONS": {
    "vivienda": [
      {
        "text": "Restablecer el Instituto Nacional de la Vivienda para crear un parque de vivienda social. Ofrecer hipotecas del ICO a tipos cercanos al 0 % y condonar parte del principal por cada nacimiento a familias jóvenes españolas, hasta saldar la deuda al cuarto hijo.",
        "url": "https://falange.es/wp-content/uploads/2026/11/FEDELASJONS_ProgramaElectoral_29NGenerales2026.pdf",
        "reference": "Programa del 29N · medidas 2.1 y 2.5"
      }
    ],
    "sanidad": [
      {
        "text": "Incorporar al Sistema Nacional de Salud cobertura oftalmológica y bucodental.",
        "url": "https://falange.es/wp-content/uploads/2026/11/FEDELASJONS_ProgramaElectoral_29NGenerales2026.pdf",
        "reference": "Programa del 29N · medida 20.4"
      }
    ],
    "empleo": [
      {
        "text": "Declarar nulos los despidos que no sean objetivos ni disciplinarios, con readmisión y pago de salarios de tramitación.",
        "url": "https://falange.es/wp-content/uploads/2026/11/FEDELASJONS_ProgramaElectoral_29NGenerales2026.pdf",
        "reference": "Programa del 29N · medidas 6.6 y 6.7"
      }
    ],
    "defensa": [
      {
        "text": "Abandonar la OTAN y aumentar el presupuesto español de defensa.",
        "url": "https://falange.es/wp-content/uploads/2026/11/FEDELASJONS_ProgramaElectoral_29NGenerales2026.pdf",
        "reference": "Programa del 29N · medidas 16.1 y 16.2"
      }
    ],
    "investigacion": [
      {
        "text": "Aumentar la inversión en investigación biosanitaria, potenciar la fabricación nacional de material sanitario y nacionalizar la industria farmacéutica.",
        "url": "https://falange.es/wp-content/uploads/2026/11/FEDELASJONS_ProgramaElectoral_29NGenerales2026.pdf",
        "reference": "Programa del 29N · medida 20.5"
      }
    ],
    "digitalizacion": [
      {
        "text": "Ampliar la digitalización de los procedimientos judiciales como parte de una reforma de las leyes procesales.",
        "url": "https://falange.es/wp-content/uploads/2026/11/FEDELASJONS_ProgramaElectoral_29NGenerales2026.pdf",
        "reference": "Programa del 29N · medida 17.9"
      }
    ]
  },
  "MUNDO+JUSTO": {
    "vivienda": [
      {
        "text": "Alcanzar al menos 1,35 millones de viviendas sociales y asequibles permanentes en 2030.",
        "url": "https://www.porunmundomasjusto.es/wp-content/uploads/2026/11/Castellano.pdf#page=5",
        "reference": "PDF, p. 5 · Eje 1 · Vivienda"
      }
    ],
    "sanidad": [
      {
        "text": "Incrementar la inversión sanitaria y reforzar la coordinación de las comunidades autónomas a través del Consejo Interterritorial de Salud.",
        "url": "https://www.porunmundomasjusto.es/wp-content/uploads/2026/11/Castellano.pdf#page=37",
        "reference": "PDF, p. 37 · Eje 11 · Sanidad pública"
      }
    ],
    "empleo": [
      {
        "text": "Reducir progresivamente la jornada laboral a 35 horas semanales sin rebaja salarial.",
        "url": "https://www.porunmundomasjusto.es/wp-content/uploads/2026/11/Castellano.pdf#page=29",
        "reference": "PDF, p. 29 · Eje 8 · Trabajo digno"
      }
    ],
    "defensa": [
      {
        "text": "Apoyar una iniciativa internacional para reducir el gasto militar un 2 % anual en todos los países entre 2026 y 2030 y dedicar el ahorro a emergencias globales.",
        "url": "https://www.porunmundomasjusto.es/wp-content/uploads/2026/11/Castellano.pdf#page=65",
        "reference": "PDF, p. 65 · Eje 22 · Política exterior"
      }
    ],
    "investigacion": [
      {
        "text": "Elevar la inversión en I+D al 3 % del PIB en 2030.",
        "url": "https://www.porunmundomasjusto.es/wp-content/uploads/2026/11/Castellano.pdf#page=49",
        "reference": "PDF, p. 49 · Eje 15 · Ciencia e investigación"
      }
    ],
    "digitalizacion": [
      {
        "text": "Mantener la atención presencial y reconocer el derecho al acompañamiento en trámites y servicios públicos digitalizados.",
        "url": "https://www.porunmundomasjusto.es/wp-content/uploads/2026/11/Castellano.pdf#page=77",
        "reference": "PDF, p. 77 · Eje 26 · Erradicación de la pobreza"
      }
    ]
  },
  "SALF": {
    "vivienda": [
      {
        "text": "Eliminar el ITP y el AJD de la primera vivienda y devolver en la declaración de la renta el IVA del 4 % previsto para esa compra.",
        "url": "https://www.seacabolafiesta.com/29n",
        "reference": "Compromiso 01 · Vivienda"
      }
    ],
    "sanidad": [
      {
        "text": "Establecer un máximo de 60 días para una operación, con elección de centro a cargo del sistema si se supera el plazo.",
        "url": "https://www.seacabolafiesta.com/29n",
        "reference": "Compromiso 06 · Sanidad"
      }
    ],
    "empleo": [
      {
        "text": "Implantar un contrato indefinido único, con indemnización creciente de 12 a 33 días y una aportación empresarial del 1,53 % a una cuenta de la persona trabajadora.",
        "url": "https://www.seacabolafiesta.com/29n",
        "reference": "Compromiso 08 · Empleo"
      }
    ],
    "defensa": [
      {
        "text": "Reforzar la defensa de Ceuta, Melilla y Canarias.",
        "url": "https://www.seacabolafiesta.com/29n",
        "reference": "Compromiso 10 · Geopolítica"
      }
    ]
  },
  "COMPROMIS-EUPV-PODEM-ERPV": {
    "vivienda": [
      {
        "text": "Destinar cada año el 1 % del PIB a adquirir viviendas o promover vivienda protegida.",
        "url": "https://frontvalencia.org/programa-compromis-front-valencia.pdf#page=5",
        "reference": "PDF, p. 5 · Vivienda"
      }
    ],
    "sanidad": [
      {
        "text": "Fijar por ley financiación mínima, ratios de población y listas de espera máximas para reforzar la atención primaria.",
        "url": "https://frontvalencia.org/programa-compromis-front-valencia.pdf#page=9",
        "reference": "PDF, p. 9 · Sanidad"
      }
    ],
    "empleo": [
      {
        "text": "Reducir la jornada laboral a cuatro días y 32 horas semanales sin rebaja salarial.",
        "url": "https://frontvalencia.org/programa-compromis-front-valencia.pdf#page=7",
        "reference": "PDF, p. 7 · Salarios y condiciones laborales"
      }
    ],
    "defensa": [
      {
        "text": "Impulsar una Unión Europea de la Defensa que pueda sustituir el marco de la OTAN y reducir duplicidades y gastos militares.",
        "url": "https://frontvalencia.org/programa-compromis-front-valencia.pdf#page=54",
        "reference": "PDF, p. 54 · Política exterior"
      }
    ],
    "investigacion": [
      {
        "text": "Diseñar una carrera investigadora con contratación estable en las distintas etapas de la investigación.",
        "url": "https://frontvalencia.org/programa-compromis-front-valencia.pdf#page=16",
        "reference": "PDF, p. 16 · Universidades, ciencia e investigación"
      }
    ],
    "digitalizacion": [
      {
        "text": "Simplificar los trámites de las pymes con las administraciones mediante herramientas digitales y ventanillas únicas.",
        "url": "https://frontvalencia.org/programa-compromis-front-valencia.pdf#page=20",
        "reference": "PDF, p. 20 · Pymes y economía social"
      }
    ]
  },
  "COMUNS-FRONT AMPLI": {
    "vivienda": [
      {
        "text": "Construir 500.000 viviendas en suelo público o reservado a vivienda protegida, con protección permanente.",
        "url": "https://comuns.cat/wp-content/uploads/2026/11/Comuns-FA-Programa29N-1.pdf#page=8",
        "reference": "PDF, p. 8 · Vivienda · Parque público y asequible"
      }
    ],
    "sanidad": [
      {
        "text": "Destinar el 25 % del presupuesto sanitario a atención primaria.",
        "url": "https://comuns.cat/wp-content/uploads/2026/11/Comuns-FA-Programa29N-1.pdf#page=74",
        "reference": "PDF, p. 74 · Derechos · Sanidad"
      }
    ],
    "empleo": [
      {
        "text": "Crear un Estatuto del Trabajo con derechos mínimos comunes para personas asalariadas, autónomas económicamente dependientes, cooperativistas y en prácticas.",
        "url": "https://comuns.cat/wp-content/uploads/2026/11/Comuns-FA-Programa29N-1.pdf#page=37",
        "reference": "PDF, p. 37 · Estatuto del Trabajo"
      }
    ],
    "defensa": [
      {
        "text": "Comprometerse a no restablecer el servicio militar, ni obligatorio ni voluntario.",
        "url": "https://comuns.cat/wp-content/uploads/2026/11/Comuns-FA-Programa29N-1.pdf#page=121",
        "reference": "PDF, p. 121 · Plurinacionalidad y democracia · Política exterior"
      }
    ],
    "investigacion": [
      {
        "text": "Elevar al 4 % del PIB la inversión en I+D+i en 2030 y aumentar un 15 % los programas de la Agencia Estatal de Investigación.",
        "url": "https://comuns.cat/wp-content/uploads/2026/11/Comuns-FA-Programa29N-1.pdf#page=20",
        "reference": "PDF, p. 20 · Economía · Innovación"
      }
    ],
    "digitalizacion": [
      {
        "text": "Prohibir la vigilancia permanente durante el teletrabajo y garantizar control sindical sobre los sistemas de inteligencia artificial de alto riesgo en el ámbito laboral.",
        "url": "https://comuns.cat/wp-content/uploads/2026/11/Comuns-FA-Programa29N-1.pdf#page=37",
        "reference": "PDF, p. 37 · Economía · Trabajo y transformación digital"
      }
    ]
  },
  "ADELANTE ANDALUCÍA": {
    "vivienda": [
      {
        "text": "Limitar el alquiler al 20 % del salario y establecer contratos indefinidos.",
        "url": "https://programa.adelanteandalucia.org/programa-29n-adelante-andalucia.pdf#page=4",
        "reference": "PDF, p. 4 · Las 29 del 29N · Medida 01"
      }
    ],
    "sanidad": [
      {
        "text": "Garantizar cita en atención primaria en 48 horas, consultas de al menos 10 minutos y cita de salud mental en 15 días.",
        "url": "https://programa.adelanteandalucia.org/programa-29n-adelante-andalucia.pdf#page=16",
        "reference": "PDF, p. 16 · Las 29 del 29N · Medida 13"
      }
    ],
    "empleo": [
      {
        "text": "Fijar una jornada de 32 horas semanales sin reducir el salario, en dos años para las grandes empresas y en cuatro para las pymes.",
        "url": "https://programa.adelanteandalucia.org/programa-29n-adelante-andalucia.pdf#page=63",
        "reference": "PDF, p. 63 · Propuesta 268 · Empleo digno"
      }
    ],
    "defensa": [
      {
        "text": "Abrir un proceso que concluya con una consulta sobre la permanencia de España en la OTAN.",
        "url": "https://programa.adelanteandalucia.org/programa-29n-adelante-andalucia.pdf#page=109",
        "reference": "PDF, p. 109 · Propuesta 579 · Referéndum sobre la OTAN"
      }
    ],
    "investigacion": [
      {
        "text": "Distribuir territorialmente los fondos de la Agencia Estatal de Investigación y del CSIC según la población y abrir nuevos centros del CSIC en Andalucía.",
        "url": "https://programa.adelanteandalucia.org/programa-29n-adelante-andalucia.pdf#page=48",
        "reference": "PDF, p. 48 · Propuesta 144 · La I+D del Estado, también en Andalucía"
      }
    ],
    "digitalizacion": [
      {
        "text": "Transferir a Andalucía y digitalizar los archivos sobre la Guerra Civil y la represión para facilitar su consulta a las familias.",
        "url": "https://programa.adelanteandalucia.org/programa-29n-adelante-andalucia.pdf#page=108",
        "reference": "PDF, p. 108 · Propuesta 571 · Los archivos, a Andalucía"
      }
    ]
  },
  "TERUEL EXISTE": {
    "vivienda": [
      {
        "text": "Construir vivienda pública de alquiler en el medio rural y extender la vivienda protegida al conjunto del territorio.",
        "url": "https://teruelexiste.info/wp-content/uploads/2026/11/Programa_Teruel_Existe_Completo_29N.pdf#page=7",
        "reference": "PDF, p. 7 · Servicios públicos · Vivienda"
      }
    ],
    "sanidad": [
      {
        "text": "Alcanzar mediante un pacto nacional una financiación para atención primaria del 25 % del presupuesto sanitario.",
        "url": "https://teruelexiste.info/wp-content/uploads/2026/11/Programa_Teruel_Existe_Completo_29N.pdf#page=5",
        "reference": "PDF, p. 5 · Servicios públicos · Atención primaria"
      }
    ],
    "empleo": [
      {
        "text": "Elevar las ayudas de funcionamiento para empresas y autónomos de Teruel al máximo autorizado por la UE, equivalente al 20 % de los costes laborales.",
        "url": "https://teruelexiste.info/wp-content/uploads/2026/11/Programa_Teruel_Existe_Completo_29N.pdf#page=5",
        "reference": "PDF, p. 5 · Empleo y apoyo empresarial"
      }
    ],
    "investigacion": [
      {
        "text": "Reforzar el Instituto de Investigación Astrofísica de Teruel, el CEFCA y su observatorio en Javalambre, y la red del CSIC en Aragón.",
        "url": "https://teruelexiste.info/wp-content/uploads/2026/11/Programa_Teruel_Existe_Completo_29N.pdf#page=12",
        "reference": "PDF, p. 12 · Universidad y ciencia"
      }
    ],
    "digitalizacion": [
      {
        "text": "Implantar conectividad 5G en la España vaciada e impulsar la formación digital y la accesibilidad de la administración electrónica.",
        "url": "https://teruelexiste.info/wp-content/uploads/2026/11/Programa_Teruel_Existe_Completo_29N.pdf#page=9",
        "reference": "PDF, p. 9 · Digitalización y conectividad"
      }
    ]
  },
  "UPN-PP": {
    "vivienda": [
      {
        "text": "Usar suelo público para vivienda asequible y reducir trámites para desbloquear 20.000 viviendas protegidas en Navarra.",
        "url": "https://upn-pp.es/",
        "reference": "Una vivienda que puedas pagar"
      }
    ],
    "sanidad": [
      {
        "text": "Aumentar las plazas MIR y acortar las listas de espera.",
        "url": "https://upn-pp.es/",
        "reference": "Menos espera y mejor atención"
      }
    ],
    "empleo": [
      {
        "text": "Fijar una cuota de autónomos de cero durante los dos primeros años y una exención de IVA hasta 85.000 euros de facturación.",
        "url": "https://upn-pp.es/",
        "reference": "Más oportunidades y mejores empleos"
      }
    ],
    "digitalizacion": [
      {
        "text": "Extender la conexión a internet y la cobertura a todos los pueblos de Navarra.",
        "url": "https://upn-pp.es/",
        "reference": "Las inversiones que Navarra necesita"
      }
    ],
    "educacion": [
      {
        "text": "Impulsar la formación profesional dual con participación de las empresas y garantizar becas para quienes las necesiten.",
        "url": "https://upn-pp.es/",
        "reference": "Formar para un futuro mejor"
      }
    ],
    "impuestos": [
      {
        "text": "Mantener el poder adquisitivo de las pensiones e impedir que la inflación eleve la carga fiscal.",
        "url": "https://upn-pp.es/",
        "reference": "Que tu dinero llegue más lejos"
      }
    ]
  },
  "SY": {
    "vivienda": [
      {
        "text": "Vincular las ayudas a rehabilitar viviendas en zonas despobladas a su alquiler asequible e impulsar el alquiler con opción a compra.",
        "url": "https://soriaya.org/programa-generales-2026/",
        "reference": "Plan de vivienda para zonas despobladas"
      }
    ],
    "sanidad": [
      {
        "text": "Completar la autovía Soria–Burgos para facilitar el acceso al hospital de referencia en Burgos.",
        "url": "https://soriaya.org/programa-generales-2026/",
        "reference": "Acceso seguro a la sanidad"
      }
    ],
    "empleo": [
      {
        "text": "Fijar en 80 euros al mes de forma permanente la cuota de los autónomos que trabajen en zonas escasamente pobladas.",
        "url": "https://soriaya.org/programa-generales-2026/",
        "reference": "Impulso logístico, inversión, emprendimiento y nómadas digitales"
      }
    ],
    "digitalizacion": [
      {
        "text": "Extender internet de alta velocidad y cobertura móvil de calidad a todos los municipios sorianos.",
        "url": "https://soriaya.org/programa-generales-2026/",
        "reference": "Conectividad digital para todos"
      }
    ],
    "educacion": [
      {
        "text": "Ofrecer becas de movilidad y residencia para las zonas escasamente pobladas y ayudas para que regresen jóvenes titulados.",
        "url": "https://soriaya.org/programa-generales-2026/",
        "reference": "Educación y talento"
      }
    ],
    "clima": [
      {
        "text": "Invertir en las redes eléctricas de Soria para que sus polos industriales tengan suministro y mayor capacidad de conexión.",
        "url": "https://soriaya.org/programa-generales-2026/",
        "reference": "Energía de Soria para el desarrollo de Soria"
      }
    ]
  },
  "GBAI": {
    "educacion": [
      {
        "text": "Completar el traspaso a Navarra de la competencia en materia de becas.",
        "url": "https://geroabai.eus/files/2026/11/bases-politicas-29n-1.pdf#page=12",
        "reference": "Bases políticas del 29N, p. 12"
      }
    ]
  },
  "NC-BC, PODEMOS, IU, SUMAR": {
    "vivienda": [
      {
        "text": "Ampliar el parque público de vivienda protegida de forma permanente y regular los precios del alquiler en zonas tensionadas.",
        "url": "https://www.unidadpueblocanario.org/documentos/manifiesto-upc.pdf#page=3",
        "reference": "Manifiesto electoral, eje 5"
      }
    ],
    "sanidad": [
      {
        "text": "Reforzar la atención primaria y la salud mental, y avanzar hacia la gestión directa de los servicios públicos externalizados.",
        "url": "https://www.unidadpueblocanario.org/documentos/manifiesto-upc.pdf#page=3",
        "reference": "Manifiesto electoral, eje 6"
      }
    ],
    "empleo": [
      {
        "text": "Reforzar la negociación colectiva y establecer garantías de cobro de las horas extra.",
        "url": "https://www.unidadpueblocanario.org/documentos/manifiesto-upc.pdf#page=4",
        "reference": "Manifiesto electoral, eje 10"
      }
    ],
    "educacion": [
      {
        "text": "Reforzar la educación pública para menores de tres años.",
        "url": "https://www.unidadpueblocanario.org/documentos/manifiesto-upc.pdf#page=3",
        "reference": "Manifiesto electoral, eje 6"
      }
    ],
    "impuestos": [
      {
        "text": "Reforzar la tributación de las grandes fortunas y de los sectores energético y bancario, y mejorar la deducción por alquiler para las rentas medias y bajas.",
        "url": "https://www.unidadpueblocanario.org/documentos/manifiesto-upc.pdf#page=4",
        "reference": "Manifiesto electoral, eje 9"
      }
    ],
    "clima": [
      {
        "text": "Impulsar las renovables y la generación distribuida, y limitar el crecimiento turístico para ajustar el uso de recursos a la capacidad de las islas.",
        "url": "https://www.unidadpueblocanario.org/documentos/manifiesto-upc.pdf#page=3",
        "reference": "Manifiesto electoral, eje 7"
      }
    ]
  },
  "PARTIDO AUTÓNOMOS": {
    "vivienda": [
      {
        "text": "Recuperar la deducción estatal del IRPF por el alquiler de vivienda habitual para rentas medias y bajas, con un tramo específico cuando parte de la vivienda se use de forma declarada para teletrabajar o ejercer una actividad profesional.",
        "url": "https://www.partidoautonomos.es/wp-content/uploads/2026/11/PARTIDO-AUTONOMOS-PROGRAMA-ELECCIONES-GENERALES-2026-29N.pdf",
        "reference": "Programa del 29N · medida 17"
      }
    ],
    "empleo": [
      {
        "text": "Eximir de la cuota a las personas autónomas en los meses en que sus rendimientos netos no superen el salario mínimo y ampliar la tarifa plana inicial a 24 meses.",
        "url": "https://www.partidoautonomos.es/wp-content/uploads/2026/11/PARTIDO-AUTONOMOS-PROGRAMA-ELECCIONES-GENERALES-2026-29N.pdf",
        "reference": "Programa del 29N · medida 1"
      }
    ],
    "investigacion": [
      {
        "text": "Ofrecer deducciones por I+D+i junto con otros incentivos para atraer de vuelta a España fábricas y centros logísticos deslocalizados.",
        "url": "https://www.partidoautonomos.es/wp-content/uploads/2026/11/PARTIDO-AUTONOMOS-PROGRAMA-ELECCIONES-GENERALES-2026-29N.pdf",
        "reference": "Programa del 29N · apartado de reindustrialización"
      }
    ],
    "digitalizacion": [
      {
        "text": "Sustituir determinadas licencias previas de comercios por una declaración responsable telemática que permita abrir en 24 horas. Mantener el control previo para actividades peligrosas o contaminantes.",
        "url": "https://www.partidoautonomos.es/wp-content/uploads/2026/11/PARTIDO-AUTONOMOS-PROGRAMA-ELECCIONES-GENERALES-2026-29N.pdf",
        "reference": "Programa del 29N · medida 3"
      }
    ]
  },
  "FO": {
    "vivienda": [
      {
        "text": "Construir vivienda pública asequible para ampliar la oferta al alcance de los trabajadores.",
        "url": "https://frenteobrero.es/vivienda-propone-frente-obrero/",
        "reference": "Publicación de campaña del 29N · medida 1"
      }
    ]
  }
};
