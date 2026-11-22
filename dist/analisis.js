"use strict";

const areasDeEstudio = [
  ['Derecho', /derecho|abogacia|juridic|criminologia/],
  ['Economía, empresa y trabajo', /econom|empresa|\bade\b|\bmba\b|\bemba\b|fiscal|tributari|financ|laboral|recursos humanos|comercio|hacienda|auditoria|negocios|direccion de personal/],
  ['Ciencias sociales y administración', /ciencias? politic|politica europea|administracion publica|gestion publica|politicas publicas|sociolog|relaciones internacionales|democracia y gobierno|gobierno y administracion|trabajo social|servicios sociales|integracion social|estudios europeos|gobernanza/],
  ['Humanidades, artes y lenguas', /historia|arqueolog|filolog|filosof|geografi|antropolog|humanidades|letras|literatura|danza|teologia|flamenco/],
  ['Educación y deporte', /magisterio|profesorado|educacion|psicopedagogia|actividades fisicas|actividad fisica|deporte/],
  ['Salud y psicología', /medicina|sanitari|salud|enfermeria|psicologia/],
  ['Ciencias, ingeniería y arquitectura', /ingenier|arquitect|informatica|ciencias ambientales|ciencias exactas|ciencias fisicas|quimica|forestal|medio ambiente|energias renovables|tecnologias|espacios naturales|big data|ecosistemas/],
  ['Comunicación', /periodismo|comunicacion|audiovisual|cienc[ia]as? de la informacion|reporterismo/],
  ['Turismo', /turismo/],
  ['Educación general', /^bup\b/],
];

const orientacion29N = {
  PSOE: {
    label: 'Izquierda',
    text: 'La publicación del PSOE recoge que su secretario general lo define como un partido de izquierdas.',
    url: 'https://www.psoe.es/actualidad/noticias-actualidad/pedro-sanchez-el-psoe-es-un-partido-de-izquierdas-que-atrae-al-centro-que-no-es-resignacion-ni-rupturismo-sino-reformismo--115736/',
  },
  PP: {
    label: 'Centroderecha',
    text: 'El documento «España en libertad» define al PP como un partido de centroderecha.',
    url: 'https://www.pp.es/actualidad/articulos/documento-espana-libertad/',
  },
  ERC: {
    label: 'Izquierda',
    text: 'La ponencia estratégica del 30.º Congreso Nacional sitúa la estrategia del partido en la izquierda.',
    url: 'https://static.esquerra.cat/uploads/20250324/30cgn-ponencia-estrategica-aprovada.pdf#page=7',
  },
};

function studyProfile(data, record) {
  const entries = (record.education ?? []).map(text => ({text, url: record.source}));
  for (const entry of [data.estudios, data.bio]) {
    if (entry?.[0] && fuentes[entry[1]]) entries.push({text: entry[0], url: fuentes[entry[1]][1]});
  }
  const areas = new Set();
  const evidence = [];
  let advanced;
  for (const entry of entries) {
    if (!entry.url || typeof entry.text !== 'string') continue;
    for (const clause of entry.text.split(/[.;]\s+|,\s+(?=(?:m[aá]ster|doctor|licenciad|diplomad|grado|posgrado))/iu)) {
      const plain = normalize(clause);
      // Delimita las titulaciones antes de referencias a centros o actividad profesional.
      const academic = /(?:^|\b(?:y|con|recoge|indica)\s+)(?:doctor[ao]?\b|licenciad[oa]|diplomad[oa]|diplomatura|graduad[oa]|grado\b|master\b|executive master|pos(?:t)?grado|estudios\b|estudiant[ea]|formacion universitaria|mba\b|emba\b|industrial executive mba|ingenier[oa]|arquitect[oa]|especialidad en medicina|tecnico (?:superior|auxiliar forestal|especialista)|titulad[oa]|bup\b)/.test(plain) ||
        /^(?:actualmente realizando|estudiando|curso estudios|estudio ingenieria|cursa estudios|actualmente cursando)\b/.test(plain);
      const doctorate = /\bdoctor(?:a)? (?:en|por)\b|\bcompleto el doctorado\b|^doctor ingeniero/.test(plain);
      if (!academic && !doctorate) continue;
      const reference = {text: clause.trim(), url: entry.url};
      evidence.push(reference);
      const subject = plain.split(/\b(?:por (?:la|el|una)|en (?:la|el) (?:universidad|instituto|escuela)|universitad|universitat|universidad)\b/)[0];
      for (const [area, pattern] of areasDeEstudio) {
        if (pattern.test(subject)) areas.add(area);
      }
      const inProgress = /\b(?:estudios (?:de|en) (?:doctorado|posgrado|master|doble master)|cursando|estudiando|actualmente|estudiante)\b/.test(plain);
      if (doctorate && !inProgress) advanced = {level: 'Doctorado', ...reference};
      if (!advanced && /\b(?:master|mba|emba)\b/.test(subject) && !inProgress) {
        advanced = {level: 'Máster o MBA', ...reference};
      }
    }
  }
  return {areas: [...areas], evidence, advanced};
}

function analyseCandidates(parties) {
  return parties.flatMap(party => party.lists.flatMap(list => ['names', 'reserves'].flatMap(group =>
    list[group].map((name, index) => {
      const key = [party.id, list.district, name].join('|');
      const data = {...perfiles[key], ...trayectorias[key]};
      const record = perfilesPublicos[key] ?? {};
      const job = trabajos29N[key];
      const work = job && job.text === data.experiencia?.[0] && fuentes[data.experiencia[1]]
        ? {...job, url: fuentes[data.experiencia[1]][1]} : undefined;
      return {
        name, party: party.id, district: list.district, group,
        route: formatRoute('perfil', party.id, list.district, group, index + 1),
        study: studyProfile(data, record), work, evidence: evidenciasTrayectorias29N[key] ?? [],
        chronologyEvidence: cronologiaTrayectorias29N[key], companies: fundadores29N[key] ?? [],
      };
    })
  )));
}

function tally(values) {
  const counts = new Map();
  for (const value of values) counts.set(value, (counts.get(value) ?? 0) + 1);
  return [...counts].sort(([nameA, a], [nameB, b]) => b - a || collator.compare(nameA, nameB));
}

function category(areas) {
  return areas.length > 1 ? 'Varias áreas' : areas[0];
}

const analysisPercent = new Intl.NumberFormat('es-ES', {style: 'percent', maximumFractionDigits: 1});
const analysisPalette = ['#226963', '#7456a4', '#b5642f', '#326c9c', '#a34569', '#58803c', '#8a654b', '#67619a', '#9f7333', '#3b7f89', '#805d75', '#667048'];

function analysisChart(rows, missingLabel = '') {
  if (!rows.length) return '<p class="muted">Sin registros clasificados para este filtro.</p>';
  const total = rows.reduce((sum, [, count]) => sum + count, 0);
  let offset = 0;
  const segments = [];
  const legend = rows.map(([label, count], index) => {
    const color = label === missingLabel ? '#c5cbc8' : analysisPalette[index % analysisPalette.length];
    const end = offset + count;
    segments.push(color + ' ' + (100 * offset / total) + '% ' + (100 * end / total) + '%');
    offset = end;
    return '<li><span aria-hidden="true" class="chart-swatch" style="background:' + color + '"></span><span>' +
      esc(label) + '</span><strong>' + number.format(count) + ' · ' + analysisPercent.format(count / total) + '</strong></li>';
  }).join('');
  return '<div class="chart-layout"><div class="analysis-donut" aria-hidden="true" style="background:conic-gradient(' +
    segments.join(',') + ')"><span>' + number.format(total) + '</span></div><ul class="chart-legend">' + legend + '</ul></div>';
}

function analysisProfile(row) {
  return '<a href="' + row.route + '">' + esc(row.name) + '</a><small>' + esc(row.party + ' · ' + row.district) + '</small>';
}

function analysisRows(items) {
  return '<ul class="analysis-list">' + items.map(item => '<li>' + item + '</li>').join('') + '</ul>';
}

function analysisEvidence(title, rows) {
  if (!rows.length) return '';
  return '<details class="analysis-evidence"><summary>' + esc(title) + ' (' + number.format(rows.length) + ')</summary>' +
    analysisRows(rows) + '</details>';
}

function showCandidateAnalysis() {
  const party = byId('analisis-formacion').value;
  const group = byId('analisis-lista').value;
  const district = byId('analisis-circunscripcion').value;
  const rows = analyseCandidates(candidaturas.filter(item => !party || item.id === party))
    .filter(item => (!group || item.group === group) && (!district || item.district === district)).sort((a, b) => collator.compare(a.name, b.name));
  const total = rows.length;
  const studies = rows.filter(item => item.study.areas.length);
  const work = rows.filter(item => item.work);
  const advanced = rows.filter(item => item.study.advanced);
  const doctorates = advanced.filter(item => item.study.advanced.level === 'Doctorado').length;
  const founders = rows.filter(item => item.companies.length);
  const ventures = new Set(founders.flatMap(item => item.companies.map(company => normalize(company.name))));
  const educationCounts = tally(studies.map(item => category(item.study.areas)));
  const workCounts = tally(work.map(item => category(item.work.areas)));
  const count = value => number.format(value);
  const coverage = size => count(size) + ' de ' + count(total) + ' candidaturas';
  const top = (counts, subject) => counts.length && (counts.length === 1 || counts[0][1] > counts[1][1])
    ? ' Entre ' + subject + ', la categoría más frecuente es «' + counts[0][0] + '» (' + count(counts[0][1]) + ').' : '';

  byId('analisis-estado').textContent = count(total) + (total === 1 ? ' candidatura en la selección' : ' candidaturas en la selección');
  showCareerEvidence(rows);
  byId('analisis-resultados').innerHTML =
    '<section class="analysis-findings panel"><h2>Qué muestran los datos</h2><p>Se pueden clasificar los estudios de ' +
    esc(coverage(studies.length)) + ' y la experiencia laboral de ' + esc(coverage(work.length)) + '.' +
    esc(top(educationCounts, 'los estudios clasificados') + top(workCounts, 'los empleos clasificados')) +
    '</p><p>La cobertura depende de las fuentes disponibles para cada ficha. Los porcentajes de los gráficos se calculan sobre los casos clasificados.' +
    ' Los resultados describen las fichas documentadas y no se pueden extrapolar al conjunto.</p></section>' +
    '<div class="analysis-grid"><section class="panel"><h2>Qué han estudiado</h2><p class="muted">' + esc(coverage(studies.length)) + ' con área identificada.</p>' +
    analysisChart(educationCounts) + analysisEvidence('Ver estudios, áreas y fuentes', studies.map(item =>
      analysisProfile(item) + '<p>' + esc(item.study.areas.join(' · ')) + '</p>' +
      item.study.evidence.map(({text, url}) => '<p>' + esc(text) + ' ' + cite('Fuente', url) + '</p>').join(''))) +
    '</section><section class="panel"><h2>En qué han trabajado</h2><p class="muted">' + esc(coverage(work.length)) + ' con experiencia clasificada fuera de la política.</p>' +
    analysisChart(workCounts) + analysisEvidence('Ver puestos, áreas y fuentes', work.map(item =>
      analysisProfile(item) + '<p>' + esc(item.work.areas.join(' · ')) + '</p><p>' + esc(item.work.text) + ' ' + cite('Fuente', item.work.url) + '</p>')) +
    '</section><section class="panel"><h2>Másteres y doctorados</h2><p><strong>' + count(advanced.length) +
    '</strong> candidaturas con formación avanzada documentada. Por nivel más alto, ' + count(doctorates) +
    ' con doctorado y ' + count(advanced.length - doctorates) + ' con máster o MBA.</p>' +
    analysisEvidence('Ver personas, titulaciones y fuentes', advanced.map(item => {
      const {level, text, url} = item.study.advanced;
      return analysisProfile(item) + '<p><strong>' + esc(level) + '</strong> · ' + esc(text) + ' ' + cite('Fuente', url) + '</p>';
    })) + '</section><section class="panel"><h2>Empresas y despachos fundados</h2><p><strong>' +
    count(founders.length) + '</strong> candidaturas con fundación o cofundación documentada, en <strong>' +
    count(ventures.size) + '</strong> iniciativas distintas.</p>' +
    analysisEvidence('Ver personas, iniciativas y fuentes', founders.map(item => analysisProfile(item) +
      analysisRows(item.companies.map(company =>
        (company.website ? cite(company.name, company.website) : esc(company.name)) +
        ' · ' + esc(company.sector) + '<p>' + esc(company.note ?? '') + ' ' + cite('Fuente de la fundación', company.source) + '</p>')))) +
    '</section></div>';
}

function showOrientationAnalysis() {
  const missing = 'Pendiente de documentar';
  const parties = [...candidaturas].sort((a, b) => collator.compare(a.name, b.name));
  const documented = parties.filter(party => orientacion29N[party.id]);
  const counts = tally(parties.map(party => orientacion29N[party.id]?.label ?? missing));
  const fullPrograms = parties.filter(verifiedProgram).length;
  const commitments = parties.filter(party => programas29N[party.id]?.commitments).length;
  byId('analisis-orientacion').innerHTML =
    '<p><strong>' + number.format(documented.length) + ' de ' + number.format(parties.length) +
    '</strong> formaciones tienen una autodefinición documentada en el eje izquierda–derecha. Cada formación cuenta una vez. Las etiquetas recogen cómo se describen las propias formaciones en sus publicaciones.</p>' +
    analysisChart(counts, missing) +
    analysisEvidence('Ver formaciones y fuentes', parties.map(party => {
      const orientation = orientacion29N[party.id];
      return '<a href="' + formatRoute('formacion', party.id) + '">' + esc(party.id) + '</a> · ' +
        (orientation ? esc(orientation.label) + '<p>' + esc(orientation.text) + ' ' + cite('Publicación de la formación', orientation.url) + '</p>' : missing);
    })) +
    '<p class="analysis-programs"><strong>' + number.format(fullPrograms) + ' de ' + number.format(parties.length) +
    '</strong> formaciones tienen programa del 29N verificado. Las otras <strong>' +
    number.format(parties.length - fullPrograms) + '</strong> quedan pendientes de confirmar con un programa completo.' +
    ' Entre ellas, ' + number.format(commitments) + (commitments === 1 ? ' tiene compromisos' : ' tienen compromisos') +
    ' de campaña enlazados. <a href="#propuestas">Consultar propuestas</a>.</p>' +
    '<p>Las opiniones personales requieren su propia evidencia pública. Este gráfico describe únicamente a las formaciones.</p>';
}

function showAnalysis() {
  const select = byId('analisis-formacion');
  if (!select.options.length) {
    select.innerHTML = '<option value="">Todas las formaciones</option>' + [...candidaturas]
      .sort((a, b) => collator.compare(a.name, b.name))
      .map(party => '<option value="' + esc(party.id) + '">' + esc(party.id + ' · ' + party.name) + '</option>').join('');
    select.addEventListener('change', showCandidateAnalysis);
    byId('analisis-lista').addEventListener('change', showCandidateAnalysis);
    const district = byId('analisis-circunscripcion');
    district.innerHTML = '<option value="">Todas las circunscripciones</option>' + districts.map(name =>
      '<option value="' + esc(name) + '">' + esc(name) + '</option>').join('');
    district.addEventListener('change', showCandidateAnalysis);
  }
  showCandidateAnalysis();
  showOrientationAnalysis();
}
