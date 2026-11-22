"use strict";

const fulfillmentDate = new Intl.DateTimeFormat('es-ES', {dateStyle: 'long', timeZone: 'UTC'});

function fulfillmentCard(entry) {
  const fulfilled = entry.completed.length;
  const ratio = analysisPercent.format(fulfilled / entry.proposalCount);
  const scaleLabel = number.format(fulfilled) + ' de ' + number.format(entry.proposalCount) +
    ' promesas con cumplimiento documentado (' + ratio + ')';
  const completed = entry.completed.map(item =>
    '<h3>' + esc(item.title) + '</h3><p><strong>Promesa:</strong> ' + esc(item.promise) +
    '</p><p><strong>Cómo se cumplió:</strong> ' + esc(item.result) + '</p>' +
    (item.date ? '<p class="muted"><time datetime="' + esc(item.date) + '">' +
      fulfillmentDate.format(new Date(item.date)) + '</time></p>' : '') +
    '<p>' + evidenceLinks(item.sources) + '</p>');
  return '<article class="panel fulfillment-card"><p class="muted">' +
    esc([entry.party, entry.territory, entry.election].join(' · ')) + '</p><h2>' + esc(entry.title) +
    '</h2><p>' + esc(entry.mandate) + '</p><p>' + esc(entry.scope) + '</p><p>' +
    evidenceLinks([entry.program, entry.mandateSource].filter(Boolean)) +
    '</p><p class="fulfillment-tally"><strong>' + esc(scaleLabel) + '</strong></p><meter min="0" max="' +
    entry.proposalCount + '" value="' + fulfilled + '" aria-label="' + esc(scaleLabel) + '"></meter>' +
    '<p class="muted">' + number.format(entry.proposalCount - fulfilled) + ' sin resultado acreditado en la revisión.</p>' +
    (completed.length ? analysisRows(completed) : '<p class="muted">Aún no hay resultados acreditados en este bloque.</p>') +
    '</article>';
}

function showFulfillment(selectedParty) {
  const formation = byId('cumplimiento-formacion');
  const parties = [...new Set(cumplimientoHistorico.map(item => item.party))].sort(collator.compare);
  if (!formation.options.length) {
    formation.innerHTML = '<option value="">Todas las formaciones revisadas</option>' + parties.map(id =>
      '<option value="' + esc(id) + '">' + esc(id) + '</option>').join('');
    formation.onchange = () => {
      location.hash = formatRoute('cumplimiento', ...(formation.value ? [formation.value] : []));
    };
  }
  formation.value = parties.includes(selectedParty) ? selectedParty : '';
  const rows = cumplimientoHistorico.filter(item => !formation.value || item.party === formation.value);
  byId('cumplimiento-estado').textContent = number.format(rows.length) +
    (rows.length === 1 ? ' bloque documentado.' : ' bloques documentados.');
  byId('cumplimiento-resultados').innerHTML = rows.map(fulfillmentCard).join('');
}
