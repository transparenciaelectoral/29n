"use strict";

const estadosJudiciales = {
  investigacion: 'Investigación en curso confirmada',
  investigacionDocumentada: 'Investigación documentada · estado actual por confirmar',
  juicio: 'Juicio oral abierto',
  condenaNoFirme: 'Condena no firme',
  condenaFirme: 'Condena penal firme',
  civil: 'Responsabilidad civil',
  absolucion: 'Absolución',
  archivo: 'Archivo',
  amnistia: 'Responsabilidad extinguida por amnistía',
};

const fechaJudicial = new Intl.DateTimeFormat('es-ES', {dateStyle: 'long', timeZone: 'UTC'});
const fechaResolucion = date => fechaJudicial.format(new Date(date + 'T00:00:00Z'));

function sujetosJudiciales() {
  const subjects = new Map(casosJudiciales29N.flatMap(record => record.subjects
    .filter(subject => subject.candidateKey).map(subject => [subject.candidateKey, null])));
  for (const entry of contextoJudicial29N) {
    if (entry.candidateKey) subjects.set(entry.candidateKey, null);
  }
  for (const party of candidaturas) {
    for (const list of party.lists) {
      for (const group of ['names', 'reserves']) {
        list[group].forEach((name, index) => {
          const key = [party.id, list.district, name].join('|');
          if (subjects.has(key)) {
            subjects.set(key, {name, party: party.id, district: list.district, route: formatRoute('perfil', party.id, list.district, group, index + 1)});
          }
        });
      }
    }
  }
  return subjects;
}

function judicialBars(rows, showBars = rows.length > 1) {
  const max = Math.max(...rows.map(({value}) => value));
  return '<ul class="judicial-bars">' + rows.map(({label, value, display}) =>
    '<li><div><span>' + esc(label) + '</span><strong>' + esc(display) + '</strong></div>' +
    (showBars ? '<span class="judicial-track" aria-hidden="true"><span style="width:' +
      (max ? value / max * 100 : 0) + '%"></span></span>' : '') + '</li>').join('') + '</ul>';
}

function judicialSources(sources) {
  return '<p class="judicial-sources">' + sources.map(({date, label, url}) =>
    cite(date ? label + ' · ' + fechaResolucion(date) : label, url)).join(' · ') + '</p>';
}

function showJudicialContext(isPeople, key, candidates) {
  const entries = contextoJudicial29N.filter(entry => isPeople
    ? candidates.get(entry.candidateKey) && (!key || entry.candidateKey === key)
    : !key || entry.party === key);
  byId('judicial-contexto').hidden = !entries.length;
  byId('judicial-contexto-fichas').innerHTML = entries.map(entry => {
    const candidate = candidates.get(entry.candidateKey);
    const identity = candidate ? '<a href="' + candidate.route + '">' + esc(candidate.name) + '</a>' :
      '<a href="' + formatRoute('formacion', entry.party) + '">' + esc(entry.party) + '</a>';
    return '<article class="panel judicial-card"><p class="judicial-status">' + esc(entry.label) + '</p>' +
      '<h3>' + esc(entry.title) + '</h3><p class="muted">' + identity + ' · ' + esc(entry.link) + '</p>' +
      entry.notes.map(note => '<p>' + esc(note) + '</p>').join('') + judicialSources(entry.sources) + '</article>';
  }).join('');
  return entries.length;
}

function judicialCard(record, subjects, candidates) {
  const body = subjects.map(subject => {
    const candidate = candidates.get(subject.candidateKey);
    const identity = candidate ? '<a href="' + candidate.route + '">' + esc(candidate.name) + '</a> · ' +
      esc(candidate.party + ' · ' + candidate.district) : '<a href="' + formatRoute('formacion', subject.party) + '">' +
      esc(subject.party) + '</a>';
    const amounts = (subject.amounts ?? []).map(({amount, concept, context, source}) =>
      '<li><strong>' + esc(euro.format(amount)) + '</strong> · ' + esc(concept) +
      '<p>' + esc(context) + ' ' + cite('Fuente del importe', source) + '</p></li>');
    return '<li><p class="judicial-status">' + esc(estadosJudiciales[subject.status]) + '</p><p>' + identity +
      ' · <time datetime="' + esc(subject.date) + '">' + esc(fechaResolucion(subject.date)) + '</time></p><p>' +
      esc(subject.summary) + '</p>' + (amounts.length ? '<ul>' + amounts.join('') + '</ul>' :
        '<p class="muted">Sin importe individual verificado en la fuente citada.</p>') +
      '</li>';
  }).join('');
  return '<article class="panel judicial-card"><h3>' + esc(record.title) + '</h3><p class="muted">' + esc(record.court) +
    '</p><ul class="judicial-subjects">' + body + '</ul>' + judicialSources(record.sources) + '</article>';
}

function showJudicial(scope, key) {
  const isPeople = scope === 'personas';
  const candidates = sujetosJudiciales();
  const partySelect = byId('judicial-formacion');
  const personSelect = byId('judicial-persona');
  if (!partySelect.options.length) {
    const parties = [...candidaturas].sort((a, b) => collator.compare(a.name, b.name));
    partySelect.innerHTML = '<option value="">Todas las formaciones</option>' + parties.map(party =>
      '<option value="' + esc(party.id) + '">' + esc(party.id + ' · ' + party.name) + '</option>').join('');
    const people = [...candidates].filter(([, person]) => person).sort((a, b) => collator.compare(a[1].name, b[1].name));
    personSelect.innerHTML = '<option value="">Todas las candidaturas con fichas</option>' + people.map(([id, person]) =>
      '<option value="' + esc(id) + '">' + esc(person.name + ' · ' + person.party) + '</option>').join('');
    partySelect.addEventListener('change', () => {
      location.hash = formatRoute('imputaciones', 'formaciones', ...(partySelect.value ? [partySelect.value] : []));
    });
    personSelect.addEventListener('change', () => {
      location.hash = formatRoute('imputaciones', 'personas', ...(personSelect.value ? [personSelect.value] : []));
    });
  }
  partySelect.value = !isPeople && candidaturas.some(party => party.id === key) ? key : '';
  personSelect.value = isPeople && candidates.get(key) ? key : '';
  byId('judicial-campo-formacion').hidden = isPeople;
  byId('judicial-campo-persona').hidden = !isPeople;
  for (const [page, active] of [['formaciones', !isPeople], ['personas', isPeople]]) {
    const link = byId('judicial-' + page);
    if (active) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  }

  const records = casosJudiciales29N.map(record => ({
    record,
    subjects: record.subjects.filter(subject => isPeople
      ? candidates.get(subject.candidateKey) && (!personSelect.value || subject.candidateKey === personSelect.value)
      : subject.party && (!partySelect.value || subject.party === partySelect.value)),
  })).filter(item => item.subjects.length);

  const contextCount = showJudicialContext(isPeople, isPeople ? personSelect.value : partySelect.value, candidates);
  const coverage = records.length
    ? number.format(records.length) + (records.length === 1 ? ' procedimiento documentado en esta selección.' : ' procedimientos documentados en esta selección.')
    : 'Sin procedimientos computables verificados en esta selección.';
  const context = contextCount
    ? ' ' + number.format(contextCount) + (contextCount === 1 ? ' ficha en Contexto documentado.' : ' fichas en Contexto documentado.')
    : ' La cobertura del catálogo es parcial.';
  byId('judicial-cobertura').textContent = coverage + context;

  const countByStatus = Object.keys(estadosJudiciales).map(status => {
    const count = records.filter(({subjects}) => subjects.some(subject => subject.status === status)).length;
    return {label: estadosJudiciales[status], value: count, display: number.format(count)};
  }).filter(({value}) => value);
  byId('judicial-grafico').innerHTML = countByStatus.length ? judicialBars(countByStatus, true) :
    '<p class="muted">Sin datos verificados para representar.</p>';

  const moneyByConcept = new Map();
  for (const {record, subjects} of records) {
    const shown = new Set();
    for (const {amounts = []} of subjects) {
      for (const item of amounts) {
        const moneyKey = [item.concept, item.amount, item.context].join('|');
        if (shown.has(moneyKey)) continue;
        shown.add(moneyKey);
        if (!moneyByConcept.has(item.concept)) moneyByConcept.set(item.concept, []);
        const label = item.label ? record.title + ' · ' + item.label : record.title;
        moneyByConcept.get(item.concept).push({label, value: item.amount, display: euro.format(item.amount)});
      }
    }
  }
  byId('judicial-importes').innerHTML = moneyByConcept.size ? [...moneyByConcept].map(([concept, rows]) =>
    '<h3>' + esc(concept) + '</h3>' + judicialBars(rows)).join('') :
    '<p class="muted">Sin importes individualizados verificados en esta selección.</p>';
  byId('judicial-revision').textContent = 'Última revisión del catálogo: ' + fechaResolucion(revisionJudicial29N) + '.';
  byId('judicial-graficos').hidden = !records.length;
  byId('judicial-certeza').hidden = !records.length;
  byId('judicial-fichas').innerHTML = records.map(({record, subjects}) => judicialCard(record, subjects, candidates)).join('');
}
