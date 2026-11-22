"use strict";

// Áreas revisadas frente al texto citado en cada ficha.
const trabajos29N = {
  "PSOE|Madrid|Félix Bolaños García": {
    "text": "Abogado en Uría Menéndez y profesor en IE Law School. En el Banco de España fue letrado asesor entre 2005 y 2008 y dirigió una división de asesoría jurídica entre 2008 y 2018.",
    "areas": [
      "Derecho y justicia",
      "Docencia e investigación"
    ]
  },
  "PP|Madrid|Cayetana Álvarez de Toledo Peralta Ramos": {
    "text": "Redactora en la sección de Opinión de El Mundo tras completar el doctorado en Oxford.",
    "areas": [
      "Comunicación y cultura"
    ]
  },
  "PSOE|Madrid|Pedro Sánchez Pérez-Castejón": {
    "text": "Profesor de Economía en la Universidad Camilo José Cela.",
    "areas": [
      "Docencia e investigación"
    ]
  },
  "SALF|Madrid|Luis Alvise Pérez Fernández": {
    "text": "Declaró actividad como creador de contenidos entre 2021 y julio de 2024 y consultoría autónoma en redes sociales y comunicación para empresas españolas del sector durante el mandato europeo.",
    "areas": [
      "Comunicación y cultura"
    ]
  },
  "SALF|Madrid|Luis de las Heras Vives": {
    "text": "Profesor de Derecho Penal en la UNIR desde 2021. Docente en la Universidad Villanueva (2023–2024), abogado penalista en IGH (2014–2018) y asistente de investigación en IESE (2013–2014).",
    "areas": [
      "Docencia e investigación",
      "Derecho y justicia"
    ]
  },
  "FO|Madrid|Roberto Vaquero Arribas": {
    "text": "Escritor de ensayo y narrativa, columnista en Zenda y colaborador en el programa de televisión Horizonte.",
    "areas": [
      "Comunicación y cultura"
    ]
  },
  "PODEMOS|Madrid|Irene Montero Gil": {
    "text": "Cajera en Saturn (2010–2011) y becaria del programa de Formación del Profesorado Universitario (2013–2015).",
    "areas": [
      "Comercio y atención al público",
      "Docencia e investigación"
    ]
  },
  "PACMA|Madrid|Asier Esparza Billalabeitia": {
    "text": "Empresario del sector de la imagen publicitaria.",
    "areas": [
      "Comunicación y cultura"
    ]
  },
  "PACMA|Madrid|Cristina García Salazar": {
    "text": "Abogada desde 2011, especializada en Derecho Animal.",
    "areas": [
      "Derecho y justicia"
    ]
  },
  "PSOE|Madrid|María Margarita Robles Fernández": {
    "text": "Jueza y magistrada en Balaguer, Sant Feliu de Llobregat y Bilbao. Presidió la Audiencia Provincial de Barcelona (1991–1993) y fue magistrada de la Audiencia Nacional (1996–2004) y del Tribunal Supremo (2004–2016).",
    "areas": [
      "Derecho y justicia"
    ]
  },
  "FA|Madrid|Emilio Delgado Orgaz": {
    "text": "Educador en Opción 3 (seis años) y en Progestión (año y medio). Técnico de Educación en el Ayuntamiento de Humanes de Madrid (tres años).",
    "areas": [
      "Docencia e investigación",
      "Servicios sociales y cooperación"
    ]
  },
  "PP|Madrid|Borja Sémper Pascual": {
    "text": "Director de Relaciones Institucionales en EY. La empresa anunció la incorporación para febrero de 2020 y lo identificaba en el puesto en marzo de 2022.",
    "areas": [
      "Gestión, consultoría y finanzas"
    ]
  },
  "ERC|Barcelona|Gabriel Rufián Romero": {
    "text": "Trabajó en relaciones laborales y en selección de personal, según el perfil difundido por ERC.",
    "areas": [
      "Gestión, consultoría y finanzas"
    ]
  },
  "JXCAT|Barcelona|Míriam Nogueras i Camero": {
    "text": "Actividad empresarial en el sector textil, especializada en hilaturas. Participó en las juntas de ASECIEMA y MODACC.",
    "areas": [
      "Industria y construcción"
    ]
  },
  "COMUNS-FRONT AMPLI|Barcelona|Ada Colau Ballano": {
    "text": "Trabajó en comunicación, producción audiovisual, traducción e interpretación. En el Observatorio DESC fue técnica de cooperación y responsable del área de vivienda y ciudad.",
    "areas": [
      "Comunicación y cultura",
      "Servicios sociales y cooperación"
    ]
  },
  "ALHORA|Barcelona|Jordi Graupera i Garcia Milà": {
    "text": "Profesor universitario, según su perfil público en Alhora.",
    "areas": [
      "Docencia e investigación"
    ]
  },
  "ALHORA|Girona|Júlia Ojeda Caba": {
    "text": "Profesora e investigadora en la Universitat Oberta de Catalunya y crítica literaria.",
    "areas": [
      "Docencia e investigación",
      "Comunicación y cultura"
    ]
  },
  "ALHORA|Lleida|Cristina Casol Segués": {
    "text": "Ejerció por cuenta propia con despacho de arquitectura y urbanismo en Lleida. Fue responsable de obras y urbanismo en administraciones locales y comarcales, la Diputación de Lleida y el Conselh Generau d’Aran.",
    "areas": [
      "Industria y construcción"
    ]
  },
  "BNG|A Coruña|Néstor Rego Candamil": {
    "text": "Profesor de Lengua y Literatura Gallegas en secundaria en la Xunta de Galicia.",
    "areas": [
      "Docencia e investigación"
    ]
  },
  "TERUEL EXISTE|Teruel|Tomás Guitarte Gimeno": {
    "text": "Arquitecto según su ficha parlamentaria.",
    "areas": [
      "Industria y construcción"
    ]
  },
  "MUNDO+JUSTO|Madrid|José Manuel Romero Melero": {
    "text": "Ejerció la abogacía en los sectores financiero, inmobiliario, del espectáculo y aeronáutico. Su biografía también recoge más de 22 años de actividad sindical y experiencia como guía de montaña y auxiliar sanitario.",
    "areas": [
      "Derecho y justicia",
      "Turismo y transporte",
      "Sanidad y cuidados"
    ]
  },
  "D21|Madrid|Miryan Mercedes González Durántez": {
    "text": "Abogada especializada en comercio internacional. Fue negociadora comercial para la Unión Europea y trabajó en el ámbito de las relaciones internacionales en la Comisión Europea.",
    "areas": [
      "Derecho y justicia",
      "Administración y organismos públicos"
    ]
  },
  "D21|Barcelona|David Andrés Díaz": {
    "text": "Consultor. Trabajó en Deloitte, según el comunicado de Democracia 21 recogido por la prensa.",
    "areas": [
      "Gestión, consultoría y finanzas"
    ]
  },
  "AGENDA VALENCIANA|Valencia|José Ramón Chirivella Vila": {
    "text": "Abogado ejerciente en Valencia y directivo en el sector financiero, entre otras entidades en Bankia.",
    "areas": [
      "Derecho y justicia",
      "Gestión, consultoría y finanzas"
    ]
  },
  "IE|Madrid|Luis María Pardo Rodríguez": {
    "text": "Abogado. Su perfil publicado por Antes de Votar recoge experiencia anterior como taxista y guardia civil en excedencia.",
    "areas": [
      "Derecho y justicia",
      "Turismo y transporte",
      "Seguridad"
    ]
  },
  "UPN-PP|Navarra|Leticia San Martín Rodríguez (UPN)": {
    "text": "Seis años como enfermera asistencial y nueve en puestos de gestión en la Clínica Universidad de Navarra. Docente e investigadora en Ciencias de la Salud en la Universidad Pública de Navarra.",
    "areas": [
      "Sanidad y cuidados",
      "Docencia e investigación"
    ]
  },
  "D.R.G|Santa Cruz De Tenerife|Alberto Rodríguez Rodríguez": {
    "text": "Obrero industrial y operador de refinería de petróleo de CEPSA.",
    "areas": [
      "Industria y construcción"
    ]
  },
  "LIB|Las Palmas|Daniel Falero Mesa": {
    "text": "Maestro de Primaria en la escuela pública canaria. La memoria de campaña recoge nueve años de docencia y coordinación de patrimonio en su centro escolar.",
    "areas": [
      "Docencia e investigación"
    ]
  },
  "LIB|Santa Cruz De Tenerife|Angélica María Calero Armas": {
    "text": "Trabaja en el Servicio Canario de la Salud, según su perfil electoral.",
    "areas": [
      "Sanidad y cuidados"
    ]
  },
  "SY|Soria|Juan Antonio Palomar Sicilia": {
    "text": "Técnico de Emergencias Sanitarias en el servicio de salud de Castilla y León, Sacyl.",
    "areas": [
      "Sanidad y cuidados"
    ]
  },
  "SY|Soria|Joel Martínez Moreno": {
    "text": "Funcionario de carrera y docente en el ámbito de la actividad física y deportiva en Formación Profesional en Soria.",
    "areas": [
      "Docencia e investigación"
    ]
  },
  "PFAC|Álava|Zuriñe Ojeda Santiago": {
    "text": "Articulista y editora del diario El Común. Cofundó la asociación Gafas Moradas.",
    "areas": [
      "Comunicación y cultura"
    ]
  },
  "PARTIDO AUTÓNOMOS|Alicante|Lydia Cañedo Oliver": {
    "text": "Regenta el negocio familiar como autónoma, según su ficha electoral de 2023.",
    "areas": [
      "Actividad por cuenta propia · sector sin precisar"
    ]
  },
  "PH|Madrid|José Luis Álvarez Cedena": {
    "text": "Autor de entrevistas de cine en Caimán Cuadernos de Cine.",
    "areas": [
      "Comunicación y cultura"
    ]
  },
  "EGUZKILORE|Navarra|Francisco Javier Pérez Cueva": {
    "text": "Psicomotricista, según su artículo firmado sobre el Día Internacional de la Infancia.",
    "areas": [
      "Sanidad y cuidados"
    ]
  },
  "PREPAL|Zamora|Francisco Iglesias Carreño": {
    "text": "Fue profesor de Física en el Instituto Claudio Moyano de Zamora.",
    "areas": [
      "Docencia e investigación"
    ]
  },
  "CHA-IU-MS-FRENTE AMPLIO|Huesca|José Luis Parra Pascau (CHA)": {
    "text": "Docente en el Colegio Rural Agrupado Vero Alcanadre, donde consta como especialista en Pedagogía Terapéutica y coordinador de tercer ciclo.",
    "areas": [
      "Docencia e investigación"
    ]
  },
  "NC-BC, PODEMOS, IU, SUMAR|Las Palmas|Luis Alberto Campos Jiménez": {
    "text": "Su currículum recoge empleos como auxiliar de juego, técnico de juego, administrativo y asesor contable.",
    "areas": [
      "Comercio y atención al público",
      "Gestión, consultoría y finanzas"
    ]
  },
  "CCA-1.ºCAN|Las Palmas|Teodoro Claret Sosa Monzón": {
    "text": "Jefe de obra en Ginés Navarro, ACS y Probisa desde 1997 y jefe de grupo de la constructora Joca desde 2004, según su biografía municipal.",
    "areas": [
      "Industria y construcción"
    ]
  },
  "EAJ-PNV|Álava|Gorka Urtaran Agirre": {
    "text": "Sociólogo del Ayuntamiento de Vitoria-Gasteiz según su registro de actividades de 2015.",
    "areas": [
      "Administración y organismos públicos"
    ]
  },
  "SALF|Madrid|Luca Moratal Romeu": {
    "text": "Profesor de teoría del Derecho e historia de la cultura jurídica en la UNIR. Ha impartido docencia jurídica en otras universidades.",
    "areas": [
      "Docencia e investigación"
    ]
  },
  "ADELANTE ANDALUCÍA|Cádiz|María Sánchez Barrada": {
    "text": "Ingeniera de calidad en Dragados Offshore (Puerto Real) según entrevista de septiembre de 2026.",
    "areas": [
      "Industria y construcción"
    ]
  },
  "VOX|Albacete|Rubén Herrero de Castro": {
    "text": "Profesor contratado doctor en la Universidad Complutense de Madrid.",
    "areas": [
      "Docencia e investigación"
    ]
  },
  "COMPROMIS-EUPV-PODEM-ERPV|Alicante|María Teresa Pérez Díaz": {
    "text": "Redactora en EFE TV y en Europa Press. Organizó actividades deportivas, culturales y de ocio en la Fundación Universidad Carlos III.",
    "areas": [
      "Comunicación y cultura"
    ]
  },
  "FRENTE AMPLIO-FRONTE AMPLA|A Coruña|José Luis Piñeiro García (Xosé Lois)": {
    "text": "Profesor de Ciencias en la escuela pública, según el perfil publicado al anunciar su candidatura.",
    "areas": [
      "Docencia e investigación"
    ]
  },
  "FIA|Zaragoza|Amadeo Escolán Remartínez": {
    "text": "Abogado y analista jurídico en los servicios jurídicos de Ibercaja. Fue responsable del área de herencias hasta prejubilarse en 2018, según su biografía editorial.",
    "areas": [
      "Derecho y justicia"
    ]
  }
};
