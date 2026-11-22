// Datos contrastados con documentos públicos. La clave conserva el nombre de lista del BOE.
Object.assign(fuentes, {
  alvisePE: ['Parlamento Europeo · Ficha de Alvise Pérez', 'https://www.europarl.europa.eu/meps/es/257019/ALVISE_PEREZ/home'],
  alviseIntereses: ['Parlamento Europeo · Declaración de intereses privados del 07/11/2025', 'https://www.europarl.europa.eu/erpl-app-public/mep-documents/DPI/10/8fe71a57-3cb1-4583-83c0-2e2c45f5c531_1762782480615.pdf'],
  alviseSALF: ['RTVE · Trayectoria de SALF y declaración de su promotor', 'https://www.rtve.es/noticias/20250826/alvise-cobro-100000-euros-compensacion-sueldo-sortear-no-financiar-partido/16707966.shtml'],
  herasCV: ['Real Academia Europea de Doctores · Perfil profesional', 'https://raed.academy/academicos/dr-luis-de-las-heras-vives/'],
  monteroCV: ['Parlamento Europeo · Currículum de Irene Montero', 'https://www.europarl.europa.eu/meps/es/245770/name/cv'],
  monteroMoncloa: ['La Moncloa · Formación de Irene Montero', 'https://www.lamoncloa.gob.es/lang/en/gobierno/paginas/govern-2020-01/20200114irenemontero.aspx'],
  monteroIntereses: ['Parlamento Europeo · Declaración de intereses privados', 'https://www.europarl.europa.eu/erpl-app-public/mep-documents/DPI/10/ba8a6f22-8a91-46bb-bc98-3f7ddb436829_1725006001313.pdf'],
  pacmaEquipo: ['PACMA · Perfiles de la junta directiva y coordinadores', 'https://pacma.es/equipo-humano/'],
  vaqueroCV: ['Roberto Vaquero · Biografía del candidato', 'https://robertovaquero.es/sobre-mi'],
  roblesCV: ['La Moncloa · Trayectoria judicial y política', 'https://www.lamoncloa.gob.es/gobierno/paginas/biografias-xv-legislatura/ministra-margarita-robles.aspx'],
  delgadoCV: ['Asamblea de Madrid · Ficha y actividades profesionales', 'https://www.asambleamadrid.es/composicion/diputados/ficha-del-diputado?diputado=406&legislatura=13'],
  delgadoBienes: ['Asamblea de Madrid · Declaración de bienes patrimoniales del 15/06/2023', 'https://www.asambleamadrid.es/static/docs/registro-ep/RGEP4825-23.pdf'],
  semperRTVE: ['RTVE · Afiliación del candidato y anuncio de su incorporación a EY', 'https://www.rtve.es/noticias/20200114/borja-semper-presidente-del-pp-gipuzkoa-portavoz-parlamento-vasco-abandona-politica/1995502.shtml'],
  rufianCV: ['ERC · Perfil de Gabriel Rufián', 'https://www.esquerra.cat/qui-som/gabriel-rufian/'],
  rufian2015: ['ERC · Candidatura de las elecciones de 2015', 'https://www.esquerra.cat/gabriel-rufian-encapcalara-la-llista-desquerra-republicana-a-les-eleccions-del-20d-13514/'],
  rufianExperiencia: ['ERC · Trayectoria profesional de Gabriel Rufián', 'https://www.esquerra.cat/ca/10-coses-gabriel-rufian'],
  noguerasCV: ['Congreso · Ficha personal de la XIII legislatura', 'https://www.congreso.es/es/busqueda-de-diputados?_diputadomodule_mostrarFicha=true&codParlamentario=310&idLegislatura=XIII'],
  colauCV: ['Ayuntamiento de Barcelona · Currículum de Ada Colau', 'https://apidocs.barcelona.cat/retribucions_pro/REG_AJB_Ada%20Colau%20Ballano_CVCS.pdf'],
  alhoraFundacionCV: ['Alhora · Congreso fundacional y primera dirección', 'https://alhora.cat/el-congres-fundacional-dalhora-tria-la-seva-direccio-provisional/'],
  alhoraEjecutivaCV: ['Alhora · Composición de su ejecutiva', 'https://alhora.cat/alhora-estructura-la-nova-executiva-amb-jordi-graupera-com-a-president-i-julia-ojeda-com-a-vicepresidenta/'],
  alhoraGraupera: ['Alhora · Jordi Graupera, docente universitario', 'https://alhora.cat/podcast-radio-arrels-44-anys-de-resistencia-cultural-a-la-catalunya-nord-en-perill/'],
  alhoraOjeda: ['Alhora · Perfil académico de Júlia Ojeda', 'https://alhora.cat/author/julia-ojeda/'],
  casolCV: ['Parlament de Catalunya · Perfil de Cristina Casol', 'https://parlament.cat/web/composicio/diputats-fitxa/index.html?p_codi=2235&p_legislatura=13'],
  bilduVascoCV: ['EH Bildu · Biografías de candidaturas al Parlamento Vasco en 2020', 'https://ehbildu.eus/herriak/eae-legebiltzarra-2020/hautagaiak'],
  regoCV: ['Congreso · Ficha personal de la XV legislatura', 'https://www.congreso.es/es/busqueda-de-diputados?codParlamentario=238&idLegislatura=XV&mostrarFicha=true'],
  regoIntereses: ['Congreso · Registro de actividades de Néstor Rego', 'https://www.congreso.es/docinte/registro_intereses_diputado_238.pdf'],
  guitartCV: ['Congreso · Trayectoria de Tomás Guitarte', 'https://www.congreso.es/eu/busqueda-de-diputados?_diputadomodule_mostrarFicha=true&codParlamentario=306&idLegislatura=XIV'],
  oposicionPNV: ['EAJ-PNV · Presentación de las candidaturas al Congreso', 'https://www.eaj-pnv.eus/es/noticias/58703/eaj-pnv-presenta-su-programa-electoral-tenemos-un-/'],
});

const trayectorias = {
  'SALF|Madrid|Luis Alvise Pérez Fernández': {
    nacimiento: ['Sevilla · 26/02/1990 · 36 años el 29N', 'alvisePE'],
    afiliacion: ['Encabezó la agrupación de electores SALF en 2024. Según su testimonio recogido por RTVE, los estatutos del partido del mismo nombre se aprobaron en 2025.', 'alviseSALF'],
    experiencia: ['Declaró actividad como creador de contenidos entre 2021 y julio de 2024 y consultoría autónoma en redes sociales y comunicación para empresas españolas del sector durante el mandato europeo.', 'alviseIntereses'],
    cargos: ['Diputado del Parlamento Europeo desde 2024.', 'alvisePE'],
    empresas: ['Se declaró administrador único y propietario de Resistencia Popular, S. L. Indicó que estaba inactiva al presentar la declaración.', 'alviseIntereses', '07/11/2025'],
    bienes: ['Declaró 106.000 € en ingresos por consultoría y 15.000 € por Resistencia Popular, S. L. correspondientes a 2021. El documento recoge intereses e ingresos.', 'alviseIntereses', '07/11/2025'],
  },
  'SALF|Madrid|Luis de las Heras Vives': {
    bio: ['Doctor en Derecho por la Universidad Autónoma de Barcelona, máster en Derecho por ISDE y licenciado en Derecho por la Universidad de Valencia.', 'herasCV'],
    experiencia: ['Profesor de Derecho Penal en la UNIR desde 2021. Docente en la Universidad Villanueva (2023–2024), abogado penalista en IGH (2014–2018) y asistente de investigación en IESE (2013–2014).', 'herasCV'],
    cargos: ['Su ficha académica recoge una comisión de servicios en el Parlamento Europeo.', 'herasCV'],
    empresas: ['Dirigió el área penal de Durán & Durán Abogados entre 2018 y 2022 y fue socio entre 2022 y 2024.', 'herasCV'],
  },
  'FO|Madrid|Roberto Vaquero Arribas': {
    nacimiento: ['Madrid · 21/05/1986 · 40 años el 29N', 'vaqueroCV'],
    bio: ['Grado en Geografía e Historia y máster en La España Contemporánea en el Contexto Internacional por la UNED. Su biografía indica estudios de doctorado en Historia en la Universidad de Valencia.', 'vaqueroCV'],
    experiencia: ['Escritor de ensayo y narrativa, columnista en Zenda y colaborador en el programa de televisión Horizonte.', 'vaqueroCV'],
    cargos: ['Presidente de Frente Obrero.', 'vaqueroCV'],
  },
  'PODEMOS|Madrid|Irene Montero Gil': {
    nacimiento: ['Madrid · 13/02/1988 · 38 años el 29N', 'monteroCV'],
    bio: ['Formación universitaria en Psicología y máster en Psicología de la Educación por la Universidad Autónoma de Madrid.', 'monteroMoncloa'],
    afiliacion: ['Consejera ciudadana estatal de Podemos desde noviembre de 2014 según su currículum parlamentario.', 'monteroCV'],
    experiencia: ['Cajera en Saturn (2010–2011) y becaria del programa de Formación del Profesorado Universitario (2013–2015).', 'monteroCV'],
    cargos: ['Diputada del Congreso (2016–2023), ministra de Igualdad (2020–2023) y eurodiputada desde 2024.', 'monteroCV'],
    bienes: ['Declaró 77.478 € anuales como ministra de Igualdad y un pago único de 20.000 € de Editorial Navona por escribir un libro.', 'monteroIntereses', '2024 · declaración de intereses'],
  },
  'PACMA|Madrid|Asier Esparza Billalabeitia': {
    afiliacion: ['Afiliado desde 2019.', 'pacmaEquipo'],
    experiencia: ['Empresario del sector de la imagen publicitaria.', 'pacmaEquipo'],
    cargos: ['Coordinador de PACMA en Gipuzkoa desde 2020, vocal en 2024 y secretario de la junta directiva desde junio de 2026.', 'pacmaEquipo'],
  },
  'PACMA|Madrid|Cristina García Salazar': {
    afiliacion: ['Afiliada desde 2016.', 'pacmaEquipo'],
    experiencia: ['Abogada desde 2011, especializada en Derecho Animal.', 'pacmaEquipo'],
    cargos: ['Coordinadora provincial de PACMA en Málaga (2017–2021) y vicepresidenta de la junta directiva desde 2021.', 'pacmaEquipo'],
    empresas: ['Fundadora de un despacho de abogacía especializado en Derecho Animal, según su ficha de PACMA.', 'pacmaEquipo'],
  },
  'PACMA|Albacete|María de los Llanos Soriano García': {
    cargos: ['Coordinadora de PACMA en Albacete.', 'pacmaEquipo'],
  },
  'PACMA|Almería|Eduardo José Milla Juan': {
    cargos: ['Coordinador de PACMA en Almería.', 'pacmaEquipo'],
  },
  'PSOE|Madrid|María Margarita Robles Fernández': {
    bio: ['Licenciada en Derecho por la Universidad de Barcelona.', 'roblesCV'],
    experiencia: ['Jueza y magistrada en Balaguer, Sant Feliu de Llobregat y Bilbao. Presidió la Audiencia Provincial de Barcelona (1991–1993) y fue magistrada de la Audiencia Nacional (1996–2004) y del Tribunal Supremo (2004–2016).', 'roblesCV'],
    cargos: ['Ministra de Defensa desde junio de 2018. Fue secretaria de Estado de Interior, diputada en el Congreso y vocal del Consejo General del Poder Judicial.', 'roblesCV'],
  },
  'FA|Madrid|Emilio Delgado Orgaz': {
    nacimiento: ['Madrid · 28/07/1976 · 50 años el 29N', 'delgadoCV'],
    bio: ['Técnico superior en Actividades Físicas y Deportivas y en Integración Social.', 'delgadoCV'],
    experiencia: ['Educador en Opción 3 (seis años) y en Progestión (año y medio). Técnico de Educación en el Ayuntamiento de Humanes de Madrid (tres años).', 'delgadoCV'],
    cargos: ['Diputado en la Asamblea de Madrid durante las legislaturas X a XIII. Su ficha recoge su función de portavoz adjunto del grupo Más Madrid.', 'delgadoCV'],
  },
  'PP|Madrid|Borja Sémper Pascual': {
    bio: ['Licenciado en Derecho por la Universidad del País Vasco.', 'semperRTVE'],
    afiliacion: ['Militante del PP desde los 17 años, según RTVE. Su salida de la actividad política se anunció en 2020.', 'semperRTVE'],
    experiencia: ['EY anunció su incorporación como director de Relaciones Institucionales en febrero de 2020.', 'semperRTVE'],
  },
  'ERC|Barcelona|Gabriel Rufián Romero': {
    bio: ['Diplomado en Relaciones Laborales y máster en Dirección de Recursos Humanos por la Universitat Pompeu Fabra.', 'rufian2015'],
    afiliacion: ['Encabezó la lista de ERC al Congreso en 2015 como independiente. La fuente documenta su candidatura.', 'rufian2015'],
    experiencia: ['Trabajó en relaciones laborales y en selección de personal, según el perfil difundido por ERC.', 'rufianExperiencia'],
    cargos: ['Diputado y portavoz de ERC en el Congreso.', 'rufianCV'],
  },
  'JXCAT|Barcelona|Míriam Nogueras i Camero': {
    nacimiento: ['Dosrius (Maresme) · 11/05/1980 · 46 años el 29N', 'noguerasCV'],
    experiencia: ['Actividad empresarial en el sector textil, especializada en hilaturas. Participó en las juntas de ASECIEMA y MODACC.', 'noguerasCV'],
    cargos: ['Diputada en las legislaturas XI a XV y concejala de Cardedeu entre 2015 y 2017.', 'noguerasCV'],
    empresas: ['Su ficha de la XIII legislatura la identifica como copropietaria de una empresa de hilaturas.', 'noguerasCV', '2019'],
  },
  'COMUNS-FRONT AMPLI|Barcelona|Ada Colau Ballano': {
    bio: ['Cursó estudios en la Facultad de Filosofía de la Universidad de Barcelona e hizo una estancia Erasmus en Milán.', 'colauCV'],
    experiencia: ['Trabajó en comunicación, producción audiovisual, traducción e interpretación. En el Observatorio DESC fue técnica de cooperación y responsable del área de vivienda y ciudad.', 'colauCV'],
    cargos: ['Impulsó la Plataforma de Afectados por la Hipoteca en 2009 y fue su portavoz hasta 2014. Encabezó la candidatura municipal de Barcelona en Comú y fue alcaldesa de Barcelona.', 'colauCV'],
  },
  'ALHORA|Barcelona|Jordi Graupera i Garcia Milà': {
    afiliacion: ['Miembro de la dirección elegida en el congreso fundacional de Alhora de 2024.', 'alhoraFundacionCV'],
    experiencia: ['Profesor universitario, según su perfil público en Alhora.', 'alhoraGraupera'],
    cargos: ['Presidente de Alhora, según la composición publicada de su ejecutiva.', 'alhoraEjecutivaCV'],
  },
  'ALHORA|Girona|Júlia Ojeda Caba': {
    bio: ['Doctora en Literatura Catalana.', 'alhoraOjeda'],
    afiliacion: ['Miembro de la dirección elegida en el congreso fundacional de Alhora de 2024.', 'alhoraFundacionCV'],
    experiencia: ['Profesora e investigadora en la Universitat Oberta de Catalunya y crítica literaria.', 'alhoraOjeda'],
    cargos: ['Vicepresidenta de Alhora.', 'alhoraEjecutivaCV'],
  },
  'ALHORA|Lleida|Cristina Casol Segués': {
    bio: ['Arquitecta por la Escola Tècnica Superior d’Arquitectura de Barcelona de la Universitat Politècnica de Catalunya.', 'casolCV'],
    experiencia: ['Ejerció por cuenta propia con despacho de arquitectura y urbanismo en Lleida. Fue responsable de obras y urbanismo en administraciones locales y comarcales, la Diputación de Lleida y el Conselh Generau d’Aran.', 'casolCV'],
    cargos: ['Diputada del Parlament de Catalunya en la legislatura 2021–2024.', 'casolCV'],
  },
  'EH BILDU|Álava|Mikel Otero Gabirondo': {
    bio: ['Estudios de Filosofía e Historia.', 'bilduVascoCV'],
    cargos: ['Parlamentario vasco desde 2015 según la ficha electoral publicada en 2020.', 'bilduVascoCV'],
  },
  'BNG|A Coruña|Néstor Rego Candamil': {
    nacimiento: ['02/04/1962 · 64 años el 29N', 'regoCV'],
    bio: ['Licenciado en Geografía e Historia.', 'regoCV'],
    experiencia: ['Profesor de Lengua y Literatura Gallegas en secundaria en la Xunta de Galicia.', 'regoIntereses'],
    cargos: ['Diputado en el Congreso en las legislaturas XIV y XV.', 'regoCV'],
  },
  'TERUEL EXISTE|Teruel|Tomás Guitarte Gimeno': {
    experiencia: ['Arquitecto según su ficha parlamentaria.', 'guitartCV'],
    cargos: ['Diputado en el Congreso durante la XIV legislatura.', 'guitartCV'],
  },
};

Object.assign(fuentes, {
  mjRomero: ['Por Un Mundo Más Justo · Perfil de José Manuel Romero', 'https://www.porunmundomasjusto.es/jose-manuel-romero-melero-candidato-de-por-un-mundo-mas-justo-a-la-presidencia-del-gobierno-2/'],
  mjRomeroPrimarias: ['Por Un Mundo Más Justo · Carta a las primarias de José Manuel Romero', 'https://www.porunmundomasjusto.es/wp-content/uploads/2026/10/JoseManuelRomero.pdf'],
  miryanCNMV: ['CNMV · Informe de gobierno corporativo con perfil de Miryan González', 'https://www.cnmv.es/webservices/verdocumento/ver?e=IpbH9BT47rOwX6Je%2FjLT5AogVvDeeMFxKxLJ%2FUnEcjW%2FYgghWEpcfSlLCnf4KP2q'],
  miryanD21: ['Artículo 14 · Fundación de Democracia 21 y candidatura por Madrid', 'https://www.articulo14.es/politica/democracia-21-quien-es-miriam-gonzalez-y-con-que-partidos-concurre-al-29n-20261107.html'],
  davidD21: ['Política Electoral · Trayectoria de David Andrés según el comunicado de la formación', 'https://www.politicaelectoral.com/es/espana/politicos/david-andres-diaz'],
  davidCs: ['Ara · Cargos de David Andrés en Ciudadanos', 'https://es.ara.cat/politica/ciudadanos-desentiende-29-n-pesar-formar-parte-candidatura_1_5910270.html'],
  chirivellaCV: ['Agenda Valenciana · Currículum de José Ramón Chirivella', 'https://www.agendavalenciana.org/candidato-jose-ramon-chirivella.html'],
  luisPardoCV: ['Iustitia Europa · Presidencia y dirección jurídica', 'https://iustitiaeuropa.es/es/la-audiencia-provincial-condena-david-sanchez-miguel-angel'],
  luisPardoHistorial: ['Antes de Votar · Perfil de Luis María Pardo', 'https://www.antesdevotar.org/candidato/luis-maria-pardo-rodriguez/'],
  sanMartinCV: ['UPN · Formación y trayectoria profesional', 'https://www.upn.org/cargos-publicos/'],
  sanMartinParlamento: ['Parlamento de Navarra · Memoria de actividad 2023–2024', 'https://parlamentodenavarra.es/sites/default/files/memorias-actividad/MEMO2324.pdf'],
  dragoRodriguezCV: ['Congreso · Ficha parlamentaria de Alberto Rodríguez', 'https://www.congreso.es/eu/busqueda-de-diputados?_diputadomodule_mostrarFicha=true&codParlamentario=78&idLegislatura=XI'],
  dragoRodriguezTrabajo: ['Congreso · Registro de actividades y empleo en CEPSA', 'https://www.congreso.es/backoffice_doc/prensa/notas_prensa/52878_1498729702557.pdf'],
  dragoOrganigrama: ['Drago Canarias · Organigrama aprobado por la asamblea', 'https://www.dragocanarias.com/wp-content/uploads/2024/10/Organigrama_votado_por_la_Asamblea_y_funciones_Drago_Canarias.pdf'],
  libCV: ['Liberación Canaria · Presentación de la trayectoria de sus candidatos', 'https://liberacioncanaria.org/ya-esta-aqui-la-candidatura-de-liberacion-canaria/'],
  soriaCV: ['Soria ¡YA! · Presentación de las candidaturas del 29N', 'https://soriaya.org/soria-ya-presenta-su-candidatura-ciudadana-para-llevar-una-voz-soriana-util-y-sin-tutelas-al-congreso-y-al-senado-el-29n/'],
  soriaPalomar: ['Soria ¡YA! · Organigrama y empleo en Sacyl', 'https://soriaya.org/organigrama-coordinadora-ejecutiva/'],
  semperEY: ['EY · Incorporación de Borja Sémper en enero de 2020', 'https://www.ey.com/es_es/newsroom/2020/01/borja-semper-se-incorpora-a-ey-como-director-de-relaciones-institucionales'],
  semperEY2022: ['EY · Borja Sémper como director en marzo de 2022', 'https://www.ey.com/es_es/newsroom/2022/03/ey-crea-una-academia-de-oradores'],
  pfacOjeda: ['Feministas al Congreso · Comisión Ejecutiva y biografía', 'https://www.feministasalcongreso.es/comision-ejecutiva/'],
  pfacHistoriaCV: ['Feministas al Congreso · Historia y elección de la ejecutiva', 'https://www.feministasalcongreso.es/conocenos/'],
  autonomosLydia: ['Partido Autónomos · Perfil electoral de Lydia Cañedo', 'https://www.partidoautonomos.es/elecciones-generales-2023/'],
  autonomosCEC: ['Partido Autónomos · Comité Ejecutivo Central', 'https://www.partidoautonomos.es/nuevo-comite-ejecutivo-central-2025/'],
  terceraDiaz: ['Tercera Edad en Acción · Constitución de la gestora nacional', 'https://3edad.org/cambio-de-liderazgo-en-el-partido-tercera-edad-en-accion-se-conforma-nueva-comision-gestora-nacional/'],
  azconaParlamento: ['Parlamento de Navarra · Ficha de Pablo Azcona', 'https://parlamentodenavarra.es/es/persona/azcona-molinet-pablo'],
});

Object.assign(trayectorias, {
  'MUNDO+JUSTO|Madrid|José Manuel Romero Melero': {
    bio: ['Abogado. Su perfil recoge estudios de Teología y especialización en gestión de entidades financieras y Derecho Fiscal.', 'mjRomero'],
    afiliacion: ['En octubre de 2026 declaró cinco años como militante y más de quince años vinculado al partido.', 'mjRomeroPrimarias'],
    experiencia: ['Ejerció la abogacía en los sectores financiero, inmobiliario, del espectáculo y aeronáutico. Su biografía también recoge más de 22 años de actividad sindical y experiencia como guía de montaña y auxiliar sanitario.', 'mjRomero'],
  },
  'D21|Madrid|Miryan Mercedes González Durántez': {
    bio: ['Licenciada en Derecho por la Universidad de Valladolid y máster en Política Europea por el Colegio de Brujas.', 'miryanCNMV'],
    afiliacion: ['Fundadora de Democracia 21, cuya actividad pública arrancó en 2026.', 'miryanD21'],
    experiencia: ['Abogada especializada en comercio internacional. Fue negociadora comercial para la Unión Europea y trabajó en el ámbito de las relaciones internacionales en la Comisión Europea.', 'miryanCNMV'],
    empresas: ['Vicepresidenta del consejo supervisor de UBS Europe SE (2019–2021) y presidenta de comisiones de auditoría en UBS. Su perfil figura en las cuentas de Atrys Health como consejera.', 'miryanCNMV'],
  },
  'D21|Barcelona|David Andrés Díaz': {
    afiliacion: ['Fue candidato de Ciudadanos al Parlament de Catalunya en 2024. Fue nombrado responsable de comunicación de Ciudadanos en Cataluña en junio de 2025.', 'davidCs'],
    experiencia: ['Consultor. Trabajó en Deloitte, según el comunicado de Democracia 21 recogido por la prensa.', 'davidD21'],
    empresas: ['Fundó una empresa de asesoramiento a startups, según el comunicado de Democracia 21 recogido por la prensa.', 'davidD21'],
  },
  'AGENDA VALENCIANA|Valencia|José Ramón Chirivella Vila': {
    nacimiento: ['Valencia · 1965', 'chirivellaCV'],
    bio: ['Licenciado en Derecho por la Universitat de València y estudios de posgrado en Derecho de los Mercados Financieros (ICADE) y dirección de entidades financieras (IEB).', 'chirivellaCV'],
    experiencia: ['Abogado ejerciente en Valencia y directivo en el sector financiero, entre otras entidades en Bankia.', 'chirivellaCV'],
    cargos: ['Expresidente de la Associació de Juristes Valencians.', 'chirivellaCV'],
  },
  'IE|Madrid|Luis María Pardo Rodríguez': {
    bio: ['Graduado en Derecho por la UNED, según el perfil de Antes de Votar.', 'luisPardoHistorial'],
    experiencia: ['Abogado. Su perfil publicado por Antes de Votar recoge experiencia anterior como taxista y guardia civil en excedencia.', 'luisPardoCV', null, 'luisPardoHistorial'],
    cargos: ['Presidente de Iustitia Europa y director de su equipo jurídico.', 'luisPardoCV'],
  },
  'UPN-PP|Navarra|Leticia San Martín Rodríguez (UPN)': {
    nacimiento: ['Vitoria · 23/02/1975 · 51 años el 29N', 'sanMartinParlamento'],
    bio: ['Diplomada en Enfermería por la Universidad de Navarra. Máster en Gestión Sanitaria y doctora por la Universidad de Montreal.', 'sanMartinCV'],
    experiencia: ['Seis años como enfermera asistencial y nueve en puestos de gestión en la Clínica Universidad de Navarra. Docente e investigadora en Ciencias de la Salud en la Universidad Pública de Navarra.', 'sanMartinCV'],
    cargos: ['Parlamentaria foral de UPN en Navarra.', 'sanMartinParlamento'],
  },
  'D.R.G|Santa Cruz De Tenerife|Alberto Rodríguez Rodríguez': {
    nacimiento: ['11/12/1981 · 44 años el 29N', 'dragoRodriguezCV'],
    bio: ['Técnico superior en Química Ambiental.', 'dragoRodriguezCV'],
    experiencia: ['Obrero industrial y operador de refinería de petróleo de CEPSA.', 'dragoRodriguezTrabajo'],
    cargos: ['Diputado en las legislaturas XI a XIV. El organigrama de Drago Canarias lo recoge como presidente en 2024.', 'dragoRodriguezCV', null, 'dragoOrganigrama'],
  },
  'LIB|Las Palmas|Daniel Falero Mesa': {
    experiencia: ['Maestro de Primaria en la escuela pública canaria. La memoria de campaña recoge nueve años de docencia y coordinación de patrimonio en su centro escolar.', 'libCV', '2026'],
    cargos: ['Portavoz de Liberación Canaria.', 'libCV'],
  },
  'LIB|Santa Cruz De Tenerife|Angélica María Calero Armas': {
    nacimiento: ['La Palma', 'libCV'],
    experiencia: ['Trabaja en el Servicio Canario de la Salud, según su perfil electoral.', 'libCV'],
    cargos: ['Impulsó una plataforma para reabrir la residencia de Frontera y participó en Agua para La Palma.', 'libCV'],
  },
  'SY|Soria|Juan Antonio Palomar Sicilia': {
    afiliacion: ['Integrado en la plataforma Soria ¡YA! desde finales de 2017. Presidía el partido desde hacía unos cuatro años según la candidatura de 2026.', 'soriaCV'],
    experiencia: ['Técnico de Emergencias Sanitarias en el servicio de salud de Castilla y León, Sacyl.', 'soriaPalomar'],
    cargos: ['Presidente de Soria ¡YA! y procurador en las Cortes de Castilla y León en la XI legislatura autonómica.', 'soriaPalomar'],
  },
  'SY|Soria|Rosalía Peña Gallego': {
    bio: ['Licenciada en Ciencias Ambientales por la Universidad de Alcalá. Su perfil recoge estudios de posgrado en restauración de ecosistemas, información geográfica, sostenibilidad y comunicación política.', 'soriaCV'],
    cargos: ['Coordinadora de gabinete y comunicación de Soria ¡YA! y asesora en las Cortes de Castilla y León, según su perfil de 2026.', 'soriaCV'],
  },
  'SY|Soria|Joel Martínez Moreno': {
    bio: ['Licenciado en Ciencias de la Actividad Física y del Deporte.', 'soriaCV'],
    experiencia: ['Funcionario de carrera y docente en el ámbito de la actividad física y deportiva en Formación Profesional en Soria.', 'soriaCV'],
  },
  'PFAC|Álava|Zuriñe Ojeda Santiago': {
    nacimiento: ['Bilbao, según su perfil en el partido.', 'pfacOjeda'],
    bio: ['Ingeniera técnica de Minas.', 'pfacOjeda'],
    cargos: ['Elegida vicepresidenta de Feministas al Congreso en octubre de 2024.', 'pfacHistoriaCV'],
  },
  'PARTIDO AUTÓNOMOS|Alicante|Lydia Cañedo Oliver': {
    experiencia: ['Regenta el negocio familiar como autónoma, según su ficha electoral de 2023.', 'autonomosLydia'],
    empresas: ['Responsable de un negocio abierto por su madre, según el perfil publicado por el partido.', 'autonomosLydia'],
    cargos: ['Coordinadora de Expansión del Comité Ejecutivo Central de Partido Autónomos.', 'autonomosCEC'],
  },
  '3E|Murcia|Domingo Díaz Carrillo': {
    cargos: ['Presidente de la Comisión Gestora Nacional de Tercera Edad en Acción.', 'terceraDiaz'],
  },
  'GBAI|Navarra|Pablo Azcona Molinet (GEROA BAI)': {
    cargos: ['Alcalde de Lodosa de 2011 a 2021 y parlamentario foral de Navarra por Geroa Bai.', 'azconaParlamento'],
  },
});

trayectorias['PP|Madrid|Borja Sémper Pascual'].experiencia = [
  'Director de Relaciones Institucionales en EY. La empresa anunció la incorporación para febrero de 2020 y lo identificaba en el puesto en marzo de 2022.',
  'semperEY', null, 'semperEY2022',
];

Object.assign(fuentes, {
  phCedena: ['Partido Humanista Internacional · Trayectoria de José Luis Álvarez Cedena', 'https://www.internationalhumanistparty.org/es/content/jose-luis-alvarez-cedena-0'],
  phCedenaPrensa: ['Caimán Cuadernos de Cine · Entrevista firmada por José Luis Álvarez Cedena', 'https://www.caimanediciones.es/thomas-cailley-entrevista/'],
  eguzkiloreCuevas: ['Naiz · Artículo firmado por Francisco Javier Pérez Cueva', 'https://www.naiz.eus/en/iritzia/articulos/dia-internacional-de-la-infancia'],
  prepalActas: ['Instituto de Estudios Históricos de La Mancha · Actas del congreso de 2022', 'https://iehcam.com/wp-content/uploads/2024/10/libro-de-actas-i-congreso-de-la-mancha-2022-iehcam.pdf'],
  nexCaceresBadajoz: ['Extremadura 7 Días · Perfiles de la candidatura de Nuevo Extremeñismo 29N', 'https://fmcour8m1fr530hw.extremadura7dias.com/noticia/nuevo-extremenismo-sera-la-unica-candidatura-extremena-en-las-elecciones-generales'],
  vlcOrganizacion: ['Valencia Unida · Órgano de gobierno provisional', 'https://valenciaunida.es/organizacion/'],
  vlcPresidencia: ['Valencia Unida · Presidencia de Vicente González-Lizondo', 'https://valenciaunida.es/'],
  pcpcCandidaturas: ['Junta Electoral Central · Candidaturas autonómicas de 2019', 'https://www.juntaelectoralcentral.es/cs/jec/documentos/CANARIAS_2019_candidaturas%20proclamadas_JEP%20Las%20Palmas.pdf'],
  gomilaERC: ['ERC · Ficha de Carme Gomila', 'https://www.esquerra.cat/qui-som/carme-gomila-dominguez/'],
  gomilaManacor: ['Ayuntamiento de Manacor · Renuncia de Carme Gomila', 'https://manacor.org/ca/noticies/lajuntament-de-manacor-ratifica-la-renuncia-voluntaria-de-la-regidora-carme-gomila'],
  parraCHA: ['El Cruzado · Elección de la presidencia comarcal de CHA', 'https://www.elcruzado.es/jose-luis-parra-pascau-nuevo-presidente-de-cha-somontano/'],
  parraEscuela: ['CRA Vero Alcanadre · Organigrama del centro', 'https://cra-veroalcanadre.com/wp-content/uploads/2025/09/Organigrama-del-centro.pdf'],
  ibanezVillava: ['Ayuntamiento de Villava · Memoria del servicio de Cultura 2024', 'https://www.villava.es/wp-content/uploads/2025/06/KULTURA-VILLAVA-ATARRABIA-2024_compressed.pdf'],
  ibanezIU: ['Izquierda Unida · Candidaturas autonómicas 2023', 'https://izquierdaunida.org/listado-autonomicas-28m/'],
  abascalRTVE: ['RTVE · Trayectoria política de Santiago Abascal', 'https://www.rtve.es/noticias/20230706/santiago-abascal-vox-elecciones-generales/2450913.shtml'],
  cayetanaPino: ['Fundación Rafael del Pino · Biografía de Cayetana Álvarez de Toledo', 'https://frdelpino.es/conferencia/una-mirada-optimista-sobre-espana-y-los-espanoles/'],
  camposParlamento: ['Parlamento de Canarias · Currículum de Luis Campos', 'https://www.parcan.es/composicion/diputados/diputado/11023/biografia/'],
  teodoroGaldar: ['Ayuntamiento de Gáldar · Biografía de Teodoro Sosa', 'https://www.galdar.es/biografia-teodoro-sosa-monzon/'],
  evaPCTE: ['PCTE · Acto de campaña con Eva García de Madariaga', 'https://www.pcte.es/el-partido-en-los-medios/sevilla-acoge-a-astor-garcia-cabeza-de-lista-del-pcte-para-este-23j/'],
  urtaranVitoria: ['Ayuntamiento de Vitoria-Gasteiz · Registro de actividades 2015', 'https://www.vitoria-gasteiz.org/docs/wb021/contenidosEstaticos/adjuntos/es/24/90/62490.pdf'],
  lucaUNIR: ['UNIR · Biografía docente de Luca Moratal Roméu', 'https://www.unir.net/profesores/luca-moratal-romeu/'],
  yolandaSALF: ['Política Electoral · Trayectoria de Yolanda López en SALF', 'https://www.politicaelectoral.com/es/espana/politicos/yolanda-lopez-carreno'],
  mariaSanchezEntrevista: ['Diario de Cádiz · Entrevista a María Sánchez Barrada', 'https://www.diariodecadiz.es/cadiz/maria-sanchez-adelante-si-consideran_0_2007934849.html'],
  herreroUCM: ['Universidad Complutense · Perfil de Rubén Herrero de Castro', 'https://produccioncientifica.ucm.es/investigadores/142426/detalle?lang=es'],
});

Object.assign(trayectorias, {
  'PH|Madrid|José Luis Álvarez Cedena': {
    afiliacion: ['Participa en el Partido Humanista desde 1992, según su declaración pública de 2022.', 'phCedena'],
    experiencia: ['Autor de entrevistas de cine en Caimán Cuadernos de Cine.', 'phCedenaPrensa'],
    cargos: ['En 2022 declaró haber formado parte del Equipo de Coordinación Internacional del Partido Humanista en los cuatro años anteriores.', 'phCedena'],
  },
  'EGUZKILORE|Navarra|Francisco Javier Pérez Cueva': {
    experiencia: ['Psicomotricista, según su artículo firmado sobre el Día Internacional de la Infancia.', 'eguzkiloreCuevas'],
    cargos: ['Coordinador de Eguzkilore.', 'eguzkiloreCuevas'],
  },
  'PREPAL|Zamora|Francisco Iglesias Carreño': {
    afiliacion: ['Primer secretario general del PREPAL, formado en 1980, según las actas del congreso del IEHCAM.', 'prepalActas'],
    experiencia: ['Fue profesor de Física en el Instituto Claudio Moyano de Zamora.', 'prepalActas'],
    cargos: ['Fue secretario general y posteriormente presidente del Partido Regionalista del País Leonés.', 'prepalActas'],
  },
  'NEX|Cáceres|Ángel Andreo García': {
    bio: ['Estudiante de Derecho en noviembre de 2026.', 'nexCaceresBadajoz'],
    cargos: ['Secretario general de Nuevo Extremeñismo según la presentación de la candidatura publicada por Extremadura 7 Días.', 'nexCaceresBadajoz'],
  },
  'NEX|Badajoz|Víctor Ramos Sánchez': {
    bio: ['Lingüista, natural de Aceuchal, según la presentación de la candidatura del 29N publicada por Extremadura 7 Días.', 'nexCaceresBadajoz'],
  },
  'VLC|Valencia|Vicente González-Lizondo Sánchez': {
    afiliacion: ['Uno de los promotores de Valencia Unida. Integró su órgano provisional antes del congreso de 2021.', 'vlcOrganizacion', null, 'vlcPresidencia'],
    cargos: ['Presidente de Valencia Unida según el sitio de la formación.', 'vlcPresidencia'],
  },
  'PCPC|Las Palmas|Sonia María Iruela Padrón': {
    afiliacion: ['Consta en una candidatura del PCPC en la proclamación oficial de las elecciones autonómicas canarias de 2019.', 'pcpcCandidaturas'],
  },
  'ARAMÉS-EU-MS|Illes Balears|Carme Gomila Domínguez (ARAMÉS-EU-MS)': {
    nacimiento: ['Manacor · 10/08/1994 · 32 años el 29N', 'gomilaERC'],
    bio: ['Graduada en Ciencias Políticas y de la Administración (UPF), con máster en Comunicación Política y Social (Blanquerna).', 'gomilaERC'],
    cargos: ['Presidenta de ERC en las Illes Balears y Pitiüses. Fue concejala y teniente de alcalde en Manacor hasta su renuncia en 2026.', 'gomilaERC', null, 'gomilaManacor'],
  },
  'CHA-IU-MS-FRENTE AMPLIO|Huesca|José Luis Parra Pascau (CHA)': {
    experiencia: ['Docente en el Colegio Rural Agrupado Vero Alcanadre, donde consta como especialista en Pedagogía Terapéutica y coordinador de tercer ciclo.', 'parraEscuela', 'curso 2025–2026'],
    afiliacion: ['Elegido presidente comarcal de CHA en Somontano en 2023.', 'parraCHA'],
    cargos: ['Presidente de la agrupación comarcal de CHA en Somontano según la elección de 2023.', 'parraCHA'],
  },
  'FRENTE AMPLIO-FRONTE ZABALA|Navarra|Javier Ibáñez Orayen': {
    afiliacion: ['Figuró como candidato de Izquierda Unida en una lista de coalición para el Parlamento de Navarra en 2023.', 'ibanezIU'],
    cargos: ['Vocal de la Comisión de Cultura de Villava, según su memoria de 2024.', 'ibanezVillava'],
  },
  'VOX|Madrid|Santiago Abascal Conde': {
    afiliacion: ['Uno de los impulsores de Vox en enero de 2014. Antes militó en el Partido Popular.', 'abascalRTVE'],
  },
  'PP|Madrid|Cayetana Álvarez de Toledo Peralta Ramos': {
    experiencia: ['Redactora en la sección de Opinión de El Mundo tras completar el doctorado en Oxford.', 'cayetanaPino'],
  },
  'NC-BC, PODEMOS, IU, SUMAR|Las Palmas|Luis Alberto Campos Jiménez': {
    bio: ['Técnico especialista en Comercio Exterior y graduado en Comunicación.', 'camposParlamento'],
    experiencia: ['Su currículum recoge empleos como auxiliar de juego, técnico de juego, administrativo y asesor contable.', 'camposParlamento'],
    cargos: ['Concejal durante doce años en Santa Lucía y primer teniente de alcalde. Diputado en el Parlamento de Canarias desde 2015 según su ficha institucional.', 'camposParlamento'],
  },
  'CCA-1.ºCAN|Las Palmas|Teodoro Claret Sosa Monzón': {
    nacimiento: ['Gáldar · 24/10/1975 · 51 años el 29N', 'teodoroGaldar'],
    bio: ['Ingeniero técnico de Obras Públicas por la ULPGC y graduado en Ingeniería Civil por la UCAM.', 'teodoroGaldar'],
    afiliacion: ['Fundador del Bloque Nacionalista Rural en Gáldar. Fue elegido concejal por primera vez en 2003.', 'teodoroGaldar'],
    experiencia: ['Jefe de obra en Ginés Navarro, ACS y Probisa desde 1997 y jefe de grupo de la constructora Joca desde 2004, según su biografía municipal.', 'teodoroGaldar'],
    cargos: ['Alcalde de Gáldar desde 2007. Ha ocupado la vicepresidencia segunda del Cabildo de Gran Canaria.', 'teodoroGaldar'],
  },
  'PCTE|Madrid|Eva García de Madariaga Delgado': {
    afiliacion: ['Ya participó en la candidatura del PCTE al Congreso en 2023.', 'evaPCTE'],
    cargos: ['Secretaria general del Colectivo de Jóvenes Comunistas según el PCTE en 2023.', 'evaPCTE'],
  },
  'EAJ-PNV|Álava|Gorka Urtaran Agirre': {
    experiencia: ['Sociólogo del Ayuntamiento de Vitoria-Gasteiz según su registro de actividades de 2015.', 'urtaranVitoria'],
    cargos: ['Alcalde de Vitoria-Gasteiz durante el mandato iniciado en 2015.', 'urtaranVitoria'],
  },
  'SALF|Madrid|Luca Moratal Romeu': {
    bio: ['Doctor en Derecho por la Universidad Complutense de Madrid.', 'lucaUNIR'],
    experiencia: ['Profesor de teoría del Derecho e historia de la cultura jurídica en la UNIR. Ha impartido docencia jurídica en otras universidades.', 'lucaUNIR'],
  },
  'SALF|Barcelona|Yolanda López Carreño': {
    cargos: ['Integrante del comité ejecutivo nacional y enlace de SALF en Cataluña, según el perfil publicado en Política Electoral.', 'yolandaSALF'],
  },
  'ADELANTE ANDALUCÍA|Cádiz|María Sánchez Barrada': {
    nacimiento: ['Cádiz · agosto de 1985 · 41 años el 29N', 'mariaSanchezEntrevista'],
    bio: ['Ingeniera industrial.', 'mariaSanchezEntrevista'],
    experiencia: ['Ingeniera de calidad en Dragados Offshore (Puerto Real) según entrevista de septiembre de 2026.', 'mariaSanchezEntrevista'],
    cargos: ['Coportavoz de la asamblea local de Adelante Andalucía en Cádiz en septiembre de 2026.', 'mariaSanchezEntrevista'],
  },
  'VOX|Albacete|Rubén Herrero de Castro': {
    bio: ['Doctor por la Universidad Complutense de Madrid.', 'herreroUCM'],
    experiencia: ['Profesor contratado doctor en la Universidad Complutense de Madrid.', 'herreroUCM'],
  },
});

trayectorias['PFAC|Álava|Zuriñe Ojeda Santiago'].experiencia = [
  'Articulista y editora del diario El Común. Cofundó la asociación Gafas Moradas.',
  'pfacOjeda',
];

Object.assign(fuentes, {
  delgadoTranscripcion: ['Carreteras y hospitales · Transcripción de la declaración de 2023', 'https://www.carreterasyhospitales.com/patrimonio/emilio-delgado/'],
  teresaPerezCV: ['Portal de la Transparencia · Currículum de María Teresa Pérez', 'https://transparencia.gob.es/servicios-buscador/contenido/curriculums.htm?fcAct=Tue+May+25+13%3A48%3A44+CEST+2021&id=CV_8982&lang=eu'],
  lizarralde2023: ['Junta Electoral Central · Candidaturas a las Juntas Generales de Gipuzkoa de 2023', 'https://www.juntaelectoralcentral.es/cs/jec/documentos/JG%20gipuzkoa%20candidaturas%20proclamadas%20JEZ%20San%20Sebastian.pdf'],
  zapico2023: ['Interior · Papeletas a las elecciones generales de 2023 por Asturias', 'https://elecciones.generales23j.es/pdf/papeletas-descargables-cera/congreso/asturias-congreso.pdf'],
  picoFalange: ['Falange Española de las JONS · Boletín de noviembre de 2019', 'https://falange.es/wp-content/uploads/2019/11/ENMARCHA-29-2.pdf'],
  pctc2023: ['BOE · Candidaturas de las elecciones generales de 2023', 'https://www.boe.es/boe/dias/2023/06/27/pdfs/BOE-A-2023-15066.pdf'],
  pineiroCargos: ['Ayuntamiento de A Pobra do Caramiñal · Concejalías 2019–2023', 'https://apobra.gal/es/concejalias/'],
  pineiroTrabajo: ['Adiante Galicia · Perfil profesional al anunciarse la candidatura', 'https://www.adiantegalicia.es/eleccions-2027/2026/10/26/xose-lois-pineiro-encabezara-a-lista-da-fronte-ampla-na-provincia-da-coruna.html'],
  escolanAutor: ['Google Play Libros · Biografía editorial de Amadeo Escolán', 'https://play.google.com/store/info/name/Amadeo_Escol%C3%A1n_Remart%C3%ADnez?id=11s4w98ftl'],
  escolan2023: ['Junta Electoral Central · Candidaturas de las elecciones de Aragón de 2023', 'https://www.juntaelectoralcentral.es/cs/jec/documentos/ARAG%C3%93N_2023_Candidatura_Proclamada_Zaragoza.pdf'],
  alantreChechu: ['Heraldo de León · Presentación del secretario general de Alantre', 'https://www.heraldodeleon.es/leon/conceyu-alantre-decimos-alto-claro-es-hora-leon-ahora-toca/20261106143500116598.html'],
  guzman2026: ['Junta Electoral Central · Candidaturas proclamadas en Andalucía en mayo de 2026', 'https://www.juntaelectoralcentral.es/cs/jec/documentos/andalucia_2026_candidaturas_proclamadas.pdf'],
});

Object.assign(trayectorias, {
  'COMPROMIS-EUPV-PODEM-ERPV|Alicante|María Teresa Pérez Díaz': {
    nacimiento: ['Petrer (Alicante) · 1993', 'teresaPerezCV'],
    bio: ['Graduada en Periodismo por la Universidad Carlos III. Cursó estudios de máster en Política Mediática en la Universidad Complutense y en Reporterismo de Televisión en la Universidad Rey Juan Carlos.', 'teresaPerezCV'],
    experiencia: ['Redactora en EFE TV y en Europa Press. Organizó actividades deportivas, culturales y de ocio en la Fundación Universidad Carlos III.', 'teresaPerezCV'],
    cargos: ['Diputada de Unidas Podemos en la XIII legislatura y directora general del Instituto de la Juventud.', 'teresaPerezCV'],
  },
  'ESCAÑOS EN BLANCO|Gipuzkoa|Daniel Lizarralde Aguirre': {
    afiliacion: ['Figuró por Escaños en Blanco–Aulki Zuriak en las listas oficiales de las Juntas Generales de Gipuzkoa de 2023.', 'lizarralde2023'],
  },
  'PUEDE|Asturias|José Luis Zapico Martínez': {
    afiliacion: ['Encabezó también la candidatura de Partido Unionista Estado de España en Asturias en las elecciones generales de 2023.', 'zapico2023'],
  },
  'FE DE LAS JONS|Madrid|Norberto Pedro Pico Sanabria': {
    cargos: ['Fue reelegido jefe nacional de Falange Española de las JONS en 2019, según el boletín de la formación.', 'picoFalange'],
  },
  'PCTC|Barcelona|Maria Rodríguez-Farge Hijano': {
    afiliacion: ['Figuró en la candidatura del PCTC al Congreso por Barcelona en 2023.', 'pctc2023'],
  },
  'FRENTE AMPLIO-FRONTE AMPLA|A Coruña|José Luis Piñeiro García (Xosé Lois)': {
    experiencia: ['Profesor de Ciencias en la escuela pública, según el perfil publicado al anunciar su candidatura.', 'pineiroTrabajo'],
    cargos: ['Alcalde de A Pobra do Caramiñal entre 2015 y 2023 y concejal de Urbanismo y Medio Ambiente, según su presentación de 2026.', 'pineiroCargos', null, 'pineiroTrabajo'],
  },
  'FIA|Zaragoza|Amadeo Escolán Remartínez': {
    nacimiento: ['Zaragoza · 17/03/1962 · 64 años el 29N', 'escolanAutor'],
    experiencia: ['Abogado y analista jurídico en los servicios jurídicos de Ibercaja. Fue responsable del área de herencias hasta prejubilarse en 2018, según su biografía editorial.', 'escolanAutor'],
    afiliacion: ['Ya figuró en la candidatura de FIA en las elecciones a las Cortes de Aragón de 2023.', 'escolan2023'],
  },
  'P. ALANTRE|León|José Antonio Fernández García': {
    cargos: ['Secretario general de Proyecto Alantre al presentarse la candidatura del 29N.', 'alantreChechu'],
  },
  '29|Málaga|Emilio Felipe Guzmán Jiménez (Independiente)': {
    afiliacion: ['Candidato independiente en las listas de Alternativa Malagueña en las elecciones andaluzas de mayo de 2026.', 'guzman2026'],
  },
});

trayectorias['FA|Madrid|Emilio Delgado Orgaz'].bienes = [
  'En el documento de 2023 figuran 15.770 € en cuentas corrientes y 49.406 € de salario neto del ejercicio anterior. En esa declaración no figuran inmuebles.',
  'delgadoBienes', '15/06/2023 · Asamblea de Madrid', 'delgadoTranscripcion',
];
