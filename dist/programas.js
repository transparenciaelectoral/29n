"use strict";

// Solo publicaciones del 29N atribuidas a la formación que figura en la ficha.
const programas29N = {
  PSOE: {
    url: 'https://www.psoe.es/media-content/2026/11/PROGRAMAPSOE29N26.pdf',
    format: 'PDF',
  },
  PP: {
    url: 'https://www.pp.es/wp-content/uploads/2026/11/LA-RECONSTRUCCION-NACIONAL.pdf',
    format: 'PDF',
  },
  VOX: {
    url: 'https://www.voxespana.es/programa/otras-propuestas-de-vox/programa-electoral-de-vox-elecciones-generales-29n-2026',
  },
  PODEMOS: {
    url: 'https://pazcasaytrabajo.es/programa-electoral/programa-electoral-paz-casa-y-trabajo.pdf',
    format: 'PDF',
  },
  FA: {
    url: 'https://frenteamplio.info/programa/',
  },
  PACMA: {
    url: 'https://pacma.es/wp-content/uploads/2026/11/PE_GENERALES_29N26.pdf',
    format: 'PDF',
  },
  'MUNDO+JUSTO': {
    url: 'https://www.porunmundomasjusto.es/wp-content/uploads/2026/11/Castellano.pdf',
    format: 'PDF',
  },
  SALF: {
    url: 'https://www.seacabolafiesta.com/29n',
    title: 'Contrato Electoral Simplificado',
  },
  'EH BILDU': {
    url: 'https://posibleegin.ehbildu.eus/wp-content/uploads/2026/11/PROGRAMA-CAS.pdf',
    format: 'PDF',
  },
  'EAJ-PNV': {
    url: 'https://www.eaj-pnv.eus/es/programa-elecciones-generales-2026/',
  },
  ERC: {
    url: 'https://www.esquerrarepublicana.cat/documents/e2026-programa.pdf',
    format: 'PDF · catalán',
  },
  JXCAT: {
    url: 'https://www.tualcentre.cat/app/uploads/2026/11/PROGRAMA-ELECTORAL_JUNTS_29N.pdf',
    format: 'PDF · catalán',
  },
  BNG: {
    url: 'https://www.bng.gal/media/bnggaliza/files/2026/11/03/26_bng_xerais_documentos_programa_electoral.pdf',
    format: 'PDF · gallego',
  },
  'CCA-1.ºCAN': {
    url: 'https://coalicioncanaria.org/wp-content/uploads/2026/11/CCA-26-Programa_Electoral-29NOV.pdf',
    format: 'PDF',
  },
  'COMPROMIS-EUPV-PODEM-ERPV': {
    url: 'https://frontvalencia.org/programa-compromis-front-valencia.pdf',
    format: 'PDF · valenciano',
  },
  'COMUNS-FRONT AMPLI': {
    url: 'https://comuns.cat/wp-content/uploads/2026/11/Comuns-FA-Programa29N-1.pdf',
    format: 'PDF · catalán',
  },
  'ADELANTE ANDALUCÍA': {
    url: 'https://programa.adelanteandalucia.org/programa-29n-adelante-andalucia.pdf',
    format: 'PDF',
  },
  'TERUEL EXISTE': {
    url: 'https://teruelexiste.info/wp-content/uploads/2026/11/Programa_Teruel_Existe_Completo_29N.pdf',
    format: 'PDF',
  },
  'UPN-PP': {
    url: 'https://upn-pp.es/',
    title: 'Compromisos de campaña',
    commitments: true,
  },
  'FE DE LAS JONS': {
    url: 'https://falange.es/wp-content/uploads/2026/11/FEDELASJONS_ProgramaElectoral_29NGenerales2026.pdf',
    format: 'PDF',
  },
  SY: {
    url: 'https://soriaya.org/programa-generales-2026/',
  },
  GBAI: {
    url: 'https://geroabai.eus/files/2026/11/bases-politicas-29n-1.pdf',
    title: 'Bases políticas del 29N',
    format: 'PDF',
  },
  'NC-BC, PODEMOS, IU, SUMAR': {
    url: 'https://www.unidadpueblocanario.org/documentos/manifiesto-upc.pdf',
    title: 'Manifiesto electoral de Unidad del Pueblo Canario',
    format: 'PDF',
  },
  'PARTIDO AUTÓNOMOS': {
    url: 'https://www.partidoautonomos.es/wp-content/uploads/2026/11/PARTIDO-AUTONOMOS-PROGRAMA-ELECCIONES-GENERALES-2026-29N.pdf',
    format: 'PDF',
  },
  FO: {
    url: 'https://frenteobrero.es/vivienda-propone-frente-obrero/',
    title: 'Propuestas de vivienda de campaña',
    commitments: true,
  },
};
