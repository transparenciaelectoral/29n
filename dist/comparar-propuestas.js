"use strict";

const temasPropuestas = {
  vivienda: ['Vivienda', '¿Qué propone para el alquiler, el acceso a la compra o la oferta de vivienda? ¿A quién se aplicaría?'],
  sanidad: ['Sanidad', '¿Cómo cambiarían las listas de espera, la atención primaria o los servicios cubiertos?'],
  empleo: ['Empleo', '¿Qué cambiaría en el salario, la jornada, los contratos o las condiciones de los autónomos?'],
  defensa: ['Defensa', '¿Qué plantea sobre gasto militar, alianzas internacionales o la política de defensa?'],
  investigacion: ['I+D', '¿Qué recursos o incentivos destinaría a la investigación? Para comparar objetivos de inversión, comprueba el año y si incluyen fondos públicos, privados o ambos.'],
  digitalizacion: ['Digitalización', '¿Qué propone sobre conectividad, servicios públicos digitales, inteligencia artificial o derechos en internet?'],
  educacion: ['Educación', '¿Qué propone sobre becas, formación profesional, escuelas o universidad?'],
  impuestos: ['Impuestos y pensiones', '¿Qué impuestos o pensiones cambiarían y a qué personas o rentas afectaría?'],
  clima: ['Energía y clima', '¿Qué propone sobre energía, emisiones y adaptación a los efectos del cambio climático?'],
};

function proposalCard(party, topic, measures) {
  const program = programas29N[party.id];
  const title = partyLogo(party) + '<h3><a href="' + formatRoute('formacion', party.id) + '">' + esc(party.id) + '</a></h3>';
  const points = measures.length
    ? '<ul class="proposal-points">' + measures.map((measure, index) =>
      '<li><p>' + esc(measure.text) + '</p>' + cite('Fuente · ' + measure.reference, measure.url) +
      executionDetails(party, topic, index, measure) + '</li>').join('') + '</ul>'
    : '<p class="muted">' + (program ? 'Selección de este tema pendiente de verificar.' : 'Programa del 29N pendiente de verificar.') + '</p>';
  const scope = program?.commitments ? '<p class="proposal-scope">Compromisos de campaña</p>' : '';
  return '<article class="panel proposal-card"><div class="party-identity">' + title + '</div>' +
    '<p class="muted proposal-party-name">' + esc(party.name) + '</p>' + scope + points + programLink(party) + '</article>';
}

function showProposals(topic, selectedParty) {
  const activeTopic = Object.hasOwn(temasPropuestas, topic) ? topic : 'vivienda';
  const [label, question] = temasPropuestas[activeTopic];
  const parties = [...candidaturas].sort((a, b) => collator.compare(a.name, b.name));
  const selected = parties.find(party => party.id === selectedParty);
  const formation = byId('propuestas-formacion');
  if (!formation.options.length) {
    formation.innerHTML = '<option value="">Todas las formaciones</option>' + parties.map(party =>
      '<option value="' + esc(party.id) + '">' + esc(party.id + ' · ' + party.name) + '</option>').join('');
  }
  formation.value = selected?.id ?? '';
  formation.onchange = () => {
    location.hash = formatRoute('propuestas', activeTopic, ...(formation.value ? [formation.value] : []));
  };
  byId('propuestas-temas').innerHTML = Object.entries(temasPropuestas).map(([key, [name]]) =>
    '<a' + (key === activeTopic ? ' aria-current="page"' : '') + ' href="' +
    formatRoute('propuestas', key, ...(selected ? [selected.id] : [])) + '">' + esc(name) + '</a>').join('');

  const scope = selected ? [selected] : parties;
  const measuresFor = party => propuestas29N[party.id]?.[activeTopic] ?? [];
  const withMeasures = scope.filter(party => measuresFor(party).length);
  const pending = scope.filter(party => !measuresFor(party).length);
  byId('propuestas-tema').textContent = label;
  byId('propuestas-pregunta').textContent = question;
  byId('propuestas-cobertura').textContent = number.format(withMeasures.length) + ' de ' +
    number.format(scope.length) + (selected ? ' formación con medidas verificadas en este tema.' :
      ' formaciones con medidas verificadas en este tema.');
  byId('propuestas-tarjetas').innerHTML = (selected ? scope : withMeasures)
    .map(party => proposalCard(party, activeTopic, measuresFor(party))).join('');
  byId('propuestas-pendientes').hidden = Boolean(selected) || !pending.length;
  byId('propuestas-pendientes-titulo').textContent = 'Ver formaciones pendientes (' + number.format(pending.length) + ')';
  byId('propuestas-pendientes-lista').innerHTML = pending.map(party =>
    '<li><a href="' + formatRoute('formacion', party.id) + '">' + esc(party.id) + '</a> · ' +
      (programas29N[party.id] ? 'Selección del tema pendiente' : 'Programa del 29N pendiente de verificar') + '</li>').join('');
}
