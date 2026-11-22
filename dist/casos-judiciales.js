"use strict";

// Cada entrada corresponde a un procedimiento o una pieza con resolución propia.
const revisionJudicial29N = '2026-11-22';
const casosJudiciales29N = [
  {
    id: 'gurtel-primera-epoca',
    title: 'Gürtel · Primera época (1999–2005)',
    court: 'Tribunal Supremo · Sala de lo Penal · STS 507/2020',
    sources: [
      {
        date: '2020-10-14',
        label: 'STS 507/2020 · copia de la resolución',
        url: 'https://www.elindependiente.com/wp-content/uploads/2020/10/SENTENCIA-GURTEL-SUPREMO.pdf',
      },
      {
        label: 'Tribunal Supremo · Memoria 2020, Sala Segunda',
        url: 'https://www.poderjudicial.es/stfls/TRIBUNAL%20SUPREMO/ACTIVIDAD%20DEL%20TS/20210907%20Memoria%202020%20Tribunal%20Supremo.pdf',
      },
    ],
    subjects: [
      {
        party: 'PP',
        status: 'civil',
        date: '2020-10-14',
        summary: 'El Tribunal Supremo confirmó la responsabilidad civil del Partido Popular como partícipe a título lucrativo por los beneficios de la actividad de la trama en Majadahonda y Pozuelo de Alarcón.',
        amounts: [
          {
            label: 'Majadahonda',
            amount: 133628.48,
            concept: 'Restitución civil a título lucrativo',
            context: 'Importe fijado para Majadahonda con el régimen de solidaridad que recoge la sentencia.',
            source: 'https://www.elindependiente.com/wp-content/uploads/2020/10/SENTENCIA-GURTEL-SUPREMO.pdf#page=1596',
          },
          {
            label: 'Pozuelo de Alarcón',
            amount: 111864.32,
            concept: 'Restitución civil a título lucrativo',
            context: 'Importe fijado para Pozuelo de Alarcón con el régimen de solidaridad que recoge la sentencia.',
            source: 'https://www.elindependiente.com/wp-content/uploads/2020/10/SENTENCIA-GURTEL-SUPREMO.pdf#page=1634',
          },
        ],
      },
    ],
  },
  {
    id: 'gurtel-boadilla',
    title: 'Gürtel · Pieza Boadilla del Monte',
    court: 'Audiencia Nacional · Sala de lo Penal · Sentencia 8/2022',
    sources: [
      {
        date: '2022-04-08',
        label: 'Audiencia Nacional · Copia de la resolución',
        url: 'https://www.newtral.es/wp-content/uploads/2022/04/2022-04-08-SENTENCIA-GA%CC%83_RTEL-BOADILLA-DEL-MONTE-1.pdf',
      },
      {
        date: '2023-11-20',
        label: 'Tribunal Supremo · STS 849/2023, copia de la resolución',
        url: 'https://losgenoveses.net/Caso%20Gurtel/PS%20Boadilla/PS%20Boadilla.%20Tribunal%20Supremo.%20Recurso%20de%20casacion.%20Sentencia.20.11.23.pdf',
      },
    ],
    subjects: [
      {
        party: 'PP',
        status: 'civil',
        date: '2022-04-08',
        summary: 'La Audiencia Nacional declaró al Partido Popular partícipe a título lucrativo en esta pieza. La cifra recoge gastos de actos y servicios del partido en Boadilla del Monte.',
        amounts: [
          {
            amount: 204198.64,
            concept: 'Restitución civil a título lucrativo',
            context: 'Importe fijado para Boadilla del Monte con el régimen de solidaridad que recoge el fallo.',
            source: 'https://www.newtral.es/wp-content/uploads/2022/04/2022-04-08-SENTENCIA-GA%CC%83_RTEL-BOADILLA-DEL-MONTE-1.pdf',
          },
        ],
      },
    ],
  },
  {
    id: 'papeles-barcenas',
    title: 'Papeles de Bárcenas · Obras en la sede de Génova',
    court: 'Tribunal Supremo · Sala de lo Penal · STS 1033/2024',
    sources: [
      {
        date: '2024-11-14',
        label: 'STS 1033/2024 · copia de la resolución',
        url: 'https://www.elnacional.cat/uploads/s1/49/92/34/36/sentencia-cas-papers-barcenas.pdf',
      },
    ],
    subjects: [
      {
        party: 'PP',
        status: 'civil',
        date: '2024-11-14',
        summary: 'La responsabilidad del Partido Popular en esta pieza es civil subsidiaria por una parte de la cuota defraudada del impuesto sobre sociedades de 2007.',
        amounts: [
          {
            amount: 123669,
            concept: 'Responsabilidad civil subsidiaria',
            context: 'Parte de la cuota tributaria por la que responde subsidiariamente el PP.',
            source: 'https://www.elnacional.cat/uploads/s1/49/92/34/36/sentencia-cas-papers-barcenas.pdf#page=25',
          },
        ],
      },
    ],
  },
  {
    id: 'financiacion-europeas-2024',
    title: 'Presunta financiación irregular de la campaña europea de 2024',
    court: 'Tribunal Supremo · Sala de lo Penal · Causa especial 22316/2024',
    sources: [
      {
        date: '2026-05-19',
        label: 'Parlamento Europeo · Decisión sobre el suplicatorio (inglés)',
        url: 'https://data.europarl.europa.eu/distribution/doc/TA-10-2026-0167_en.pdf',
      },
    ],
    subjects: [
      {
        candidateKey: 'SALF|Madrid|Luis Alvise Pérez Fernández',
        status: 'investigacionDocumentada',
        date: '2026-05-19',
        summary: 'El Parlamento Europeo levantó la inmunidad de Luis Pérez Fernández a petición del Tribunal Supremo. La decisión describe diligencias por un presunto delito electoral y financiación ilegal de partidos. El estado actual queda pendiente de confirmación mediante una fuente oficial posterior.',
        amounts: [
          {
            amount: 100000,
            concept: 'Presunto anticipo investigado',
            context: 'La decisión del Parlamento Europeo recoge este importe como presunto anticipo para la campaña europea de 2024.',
            source: 'https://data.europarl.europa.eu/distribution/doc/TA-10-2026-0167_en.pdf#page=2',
          },
        ],
      },
    ],
  },
  {
    id: 'ejecutoria-causa-20907-2017',
    title: 'Causa 20907/2017 · Archivo de la ejecutoria por amnistía',
    court: 'Tribunal Supremo · Auto 21461/2026, recogido en sentencia del Tribunal Constitucional',
    sources: [
      {
        date: '2026-11-03',
        label: 'Tribunal Constitucional · Sentencia del recurso de amparo 8514-2024',
        url: 'https://www.tribunalconstitucional.es/NotasDePrensaDocumentos/NP_2026_099/STC%208514-2024.pdf',
      },
    ],
    subjects: [
      {
        candidateKey: 'ERC|Barcelona|Oriol Junqueras i Vies',
        status: 'amnistia',
        date: '2026-11-03',
        summary: 'La condena de 2019 incluía malversación. El Supremo declaró extinguida la responsabilidad penal el 19 de octubre de 2026 y archivó definitivamente la ejecución de la condena. El Constitucional recogió ese archivo al resolver el recurso de amparo.',
      },
      {
        candidateKey: 'ERC|Barcelona|Raül Romeva Rueda',
        status: 'amnistia',
        date: '2026-11-03',
        summary: 'La condena de 2019 incluía malversación. El Supremo declaró extinguida la responsabilidad penal el 19 de octubre de 2026 y archivó definitivamente la ejecución de la condena. El Constitucional recogió ese archivo al resolver el recurso de amparo.',
      },
    ],
  },
];

// Contexto histórico, fiscalización y decisiones que no abrieron una causa penal.
const contextoJudicial29N = [
  {
    id: 'ere-pieza-procedimiento-especifico',
    party: 'PSOE',
    title: 'ERE de Andalucía · Pieza del procedimiento específico',
    label: 'Condenas anuladas en amparo · Nuevo pronunciamiento pendiente de verificar',
    link: 'Antiguos altos cargos de la Junta de Andalucía',
    notes: [
      'El Tribunal Constitucional estimó parcialmente los recursos de Manuel Chaves y José Antonio Griñán, anuló las resoluciones impugnadas respecto de ambos y ordenó a la Audiencia Provincial de Sevilla dictar nuevas resoluciones conforme a los límites de sus fallos. La Audiencia elevó al TJUE la cuestión prejudicial C-501/25.',
      'Más de 680 millones de euros. La STC 94/2024 recoge esta cifra como volumen de los créditos presupuestarios de los programas 22E y 31L de 2000 a 2009, incluidas las modificaciones. Es el alcance presupuestario examinado en la pieza.',
      'Chaves y Griñán no figuran en el catálogo de candidaturas al Congreso del 29N. La ficha se refiere a esta pieza, que tiene un objeto distinto de las causas de cada ayuda concreta.',
    ],
    sources: [
      {date: '2024-07-16', label: 'STC 99/2024 · Manuel Chaves', url: 'https://www.boe.es/buscar/doc.php?id=BOE-A-2024-17480'},
      {date: '2024-07-16', label: 'STC 100/2024 · José Antonio Griñán', url: 'https://www.boe.es/buscar/doc.php?id=BOE-A-2024-17481'},
      {label: 'STC 94/2024 · Créditos presupuestarios', url: 'https://hj.tribunalconstitucional.es/es-ES/Resolucion/Show/30212'},
      {date: '2025-07-17', label: 'TJUE · Cuestión prejudicial C-501/25', url: 'https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX:62025CN0501'},
      {label: 'Fiscalía · Memoria 2026, apartado penal', url: 'https://www.fiscal.es/memorias/memoria2026/FISCALIA_SITE/capitulo_II/cap_II_2_3.html'},
    ],
  },
  {
    id: 'mascarillas-abalos',
    party: 'PSOE',
    title: 'Caso Mascarillas · Sentencia contra el exministro José Luis Ábalos',
    label: 'Sentencia penal · Individual',
    link: 'Antiguo ministro y dirigente socialista',
    notes: [
      'La STS 418/2026 condenó a José Luis Ábalos por diversos delitos, entre ellos cohecho, tráfico de influencias y malversación. El exministro no figura en las candidaturas al Congreso del 29N.',
      'El fallo fija 430.298 € de decomiso de ganancias de cohecho respecto de los tres condenados. Fija además, respecto de Ábalos y Koldo García de forma solidaria, 34.450 € de indemnización a INECO y 9.500,54 € a Tragsatec.',
    ],
    sources: [
      {date: '2026-06-22', label: 'Tribunal Supremo · STS 418/2026, fallo (copia)', url: 'https://descargables.elpais.com/sentencia-abalos-caso-mascarillas.pdf#page=218'},
    ],
  },
  {
    id: 'filesa',
    party: 'PSOE',
    title: 'Filesa · Financiación de las campañas de 1989',
    label: 'Condenas individuales · Caso histórico',
    link: 'Financiación electoral descrita en la sentencia',
    notes: [
      'La sentencia del Tribunal Supremo de 1997, recogida por el Tribunal Constitucional, declaró probado que se recaudaron fondos para las campañas generales y europeas del PSOE de 1989 mediante una estructura de sociedades que facturaban por servicios sin prestación real. Las sentencias citadas resuelven las responsabilidades de personas concretas.',
    ],
    sources: [
      {date: '2001-06-04', label: 'Tribunal Constitucional · STC 125/2001', url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-T-2001-12758'},
      {date: '2001-06-04', label: 'Tribunal Constitucional · STC 124/2001', url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-T-2001-12757'},
    ],
  },
  {
    id: 'bolanos-archivo-solicitud',
    party: 'PSOE',
    candidateKey: 'PSOE|Madrid|Félix Bolaños García',
    title: 'Félix Bolaños · Solicitud de abrir causa',
    label: 'Solicitud archivada por el Tribunal Supremo',
    link: 'Candidatura al Congreso por Madrid',
    notes: [
      'El Tribunal Supremo archivó la exposición razonada que solicitaba investigar a Bolaños por presunta malversación y falso testimonio en relación con la contratación de una asesora en Presidencia. El auto concluyó que faltaban indicios para abrir una causa penal contra él.',
    ],
    sources: [
      {date: '2025-07-15', label: 'Tribunal Supremo · Auto en la causa especial 21255/2025 (copia)', url: 'https://www.elnacional.cat/uploads/s1/53/65/53/63/auto-rechaza-abrir-causa-a-felix-bolanos.pdf'},
    ],
  },
  {
    id: 'vox-ingresos-promocionales',
    party: 'VOX',
    title: 'Ingresos de actividades promocionales (2018–2020)',
    label: 'Sanción administrativa anulada',
    link: 'Expediente contra Vox',
    notes: [
      'El Tribunal de Cuentas impuso una sanción de 862.496,72 € en abril de 2025. El Tribunal Supremo anuló la sanción el 3 de junio de 2026. El fallo cuestionó la base probatoria y el encaje de los hechos en la infracción sancionada.',
    ],
    sources: [
      {date: '2026-06-03', label: 'Tribunal Supremo · STS 687/2026, ECLI:ES:TS:2026:2366 (texto de la sentencia)', url: 'https://vlex.es/vid/1122024332'},
      {label: 'Tribunal de Cuentas · Expedientes de contabilidad ordinaria', url: 'https://www.tcu.es/export/sites/portal/.galleries/Documentos-oficiales/Partidos-politicos/Procedimientos-sancionadores-contabilidad-ordinaria.pdf'},
    ],
  },
  {
    id: 'vox-donaciones-2019',
    party: 'VOX',
    title: 'Donaciones con destino a campañas de 2019',
    label: 'Dos sanciones administrativas anuladas',
    link: 'Expediente contra Vox',
    notes: [
      'El Tribunal de Cuentas impuso dos sanciones de 50.000 € y 183.324,22 €. El Tribunal Supremo anuló ambas el 13 de octubre de 2025 al resolver el recurso sobre el alcance de la prohibición de las donaciones finalistas.',
    ],
    sources: [
      {date: '2025-10-13', label: 'Tribunal Supremo · STS 1273/2025, ECLI:ES:TS:2025:4402 (texto de la sentencia)', url: 'https://www.iberley.es/jurisprudencia/sentencia-contencioso-administrativo-tribunal-supremo-sala-lo-contencioso-administrativo-seccion-cuarta-13-10-25-48705721'},
    ],
  },
  {
    id: 'vox-donaciones-2020',
    party: 'VOX',
    title: 'Donaciones con destino concreto en 2020',
    label: 'Sanción administrativa recurrida · Resolución posterior pendiente de verificar',
    link: 'Expediente contra Vox',
    notes: [
      'El Tribunal de Cuentas acordó una sanción administrativa de 50.000 € el 28 de julio de 2025 y su registro consigna un recurso. Se trata de un expediente distinto de los resueltos en las otras fichas.',
    ],
    sources: [
      {date: '2025-07-28', label: 'Tribunal de Cuentas · Registro de sanciones, p. 9', url: 'https://www.tcu.es/export/sites/portal/.galleries/Documentos-oficiales/Partidos-politicos/Procedimientos-sancionadores-contabilidad-ordinaria.pdf#page=9'},
    ],
  },
  {
    id: 'salf-fiscalizacion-europeas',
    party: 'SALF',
    title: 'Contabilidad de las elecciones europeas de 2024',
    label: 'Fiscalización electoral · Propuesta de no adjudicación de subvenciones',
    link: 'Agrupación electoral Se Acabó la Fiesta',
    notes: [
      'El Tribunal de Cuentas documentó que la agrupación de electores no presentó la contabilidad de las elecciones europeas de 2024 y propuso que no se le adjudicaran las subvenciones electorales. La Comisión Mixta de las Cortes se pronunció sobre el informe en 2026.',
    ],
    sources: [
      {label: 'Tribunal de Cuentas · Informe de fiscalización, apartado IV.1', url: 'https://tcu.es/export/sites/portal/repositorio2/INFORME/2025/I1628.pdf#page=45'},
      {date: '2026-02-24', label: 'BOE · Resolución de la Comisión Mixta', url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-8766'},
    ],
  },
  {
    id: 'borras-indulto-parcial',
    party: 'JXCAT',
    title: 'Laura Borràs · Contratación en la Institució de les Lletres Catalanes',
    label: 'Condena individual · Indulto parcial de la pena de prisión',
    link: 'Expresidenta de Junts',
    notes: [
      'El BOE recoge la condena de 2023 por prevaricación administrativa y falsedad documental. El decreto de 2026 conmutó la pena de prisión por dos años condicionados y se refiere únicamente a la pena privativa de libertad. Laura Borràs no figura en las candidaturas al Congreso del 29N.',
    ],
    sources: [
      {date: '2026-07-28', label: 'BOE · Real Decreto 670/2026', url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-16525'},
    ],
  },
  {
    id: 'de-miguel-pnv',
    party: 'EAJ-PNV',
    title: 'Caso De Miguel · Contratación pública en Álava',
    label: 'Condenas individuales confirmadas en casación',
    link: 'Antiguos miembros de la ejecutiva alavesa del PNV',
    notes: [
      'El Tribunal Supremo confirmó las principales condenas de la Audiencia Provincial de Álava en el caso De Miguel, con ajustes en algunos pronunciamientos. El procedimiento se refiere a personas concretas, entre ellas Alfredo de Miguel, que no figura en las candidaturas al Congreso del 29N.',
    ],
    sources: [
      {label: 'Tribunal Supremo · Sentencia de casación 1241/2020 (copia)', url: 'https://es.scribd.com/document/618902677/Sentencia-Caso-de-Miguel'},
      {label: 'Juntas Generales de Álava · Diario de sesiones', url: 'https://www.jjggalava.eus/spc_jsf/pages/spc/visorPublico.xhtml?idDocumento=MKzqlMtli0xlVJyKtAMF6Nq1Qx1CCgJGulE_-5qEKFn60qoAumLGOdHPVzVIQ1k-&rq=a0f5c693f8cc75a5347ce95b8511bde516fe2c78'},
    ],
  },
];
