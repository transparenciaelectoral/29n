"use strict";

const marcoEjecucion = {
  vivienda: [148, 'Las comunidades pueden asumir competencias de vivienda y urbanismo. La medida puede requerir financiación estatal, cambios en la legislación estatal o actuación autonómica y municipal, según el instrumento.'],
  sanidad: [149, 'El Estado fija las bases y la coordinación general de la sanidad. La prestación y la contratación dependen de la administración que gestione el servicio.'],
  empleo: [149, 'La legislación laboral es estatal. La ejecución de políticas de empleo puede corresponder a las comunidades autónomas.'],
  defensa: [149, 'Defensa y relaciones internacionales son competencias estatales. Los compromisos conjuntos requieren acuerdos con los demás participantes.'],
  investigacion: [149, 'El Estado tiene competencia de fomento y coordinación general de la investigación. La ejecución depende de los programas y organismos que se designen.'],
  digitalizacion: [149, 'El Estado tiene competencia sobre telecomunicaciones. Los trámites digitales corresponden a la administración responsable de cada servicio.'],
  educacion: [149, 'El Estado fija las normas básicas del derecho a la educación. La ejecución depende del reparto competencial y de la medida concreta.'],
  impuestos: [133, 'El Estado puede establecer tributos mediante ley. Comunidades y entidades locales ejercen sus facultades tributarias en el marco aplicable.'],
  clima: [149, 'El Estado fija la legislación básica ambiental y energética. Las actuaciones concretas pueden requerir ejecución autonómica y acuerdos europeos.'],
};

// Cada entrada corresponde a la primera medida de la formación y el tema,
// salvo las claves con índice explícito. Los objetivos incluyen su unidad original.
const fichasEjecucion = {
  'PSOE|vivienda': {coste: 'Objetivo de movilización anual del 1 % del PIB. El resumen no distingue inversión pública de otros recursos.'},
  'PSOE|sanidad': {plazo: 'Hasta 30 días para la primera consulta. Es un objetivo de atención.'},
  'PSOE|investigacion': {coste: 'Objetivo de inversión pública del 1,5 % del PIB.', plazo: 'Objetivo para 2035.'},
  'PSOE|clima': {plazo: '81 % de generación eléctrica renovable en 2030. Calendario nuclear hasta 2035.'},
  'PP|vivienda': {via: 'Las Cortes pueden tramitar y aprobar la Ley del Suelo. La movilización de suelo y la promoción requieren actuación de las administraciones competentes y de los titulares.'},
  'PP|empleo': {coste: 'Bonificación del 100 % y del 50 % de la cotización empresarial del primer trabajador. Impacto total en ingresos pendiente de verificar.', plazo: '100 % durante el primer año y 50 % durante el segundo de la contratación.'},
  'PP|clima': {plazo: 'Tramitar la extensión durante los primeros cien días. La decisión queda condicionada al visto bueno del Consejo de Seguridad Nuclear.'},
  'VOX|vivienda': {coste: 'IVA del 0 % o bonificación del 100 % del ITP en los supuestos previstos. Impacto total en ingresos pendiente de verificar.'},
  'VOX|empleo': {coste: 'Cuota individual desde 50 € por encima del umbral indicado. Impacto total en ingresos pendiente de verificar.'},
  'PODEMOS|empleo': {via: 'La reducción general de la jornada exige reformar la legislación laboral estatal. El legislador puede aprobar la reforma.', plazo: 'Paso a 35 horas y después a 30 durante la legislatura.'},
  'PODEMOS|investigacion': {coste: 'Objetivo de inversión pública del 2 % del PIB.', financiacion: 'Prioriza las ayudas directas frente al crédito. Origen de los recursos pendiente de verificar.'},
  'FA|sanidad': {coste: 'Objetivo de inversión sanitaria pública del 8 % del PIB.'},
  'FA|investigacion': {coste: 'Objetivo total del 3 % del PIB: 1,25 % de inversión pública y 1,75 % de inversión privada.', financiacion: 'Presupuesto plurianual para ciencia e innovación en el componente público.', plazo: 'Objetivo para 2030.'},
  'FA|educacion': {coste: 'Objetivo de inversión educativa del 7 % del PIB.', plazo: 'Objetivo de inversión para 2030.'},
  'FA|impuestos|1': {plazo: '65 años es la edad de jubilación propuesta. Calendario de implantación pendiente de verificar.'},
  'EAJ-PNV|empleo': {plazo: 'De 24 a 36 meses de prestación. Calendario de implantación pendiente de verificar.'},
  'EH BILDU|vivienda': {financiacion: 'El programa atribuye al Estado la financiación de la compensación.'},
  'EH BILDU|empleo': {plazo: 'Para pymes, transición desde 35 horas hasta la meta en un máximo de tres años.'},
  'ERC|vivienda': {coste: 'Objetivo de dedicar al menos el 1,5 % del PIB a políticas de vivienda.', via: 'El traspaso de inmuebles requiere la actuación de las entidades titulares y de la Generalitat. Las Cortes pueden intervenir en el marco legal o presupuestario si hace falta reformarlo.'},
  'ERC|investigacion': {coste: 'Objetivo de inversión pública del 1,5 % del PIB.', plazo: 'Objetivo para 2030.'},
  'JXCAT|digitalizacion': {via: 'El régimen general de telecomunicaciones corresponde al Estado. La propuesta plantea un traspaso a Cataluña. El instrumento y su alcance quedan pendientes de verificar.'},
  'BNG|investigacion': {coste: 'Objetivo de inversión estatal en I+D+i del 3 % del PIB.', plazo: 'Objetivo para 2030.'},
  'CCA-1.ºCAN|empleo': {financiacion: 'Solicita financiación estatal para el plan.', plazo: 'Cuatro años de duración del plan.'},
  'MUNDO+JUSTO|vivienda': {coste: 'El programa recomienda entre 10.000 y 15.000 millones de euros anuales de esfuerzo presupuestario estatal para el horizonte de 2030.', financiacion: 'Aportación presupuestaria estatal. El programa contempla rentas sociales a medida que crezca el parque.', plazo: 'Al menos 1,35 millones de viviendas sociales y asequibles permanentes en 2030.', url: 'https://www.porunmundomasjusto.es/wp-content/uploads/2026/11/Castellano.pdf#page=6'},
  'MUNDO+JUSTO|defensa': {financiacion: 'Prevé destinar a emergencias globales el ahorro asociado a la reducción propuesta del gasto militar.', plazo: 'Reducción anual propuesta entre 2026 y 2030.'},
  'MUNDO+JUSTO|investigacion': {coste: 'Objetivo de inversión en I+D del 3 % del PIB.', plazo: 'Objetivo para 2030.'},
  'SALF|sanidad': {plazo: '60 días como máxima espera para una operación. Calendario de implantación pendiente de verificar.'},
  'COMPROMIS-EUPV-PODEM-ERPV|vivienda': {coste: 'Objetivo anual del 1 % del PIB para adquirir viviendas o promover vivienda protegida.'},
  'COMUNS-FRONT AMPLI|sanidad': {coste: 'Objetivo de asignar a atención primaria el 25 % del presupuesto sanitario. Gasto adicional total pendiente de verificar.'},
  'COMUNS-FRONT AMPLI|investigacion': {coste: 'Objetivo de inversión en I+D+i del 4 % del PIB y aumento del 15 % de los programas de la Agencia Estatal de Investigación.', plazo: 'Objetivo de inversión para 2030.'},
  'ADELANTE ANDALUCÍA|sanidad': {plazo: 'Objetivos de atención: 48 horas para atención primaria y 15 días para salud mental.'},
  'ADELANTE ANDALUCÍA|empleo': {plazo: 'Dos años para grandes empresas y cuatro para pymes.'},
  'SY|empleo': {coste: 'Cuota individual propuesta de 80 € al mes. Impacto total en ingresos pendiente de verificar.'},
  'UPN-PP|empleo': {plazo: 'Cuota de autónomos de cero durante los dos primeros años.'},
  'PARTIDO AUTÓNOMOS|empleo': {plazo: 'Tarifa plana inicial ampliada a 24 meses.'},
  'PARTIDO AUTÓNOMOS|digitalizacion': {plazo: 'Apertura en 24 horas mediante declaración responsable para las actividades que puedan acogerse a la medida.'},
};

function executionDetails(party, topic, index, measure) {
  const key = party.id + '|' + topic;
  const entry = fichasEjecucion[key + '|' + index] ?? (index === 0 ? fichasEjecucion[key] : undefined) ?? {};
  const [article, framework] = marcoEjecucion[topic];
  const constitution = 'https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229#a';
  const sourcedField = (label, value) => '<div><dt>' + label + '</dt><dd>' +
    (value ? esc(value) + ' · ' + cite('Programa', entry.url ?? measure.url) : 'Pendiente de verificar') + '</dd></div>';
  return '<details class="analysis-evidence"><summary>Quién puede ejecutarla, coste y plazo</summary><dl>' +
    '<div><dt>Vía de ejecución</dt><dd>' + esc(entry.via ?? 'Vía concreta pendiente de verificar. ' + framework) +
    ' · ' + cite('Constitución, art. ' + article, constitution + article) +
    ' · ' + cite('Funciones de las Cortes, art. 66', constitution + '66') + '</dd></div>' +
    sourcedField('Coste o cifra anunciada', entry.coste) +
    sourcedField('Financiación', entry.financiacion) +
    sourcedField('Plazo', entry.plazo) + '</dl></details>';
}
