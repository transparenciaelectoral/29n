"use strict";

const byId = id => document.getElementById(id);
const collator = new Intl.Collator('es');
const number = new Intl.NumberFormat('es-ES');
const euro = new Intl.NumberFormat('es-ES', {style: 'currency', currency: 'EUR'});
const esc = value => String(value).replace(/[&<>"']/g, char => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
}[char]));
const normalize = value => value.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase();
const formatRoute = (...segments) => '#' + segments.map(encodeURIComponent).join('/');
const sortedLists = party => [...party.lists].sort((a, b) => collator.compare(a.district, b.district));
const districts = [...new Set(candidaturas.flatMap(party => party.lists.map(list => list.district)))].sort(collator.compare);
const ballotDistricts = new Set([
  'Albacete', 'Alicante', 'Almería', 'Álava', 'Asturias', 'Ávila', 'Badajoz', 'Barcelona', 'Bizkaia',
  'Burgos', 'Cáceres', 'Cádiz', 'Cantabria', 'Castellón', 'Ceuta', 'Ciudad Real', 'Córdoba',
  'A Coruña', 'Cuenca', 'Gipuzkoa', 'Girona', 'Granada', 'Guadalajara', 'Huelva', 'Huesca',
  'Jaén', 'León', 'Lleida', 'Lugo', 'Madrid', 'Málaga', 'Melilla', 'Murcia', 'Navarra', 'Ourense',
  'Palencia', 'Pontevedra', 'La Rioja', 'Salamanca', 'Segovia', 'Sevilla', 'Soria', 'Tarragona',
  'Teruel', 'Toledo', 'Valencia', 'Valladolid', 'Zamora', 'Zaragoza',
]);
const ballotSlugs = {Álava: 'arabanalava', Alicante: 'alacantnalicante',
  Castellón: 'castelloncastellon', Valencia: 'valencianvalencia',
  'Illes Balears': 'mallorca', 'Las Palmas': 'grancanaria', 'Santa Cruz De Tenerife': 'tenerife'};
const ballotBase = 'https://29neleccionesgenerales.es/papeletas-descargables/';
const evidenceRule = 'Un campo pendiente indica que aún falta una fuente pública verificable para ese dato. Los campos pendientes quedan fuera de las comparaciones. El cero se reserva para cifras que la fuente confirma.';
const unknown = '<span class="muted">No disponible en esta ficha</span>';
const cite = (label, url) => '<a class="cite" href="' + esc(url) + '">' + esc(label) + '</a>';
const source = key => cite(...fuentes[key]);
const field = (label, entry, format = String, citations = true) => {
  const [value, citation, year, second] = entry ?? [];
  const labelText = value == null ? unknown : esc(format(value)) + (year ? ' <span class="muted">(' + esc(year) + ')</span>' : '');
  const citationLink = key => citations === 'compact'
    ? '<a class="cite" href="' + esc(fuentes[key][1]) + '" aria-label="' + esc(fuentes[key][0]) + '">Fuente</a>'
    : source(key);
  const links = citations && citation ? '<br>' + citationLink(citation) + (second ? ' · ' + citationLink(second) : '') : '';
  return '<div><dt>' + esc(label) + '</dt><dd>' + labelText + links + '</dd></div>';
};

const partyData = party => ({...datosFormaciones[party.id], ...formacionesExtra[party.id]});

function partyFields(party, citations) {
  const data = partyData(party);
  return '<dl>' +
    (data.constitucion ? field('Constitución de la coalición', data.constitucion, String, citations) :
      field('Fundación', data.fundacion, String, citations)) +
    (data.inscripcion ? field('Inscripción en el Registro', data.inscripcion, String, citations) : '') +
    (data.actividad ? field('Actividad anterior documentada', data.actividad, String, citations) : '') +
    field('Afiliación', data.afiliacion, number.format, citations) +
    field('Patrimonio neto', data.patrimonio, euro.format, citations) +
    (data.dotacion ? field('Dotación fundacional', data.dotacion, euro.format, citations) : '') +
    (data.capital ? field('Capital y fondo social', data.capital, euro.format, citations) : '') +
    (data.financiacion ? field('Financiación documentada', data.financiacion, euro.format, citations) : '') +
    (data.cuota ? field('Cuota de afiliación', data.cuota, euro.format, citations) : '') + '</dl>';
}

function partyLogo(party) {
  const logo = logos[party.id];
  return logo ? '<img class="party-logo" src="logos/' + esc(logo[0]) +
    '" alt="" width="70" height="44" loading="lazy">' : '';
}

function programLink(party, compact = false) {
  const program = programas29N[party.id];
  if (!program) return '';
  const shortLabel = program.commitments ? 'Ver compromisos' : 'Ver programa';
  const label = compact ? shortLabel : program.title ?? 'Leer el programa electoral';
  return '<a class="action action-secondary" href="' + esc(program.url) + '" aria-label="' +
    esc(label + ' · ' + party.id + (program.format ? ' · ' + program.format : '')) + '">' + esc(label) +
    (!compact && program.format ? ' · ' + esc(program.format) : '') + '</a>';
}

function programPanel(party) {
  const program = programas29N[party.id];
  const description = !program ? 'Programa del 29N pendiente de verificar.' : program.commitments ?
    'Compromisos publicados por la formación. Programa completo pendiente de verificar.' :
    'Programa para las elecciones del 29N publicado por la formación.';
  const firstTopic = Object.keys(temasPropuestas).find(topic => propuestas29N[party.id]?.[topic]?.length);
  const compare = firstTopic ? '<a class="action action-primary" href="' +
    formatRoute('propuestas', firstTopic, party.id) + '">Ver propuestas por tema</a>' : '';
  return '<section class="panel program-panel" aria-labelledby="programa-titulo"><div>' +
    '<h2 id="programa-titulo">Qué propone</h2><p>' + description + '</p></div><div class="program-actions">' + compare + programLink(party) + '</div></section>';
}

const partyOrientation = party => orientacion29N[party.id]?.label ?? 'Por confirmar';
const verifiedProgram = party => Boolean(programas29N[party.id] && !programas29N[party.id].commitments);

function partyTransparency(party) {
  const orientation = orientacion29N[party.id];
  const investigations = casosJudiciales29N.filter(record => record.subjects.some(subject =>
    subject.party === party.id && ['investigacion', 'investigacionDocumentada'].includes(subject.status))).length;
  const program = verifiedProgram(party) ? 'Verificado' : programas29N[party.id] ? 'Compromisos de campaña' : 'Por confirmar';
  return '<dl><div><dt>Orientación declarada</dt><dd>' + esc(partyOrientation(party)) +
    (orientation ? ' · ' + cite('Fuente', orientation.url) : '') +
    '</dd></div><div><dt>Programa del 29N</dt><dd>' + esc(program) +
    '</dd></div><div><dt>Imputaciones documentadas de la formación</dt><dd>' +
    '<a class="cite" href="' + formatRoute('imputaciones', 'formaciones', party.id) + '">' +
    (investigations ? number.format(investigations) + ' · Ver fichas' : 'Sin imputaciones verificadas · Ver fichas') +
    '</a></dd></div></dl>';
}

function cards() {
  const query = normalize(byId('buscar').value.trim());
  const district = byId('territorio').value;
  const orientation = byId('filtro-orientacion').value;
  const program = byId('filtro-programa').value;
  const matching = candidaturas.filter(party => {
    const searchable = [party.id, party.name, ...party.lists.map(list => list.heading)].join(' ');
    return normalize(searchable).includes(query) &&
      (!district || party.lists.some(list => list.district === district)) &&
      (!orientation || partyOrientation(party) === orientation) &&
      (!program || verifiedProgram(party) === (program === 'con'));
  });
  const [key, direction] = (byId('orden').value || 'name:asc').split(':');
  const sign = direction === 'desc' ? -1 : 1;
  const byName = (a, b) => collator.compare(a.name, b.name) || collator.compare(a.id, b.id);
  matching.sort((a, b) => {
    if (key === 'name') return sign * byName(a, b);
    const left = partyData(a)[key]?.[0];
    const right = partyData(b)[key]?.[0];
    if (left == null || right == null) {
      return Number(left == null) - Number(right == null) || byName(a, b);
    }
    return sign * (left - right) || byName(a, b);
  });
  const sortNote = byId('nota-orden');
  sortNote.hidden = key === 'name';
  const numerical = matching.filter(party => partyData(party)[key]?.[0] != null).length;
  const fieldName = {capital: 'capital y fondo social', patrimonio: 'patrimonio neto', financiacion: 'financiación documentada', afiliacion: 'afiliación'}[key];
  sortNote.textContent = fieldName ? numerical + ' de ' + matching.length + ' formaciones de esta selección tienen cifra de ' +
    fieldName + '. Las fichas sin cifra quedan al final en ambos sentidos.' +
    (key === 'financiacion' ? ' Consulta el concepto y el ejercicio en cada ficha.' : '') : '';
  byId('resultados').textContent = matching.length + (matching.length === 1 ? ' formación' : ' formaciones');
  byId('tarjetas').innerHTML = matching.map(party =>
    '<article class="card"><div class="party-identity">' + partyLogo(party) +
    '<span class="id">' + esc(party.id) + '</span></div><h3>' + esc(party.name) + '</h3>' +
    '<p class="muted">' + party.lists.length + (party.lists.length === 1 ? ' circunscripción' : ' circunscripciones') + '</p>' +
    partyTransparency(party) + partyFields(party, 'compact') + '<div class="card-actions"><a class="action action-primary" aria-label="Ver listas de ' + esc(party.id) +
    '" href="' + formatRoute('formacion', party.id, ...(district ? [district] : [])) + '">Ver listas</a>' +
    programLink(party, true) + '</div></article>'
  ).join('') || '<p>No hay formaciones que coincidan con la búsqueda.</p>';
}

function candidateList(party, list, group, expanded) {
  return '<ol class="candidates">' + list[group].map((name, index) => {
    const key = [party.id, list.district, name].join('|');
    const data = {trayectoriaElectoral: candidaturasPrevias[key], ...perfiles[key], ...trayectorias[key]};
    const record = perfilesPublicos[key] ?? {};
    const open = expanded?.group === group && expanded.position === index + 1;
    return '<li><details class="candidate"' + (open ? ' open' : '') + '><summary>' + esc(name) +
      '</summary>' + profileFields(data, record, declaracionesPublicas[key], name + ' · ' + party.id + ' · ' + list.district) + '</details></li>';
  }).join('') + '</ol>';
}

function showParty(party, district, expanded) {
  const lists = sortedLists(party);
  const list = lists.find(item => item.district === district) ?? lists.find(item => item.district === 'Madrid') ?? lists[0];
  const ballotSlug = ballotSlugs[list.district] ??
    (ballotDistricts.has(list.district) ? normalize(list.district).replaceAll(' ', '') : '');
  const ballotUrl = list.district === 'Madrid' ?
    'https://29neleccionesgenerales.es/pdf/papeletas-descargables-cera/congreso/madrid-congreso.pdf' :
    ballotBase + ballotSlug;
  byId('detalle').innerHTML = '<a href="#inicio">Todas las formaciones</a><div class="party-identity detail-identity">' +
    partyLogo(party) + '<h1>' + esc(party.id) + '</h1></div><p>' + esc(party.name) +
    '</p>' + programPanel(party) + '<div class="columns"><section class="panel"><h2>Datos de la formación</h2>' + partyFields(party, true) +
    '<a class="cite" href="' + formatRoute('contacto', party.id) + '">Hacer corrección</a></section><section class="panel" aria-labelledby="list-title"><h2 id="list-title">Lista proclamada</h2>' +
    '<label for="lista">Circunscripción</label><select id="lista">' + lists.map(item =>
    '<option' + (item === list ? ' selected' : '') + '>' + esc(item.district) + '</option>').join('') +
    '</select><p class="muted">' + esc(list.heading) + '</p>' +
    '<aside class="ballot-box" aria-label="Papeleta oficial">' +
    '<a class="ballot-link" href="' + esc(ballotUrl) + '">Ver papeletas oficiales · ' + esc(list.district) + '</a>' +
    '<p>Busca <strong>' + esc(list.heading) + '</strong> en el documento del Congreso. El juego oficial reúne las papeletas de la circunscripción.</p>' +
    '<p class="muted">Para verificar la lista. Las papeletas descargables se destinan al voto de residentes permanentes en el extranjero (CERA).</p></aside>' +
    '<h3>Titulares (' + list.names.length + ')</h3>' +
    candidateList(party, list, 'names', expanded) +
    (list.reserves.length ? '<details class="reserves"' + (expanded?.group === 'reserves' ? ' open' : '') +
      '><summary>Suplentes (' + list.reserves.length + ')</summary>' + candidateList(party, list, 'reserves', expanded) +
      '</details>' : '') + '<p>' + source('boe') + ' · ' + source('correccion') + '</p></section></div>';
  byId('lista').addEventListener('change', event => {
    location.hash = formatRoute('formacion', party.id, event.target.value);
  });
}

function cvField(label, entry, fallback = '') {
  if (entry || !fallback) return field(label, entry);
  return '<div><dt>' + esc(label) + '</dt><dd>' + fallback + '</dd></div>';
}

function chronology(items) {
  return '<ul class="cv-list">' + items.map(item => '<li>' + esc(item) + '</li>').join('') + '</ul>';
}

function companyRoles(companies) {
  return '<ul class="cv-list">' + companies.map(({name, role, action, date, publicRole, source}) =>
    '<li><strong>' + esc(name) + '</strong><br>' + esc([role, action, date].filter(Boolean).join(' · ')) +
    (publicRole ? ' <span class="muted">· vínculo por cargo público</span>' : '') +
    '<br>' + cite('Boletín Oficial del Registro Mercantil', source) + '</li>').join('') + '</ul>';
}

function propertyList(properties) {
  const directlyDeclared = properties.filter(item => !item.company);
  const homes = directlyDeclared.filter(item => item.type === 'Vivienda').length;
  const summary = [directlyDeclared.length ? directlyDeclared.length + ' de titularidad personal' : '',
    homes ? homes + (homes === 1 ? ' vivienda' : ' viviendas') + ' entre ellas' : '',
    properties.length > directlyDeclared.length ? (properties.length - directlyDeclared.length) + ' de sociedades' : ''
  ].filter(Boolean).join(' · ');
  return '<p class="property-count">' + esc(summary) + '</p><ul class="cv-list">' +
    properties.map(({type, company, year, share, source}) =>
      '<li>' + esc([type, company ? 'de una sociedad' : '', year, share == null ? '' : number.format(share) + ' %']
        .filter(Boolean).join(' · ')) + ' · ' + cite('Declaración', source) + '</li>'
    ).join('') + '</ul>';
}

function governmentAssets(declaration, separateProperty) {
  if (!declaration) return '';
  const {action, edition, source, values} = declaration;
  const figures = values.filter(([category]) => !separateProperty || category !== 'Bienes inmuebles');
  if (!figures.length) return '';
  return '<h5>Declaración de alto cargo · ' + esc(action.toLocaleLowerCase('es')) + '</h5>' +
    chronology(figures.map(([category, amount]) => category + ': ' + euro.format(amount))) +
    cite('BOE · Publicación de ' + edition, source);
}

function profileFields(data, record, declaration, identity) {
  const officialProfile = record.source ? cite('Ficha oficial del Congreso · XV Legislatura', record.source) : '';
  const birth = data.nacimiento;
  const birthLabel = data.nacimiento ? 'Nacimiento y edad el 29N' : 'Año de nacimiento';
  const offices = [...(record.offices ?? [])];
  if (record.terms) offices.push(record.terms + (record.terms === 1 ? ' legislatura' : ' legislaturas') + ' según la ficha parlamentaria');
  const aggregateProperty = declaration?.values.find(([category]) => category === 'Bienes inmuebles');
  const separateProperty = !data.inmuebles && !record.properties?.length && Boolean(aggregateProperty);
  const propertyDetails = record.properties?.length ? propertyList(record.properties) : separateProperty ?
    esc(euro.format(aggregateProperty[1])) + '<br>' + cite('Declaración de alto cargo · BOE ' + declaration.edition, declaration.source) : '';
  const mercantile = record.companies?.length ? cvField('Actos inscritos en el Registro Mercantil', null, companyRoles(record.companies)) : '';
  const financialSummary = record.amounts?.length ?
    chronology(record.amounts.map(([label, amount, minimum]) =>
      label + ': ' + (minimum ? 'al menos ' : '') + euro.format(amount))) +
    cite('Congreso Abierto · Declaraciones de la XV Legislatura', record.creditedSource) : '';
  const complete = [birth || record.birthYear, data.bio, data.estudios || record.education?.length,
    data.experiencia, data.empresas, data.afiliacion, data.cargos || offices.length,
    data.inmuebles || propertyDetails, data.bienes || financialSummary].every(Boolean);
  const notice = complete ? '' : '<aside class="evidence-note"><strong>Regla de verificación</strong><p>' +
    esc(evidenceRule) + ' <a href="#fuentes">Consultar la metodología</a>.</p></aside>';
  return '<div class="candidate-fields">' + notice + '<div class="cv-sections">' +
    '<section><h4>Perfil y formación</h4><dl>' + cvField(birthLabel, birth, record.birthYear ? esc(record.birthYear) + '<br>' + officialProfile : '') + field('Biografía', data.bio) +
    cvField('Estudios', data.estudios, record.education?.length ? chronology(record.education) + officialProfile : '') +
    '</dl></section><section><h4>Trayectoria profesional</h4><dl>' +
    field('Experiencia laboral fuera de la política', data.experiencia) + field('Empresas fundadas o gestionadas', data.empresas) +
    mercantile + '</dl></section><section><h4>Trayectoria política</h4><dl>' +
    field('Antigüedad en el partido', data.afiliacion) +
    cvField('Cargos públicos y de partido', data.cargos, offices.length ? chronology(offices) + officialProfile : '') +
    (data.trayectoriaElectoral ? field('Candidaturas anteriores', data.trayectoriaElectoral) : '') + '</dl></section><section><h4>Patrimonio declarado</h4><dl>' +
    cvField('Inmuebles', data.inmuebles, propertyDetails) + cvField('Otras partidas y rentas', data.bienes, financialSummary) +
    '</dl>' + governmentAssets(declaration, separateProperty) + (record.declaration ? '<p>' + cite('Declaración de bienes y rentas · Congreso', record.declaration) + '</p>' : '') +
    '</section></div><div class="cv-footer">' +
    (record.creditedSource ? cite('Congreso Abierto · Ficha y datos de origen', record.creditedSource) : '') +
    '<a class="cite" href="' + formatRoute('contacto', identity) + '">Completar o corregir esta ficha</a></div></div>';
}

function showSources() {
  byId('fuentes').innerHTML = '<h1>Fuentes y metodología</h1><div class="panel"><h3>Metodologías reproducibles</h3><ul><li><a href="metodologia/importar-candidaturas-electorales/SKILL.md">Candidaturas y papeletas</a></li><li><a href="metodologia/verificar-datos-de-formaciones/SKILL.md">Datos de las formaciones</a></li><li><a href="metodologia/verificar-logotipos-electorales/SKILL.md">Logotipos</a></li><li><a href="metodologia/actualizar-fichas-candidatos/SKILL.md">Currículos y declaraciones</a></li><li><a href="metodologia/revisar-correcciones-electorales/SKILL.md">Correcciones</a></li><li><a href="#analisis">Trayectorias y orientación</a></li><li><a href="#propuestas">Programas electorales</a></li><li><a href="#imputaciones">Procesos judiciales</a></li></ul><h3>Qué incluye el catálogo</h3>' +
    '<p>Elecciones generales de España del 29 de noviembre de 2026. El catálogo incluye las listas al Congreso con titulares proclamados en el BOE, incorpora la corrección del 7 de noviembre y mantiene el orden de cada lista. El BOE enlazado también contiene las listas al Senado.</p>' +
    '<p>El total de fichas resulta de agrupar siglas y variantes territoriales, como las del PSOE. Las coaliciones se conservan como fichas propias y cada lista muestra su denominación publicada. El BOE ofrece listas por circunscripción; el recuento de formaciones depende del criterio de agrupación.</p>' +
    '<h3>Cómo leer cada ficha</h3><p>El balance de las formaciones políticas publica el patrimonio neto, es decir, la diferencia contable entre activos y pasivos. El plan contable específico de los partidos utiliza esta partida para reflejar su situación patrimonial. Cada cifra lleva el ejercicio de referencia. Las fichas emplean los logotipos disponibles para identificar a la formación. La afiliación incluye la fecha y, cuando consta, el criterio del censo. Los importes personales son partidas de declaraciones fechadas y se muestran bajo su concepto declarado.</p>' +
    '<p>Las fechas de fundación y de inscripción describen hechos distintos. La cifra de afiliación se presenta con la fecha y la definición de cada fuente. En las coaliciones las cifras de un partido miembro solo se atribuyen a esa entidad.</p>' +
    '<p>Los inmuebles incluyen viviendas, fincas y otros bienes declarados. Las proporciones de titularidad se indican cuando constan. Los actos mercantiles se muestran con fecha y cargo. La fuente de cada acto permite comprobar si se trata de un nombramiento o un cese.</p>' +
    '<h3>Programas electorales</h3><p>Las fichas enlazan a documentos del 29N publicados por cada formación. Los compromisos de campaña se identifican por separado. Si falta un programa, su ficha indica que está pendiente de verificar. Cada coalición requiere una fuente propia.</p>' +
    '<p>Consulta las resoluciones y la metodología en <a href="#imputaciones">Imputaciones</a>.</p>' +
    '<p>Consulta la selección de medidas por tema en <a href="#propuestas">Propuestas</a>.</p>' +
    '<p>Consulta los criterios de agregación y las fuentes por indicador en <a href="#analisis">Análisis</a>.</p>' +
    '<h3>Regla de verificación</h3><p>' + esc(evidenceRule) + '</p>' +
    '<p>La identidad electoral se acredita con la proclamación del BOE. La trayectoria y el patrimonio se documentan con registros de intereses, biografías institucionales y publicaciones identificables. Cada dato se atribuye a una persona con identidad contrastada y lleva su fuente. Las declaraciones de bienes corresponden al cargo y al periodo indicados.</p>' +
    '<p>El historial del 23J cruza nombre completo, siglas y circunscripción en ambos boletines. Una candidatura previa acredita presencia en esa lista. La antigüedad de afiliación requiere su propia fuente. Se omiten las juntas afectadas por las rectificaciones de julio de 2023 hasta verificar sus cambios.</p>' +
    '<p>Las personas candidatas y las formaciones pueden aportar documentos o enlaces públicos en <a href="#contacto">Hacer corrección</a>. Las aportaciones se verifican antes de incorporarlas.</p>' +
    '<p>Datos de la XV Legislatura reutilizados de Congreso Abierto (congresoabierto.org), a partir de datos oficiales del Congreso de los Diputados. Licencia CC BY 4.0. El catálogo cruza el nombre completo y la circunscripción, y resume los inmuebles por tipo, año y participación.</p><ul>' +
    '<li>' + cite('Congreso Abierto · Exportación y licencia de los datos', 'https://congresoabierto.org/datos/') + '</li>' +
    ['convocatoria', 'boe', 'correccion', 'boe2023', 'registroIntereses', 'registro', 'cuentas', 'planContable'].map(key => '<li>' + source(key) + '</li>').join('') + '</ul><h3>Créditos de los logotipos</h3><ul>' +
    Object.entries(logos).map(([id, [, url]]) => '<li><a href="' + esc(url) + '">' + esc(id) + '</a></li>').join('') +
    '</ul></div>';
}

function render(moveFocus = false) {
  let parts;
  try { parts = location.hash.slice(1).split('/').map(decodeURIComponent); }
  catch { parts = []; }
  const [page, id, district, group, index] = parts;
  const party = candidaturas.find(item => item.id === id);
  const list = party?.lists.find(item => item.district === district);
  const position = Number(index);
  const validProfile = page === 'perfil' && ['names', 'reserves'].includes(group) &&
    Number.isInteger(position) && position > 0 && list?.[group][position - 1];
  const showDetail = (page === 'formacion' && party) || validProfile;
  const focusProposalTopic = moveFocus && page === 'propuestas' && byId('propuestas').contains(document.activeElement);
  byId('detalle').hidden = !showDetail;
  byId('fuentes').hidden = page !== 'fuentes';
  byId('analisis').hidden = page !== 'analisis';
  byId('propuestas').hidden = page !== 'propuestas';
  byId('imputaciones').hidden = page !== 'imputaciones';
  for (const navPage of ['analisis', 'propuestas', 'imputaciones']) {
    const link = byId('nav-' + navPage);
    if (page === navPage) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  }
  byId('contacto').hidden = page !== 'contacto';
  byId('inicio').hidden = Boolean(showDetail) || page === 'fuentes' || page === 'contacto' || page === 'analisis' || page === 'propuestas' || page === 'imputaciones';
  if (page === 'contacto') byId('correccion-ficha').value = id ?? '';
  if (showDetail) showParty(party, district, validProfile ? {group, position} : undefined);
  else if (page === 'fuentes') showSources();
  else if (page === 'analisis') showAnalysis();
  else if (page === 'propuestas') showProposals(id, district);
  else if (page === 'imputaciones') showJudicial(id, district);
  if (focusProposalTopic) {
    byId('propuestas-tema').focus();
    return;
  }
  if (moveFocus) {
    window.scrollTo(0, 0);
    const openProfile = validProfile && document.querySelector('.candidate[open] > summary');
    if (openProfile) openProfile.focus();
    else byId('contenido').focus({preventScroll: true});
  }
}

byId('territorio').innerHTML = '<option value="">Todas</option>' + districts.map(district =>
  '<option>' + esc(district) + '</option>').join('');
const listCount = candidaturas.reduce((sum, party) => sum + party.lists.length, 0);
byId('estadisticas').innerHTML = [[candidaturas.length, 'formaciones agrupadas'],
  [listCount, 'listas proclamadas'], [districts.length, 'circunscripciones']].map(([count, label]) =>
  '<div class="stat"><strong>' + number.format(count) + '</strong><span>' + label + '</span></div>').join('');
byId('buscar').addEventListener('input', cards);
byId('territorio').addEventListener('change', cards);
byId('orden').addEventListener('change', cards);
byId('filtro-orientacion').addEventListener('change', cards);
byId('filtro-programa').addEventListener('change', cards);
document.querySelector('.skip').addEventListener('click', event => {
  event.preventDefault();
  byId('contenido').focus();
});
const pagesOwner = location.hostname?.match(/^([a-z0-9-]+)\.github\.io$/i)?.[1];
const pagesProject = location.pathname?.split('/')[1];
const issuePage = pagesOwner === '404-notfound-401-unauthorized' && location.protocol === 'https:' && /^[a-z0-9_.-]+$/i.test(pagesProject ?? '') ?
  'https://github.com/' + pagesOwner + '/' + pagesProject + '/issues/new' : '';
byId('correccion-github').disabled = !issuePage;
byId('correccion-github-nota').hidden = !issuePage;
byId('correccion-local-nota').hidden = Boolean(issuePage);

byId('correccion-form').addEventListener('submit', event => {
  event.preventDefault();
  const identity = byId('correccion-ficha').value.trim();
  const change = byId('correccion-dato').value.trim();
  let sourceUrl;
  try { sourceUrl = new URL(byId('correccion-fuente').value); }
  catch { /* El aviso del formulario explica cómo corregir la URL. */ }
  if (!identity || !change || !sourceUrl || sourceUrl.username || sourceUrl.password ||
      !['https:', 'http:'].includes(sourceUrl.protocol)) {
    byId('correccion-estado').textContent = 'Indica una ficha, el dato y un enlace web público.';
    return;
  }
  const content = ['Propuesta de corrección · Transparencia electoral 29N',
    '', 'Ficha: ' + identity, 'Cambio solicitado: ' + change, 'Fuente: ' + sourceUrl.href].join('\n');
  if (!issuePage) return;
  const params = new URLSearchParams({title: 'Corrección · ' + identity, body: content});
  const issueUrl = issuePage + '?' + params;
  if (issueUrl.length > 7000) {
    byId('correccion-estado').textContent = 'Acorta la descripción para abrir la propuesta en GitHub.';
    return;
  }
  location.assign(issueUrl);
});
window.addEventListener('hashchange', () => render(true));
cards();
render();
