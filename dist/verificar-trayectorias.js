"use strict";

const careerStatuses = {
  corroborado: 'Corroborado',
  declarado: 'Declarado',
  conflicto: 'Fuentes en conflicto',
  pendiente: 'Pendiente',
};
const careerPercent = new Intl.NumberFormat('es-ES', {style: 'percent', maximumFractionDigits: 2});

function evidenceLinks(sources) {
  return sources.map(({label, url, date}) => cite(label, url) + (date ? ' <time datetime="' +
    esc(date) + '">(' + esc(date) + ')</time>' : '')).join(' · ');
}

function careerClaims(evidence, chronologyEvidence = []) {
  return '<ul class="analysis-list career-claims">' + evidence.map(({status, text, sources}, index) => {
    const timing = chronologyEvidence.find(item => item.index === index);
    const timingLabel = timing?.relation === 'posterior'
      ? 'Puesto posterior al primer cargo o candidatura documentados.'
      : status === 'corroborado' ? 'Puesto anterior corroborado.' : 'Puesto anterior según la declaración.';
    return '<li><strong>' + esc(careerStatuses[status]) + '</strong><p>' + esc(text) + '</p><p>' +
      evidenceLinks(sources) + '</p>' + (timing ?
        '<p><strong>' + timingLabel + '</strong> ' + esc(timing.text) +
          '</p><p>' + evidenceLinks(timing.sources) + '</p>' : '') + '</li>';
  }).join('') + '</ul>';
}

function showCareerEvidence(rows) {
  const counts = {corroborado: 0, declarado: 0, conflicto: 0, pendiente: 0};
  const reviewed = [];
  const timing = {corroborado: 0, declarado: 0, posterior: 0, pendiente: 0};
  for (const row of rows) {
    const state = ['corroborado', 'conflicto', 'declarado'].find(value =>
      row.evidence.some(claim => claim.status === value)) ?? 'pendiente';
    counts[state]++;
    if (row.evidence.length) reviewed.push(analysisProfile(row) + careerClaims(row.evidence, row.chronologyEvidence));
    const chronologicalClaims = row.chronologyEvidence ?? [];
    const prior = chronologicalClaims.filter(item => item.relation === 'anterior');
    const stateInTime = ['corroborado', 'declarado'].find(value =>
      prior.some(item => row.evidence[item.index]?.status === value)) ??
      (chronologicalClaims.some(item => item.relation === 'posterior') ? 'posterior' : 'pendiente');
    timing[stateInTime]++;
  }
  const total = rows.length;
  const fraction = count => total ? careerPercent.format(count / total) : '—';
  const breakdown = Object.entries(counts).map(([key, count]) =>
    '<div><dt>' + esc(careerStatuses[key]) + '</dt><dd><strong>' + number.format(count) +
    '</strong> <span class="muted">· ' + fraction(count) + '</span></dd></div>').join('');
  byId('trayectorias-verificadas').innerHTML = total ?
    '<p><strong>' + number.format(counts.corroborado) + ' de ' + number.format(total) +
    '</strong> candidaturas tienen al menos un puesto fuera de la política corroborado (' + fraction(counts.corroborado) + '). ' +
    'El recuento es de <strong>' + number.format(counts.corroborado + counts.declarado) + '</strong> (' +
    fraction(counts.corroborado + counts.declarado) + ') al incluir también las candidaturas con puestos declarados como única evidencia.</p>' +
    '<dl class="career-breakdown">' + breakdown + '</dl>' +
    '<div class="career-chronology"><h3>Experiencia previa a cargos o candidaturas</h3><p><strong>' +
    number.format(timing.corroborado) + ' de ' + number.format(total) + '</strong> candidaturas (' + fraction(timing.corroborado) +
    ') tienen al menos un puesto anterior corroborado. La referencia es el primer cargo público, cargo de partido o candidatura que se ha documentado para cada persona.</p>' +
    analysisChart([
      ['Puesto anterior corroborado', timing.corroborado],
      ['Puesto anterior declarado', timing.declarado],
      ['Solo puestos posteriores fechados', timing.posterior],
      ['Cronología pendiente', timing.pendiente],
    ].filter(([, count]) => count), 'Cronología pendiente') + '</div>' +
    '<p class="muted">La base de los porcentajes son todas las candidaturas del filtro. «Pendiente» indica que la revisión aún no aporta evidencia suficiente. El gráfico de sectores que aparece después usa las fichas con experiencia clasificada.</p>' +
    analysisEvidence('Ver las afirmaciones y todas sus fuentes', reviewed) :
    '<p class="muted">La selección no contiene candidaturas.</p>';
}
