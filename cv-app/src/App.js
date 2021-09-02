import './App.css';
import Header from './components/Header';
import TopNav from './components/TopNav';

const persona = {
  nombre: "Alberto Miguel Fiorani",
  apodo: "Beto Fiorani",
  dni: "28427927",
  nacionalidad: "Argentina",
  codigoPais: "AR",
  estadoCivil: "casado",
  fecNac: "11/11/1980",
  origen: {"Córdoba": [
    <img  src="https://picsum.photos/800/500/?random" alt="1" />,
    <img  src="https://picsum.photos/800/501/?random" alt="2" />,
    <img  src="https://picsum.photos/800/502/?random" alt="3" />,
    <img  src="https://picsum.photos/800/503/?random" alt="4" />,
    <img  src="https://picsum.photos/800/505/?random" alt="5" />   ]},
  
  residencia: {"Río Segundo": [
    <img  src="https://picsum.photos/800/500/?random" alt="1" />,
    <img  src="https://picsum.photos/800/501/?random" alt="2" />,
    <img  src="https://picsum.photos/800/502/?random" alt="3" />,
    <img  src="https://picsum.photos/800/503/?random" alt="4" />,
    <img  src="https://picsum.photos/800/505/?random" alt="5" />   ]},
  profesion: "Desarrollador Full Stack Junior"
}

const personaContacto = [
    { label: "linkedIn", icon: "linkedIn", url:"https://www.linkedin.com/in/beto-fiorani/", type:"red"},
    { label: "facebook", icon: "facebook", url:"https://www.facebook.com/beto.fiorani/", type:"red"},
    { label: "youTube", icon: "youTube", url:"https://www.youtube.com/channel/UCrY5pXQ7eA01DBspDM7pSig", type:"red"},
    { label: "github", icon: "github", url:"https://github.com/betofiorani", type:"red"},
    { label: "celular", icon: "whatsApp", url:"https://api.whatsapp.com/send?", type:"whatsApp", text:"3514029030"},
    { label: "mail", icon: "mail", url:"mailto:betofiorani@gmail.com", type:"mail", text:"betofiorani@gmail.com"}
]

const intereses = {
    "fútbol": {
      "posición": "Delantero",
      "pierna": "Zurda",
      "equipos": "Boca Juniors, Belgrano",
      "idolos": "Messi, Palermo" 
    },
    videojuegos: {
      "género": "Aventuras Gráficas, Shooters, fútbol",
      "Preferidos": "Monkey Island, GTA, Assassin's Creed",
      "Jugando": "Candy Crush, Fishing Clash"
    },
    comida: {
      "Lugar": "McDonalds",
      "Preferidas": "Asado, Lomito, Pizza, Empanadas",
      "Habilidades": "Asador"
    }, 
    pesca: {
      "tipo": "Variada de costa o embarcado",
      "donde?": "islas del Paraná o Costa del Mar"
    },
    movies: {
      "género": "acción, aventura, animación, thriller, comedia",
      "Cine o casa": "casa",
      "colección": "+ de 7000 pelis",
      "Favoritas": "Universo Marvel, El Señor de los Anillos"
    },
    libros: {
      "género": "misterio, policiales",
      "escritor": "Agatha Christie",
      "personaje": "Hercules Poirot"
    },
    "música": {
      "género": "balada, melódico",
      "bandas": "A-Ha, Chicago, Cock Robin, etc",
      "cantantes": "Cristian Castro, Montaner, Richard Marx, etc"
    },
    series: {
      "género": "comedias",
      "favoritas": "The Big Bang Theory, How I Met Your Mother, Two and a half Men",
      "decepciones": "Lost, Games of Thrones"
    }
  }

const estudios = [
  {
    'título': 'Bachiller Perito Mercantil',
    'lugar': 'Colegio Lasalle',
    'fotos': [
            {
              image: "LaSalle1.jpg",
              caption: "La Salle - Argüello"
            },
            {
              image: "LaSalle2.jpg",
              caption: "Nevada Histórica"
            },
            {
              image: "LaSalle3.jpg",
              caption: "Fachada Izquierda"
            },
            {
              image: "LaSalle4.jpg",
              caption: "Reunión de Alumnos"
            }
        ],
    'año': '1998'
  },
  {
    'título': 'Contador Público Nacional',
    'lugar': 'Universidad Nacional de Córdoba',
    'fotos': [
            {
              image: "fce1.jpg",
              caption: "Facultad de Ciencias Económicas"
            },
            {
              image: "fce2.jpg",
              caption: "Entrada"
            },
            {
              image: "fce3.jpg",
              caption: "Colegio de Graduados"
            },
            {
              image: "fce4.jpg",
              caption: "Biblioteca"
            },
            {
              image: "fce5.jpg",
              caption: "Biblioteca - Computadoras"
            },
            {
              image: "fce6.jpg",
              caption: "Aula Magna"
            },
            {
              image: "fce7.jpg",
              caption: "Aula Estándar"
            }
        ],
    'año': '2012'
  },
  {
    'título': 'Diplomatura en E-commerce',
    'lugar': 'Universidad Blas Pascal',
    'fotos': [
            {
              image: "LaSalle1.jpg",
              caption: "Fachada"
            },
            {
              image: "LaSalle2.jpg",
              caption: "Nevada Histórica"
            },
            {
              image: "LaSalle3.jpg",
              caption: "Fachada Izquierda"
            },
            {
              image: "LaSalle4.jpg",
              caption: "Reunión de Alumnos"
            }
        ],
    'año': '2017'
  }
]

const cursos = [
  {
    'título': 'ReactJS + Redux + ES6',
    'lugar': 'Udemy Academy',
    'logo': 'logo-udemy.svg',
    'duracion': '54 horas',
    'profesor': 'Ing. Emiliano Ocariz',
    'aprendizaje': ['Crear aplicaciones web profesionales con ReactJS, Redux, ES6 y recoil',
    'herramientas, técnicas y trucos',
    'patrones de diseño y mejores prácticas: TDD, SOLID, DRY',
    'Hooks: useState a fondo, useRef, useEffect, useDebugValue, useMemo, useCallback, useReducer, useContext',
    'Deploy a Firebase'],
    'certificado': 'UC-2aa16726-bea0-4bca-9c2c-ee1a0aaec0c9.jpg',
    'año': '2021',
    'link':'https://www.udemy.com/course/react-js-redux-es6-completo-de-0-a-experto-espanol/learn/lecture/21034564?start=75#overview'
  },
  {
    'título': 'Desarrollo Web HTML5, CSS3, JS, AJAX, PHP y MySQL',
    'lugar': 'Udemy Academy',
    'logo': 'logo-udemy.svg',
    'duracion': '89 horas',
    'profesor': 'Ing. Juan Pablo de la Torre Valdez',
    'aprendizaje': ['Crear sitios web profesionales',
    'HTML5, CSS3 y SCSS', 'Javascript, Jquery, Gulp, Ajax', 'PHP y MySQL',
    'Programación Orientada a Objetos (POO)', 'herramientas, técnicas y trucos',
    'Model View Controller',
    'patrones de diseño y mejores prácticas: SOLID, DRY',
    'Deploy a Firebase o Netlify'],
    'certificado': 'UC-c874d5fe-cf1b-4884-9215-2cb2112980fd.jpg',
    'año': '2021',
    'link':'https://www.udemy.com/course/desarrollo-web-completo-con-html5-css3-js-php-y-mysql/learn/lecture/12258974?start=255#overview'
  },
  {
    'título': 'Introducción al Desarrollo WEB I',
    'lugar': 'Google Activate',
    'logo': 'google-activate.jpg',
    'duracion': '40 horas',
    'profesor': 'Ing. Sergio Lujan Mora',
    'aprendizaje': ['Historia de la Web',
    'Cómo funciona la Web', 'Cómo se escribe una página Web',
    'Cómo se publica una página Web', 'Cómo se escribe una página Web bien estructurada'],
    'certificado': 'GAIDW1.jpg',
    'año': '2021',
    'link':'https://learndigital.withgoogle.com/activate/courses?partner=Universidad%20de%20Alicante'
  },
  {
    'título': 'Introducción al Desarrollo WEB 2',
    'lugar': 'Google Activate',
    'logo': 'google-activate.jpg',
    'duracion': '40 horas',
    'profesor': 'Ing. Sergio Lujan Mora',
    'aprendizaje': ['Cómo se define la presentación de una página web',
    'Cómo se define la presentación de los elementos de una página web', 'Cómo se maqueta una página web',
    'Cómo se logra que una página web tenga éxito'],
    'certificado': 'GAIDW2.jpg',
    'año': '2021',
    'link':'https://learndigital.withgoogle.com/activate/courses?partner=Universidad%20de%20Alicante'
  },

];

const habilidades = 
  {
    'blandas': {
      'sociales': 
        [
          {label:'Empatía'},{label:'Buena Onda'},{label:'Amabilidad'},{label:'Actitud +'}
        ],
      'relacionales': 
        [
          {label:'Liderazgo'}, {label:'Trabajo en Equipo'},{label:'Comunicación'},{label:'Escucha Activa'}
        ],
      'Personales': 
        [
          {label:'Creatividad'},{label:'Lógica'},{label:'Iniciativa'},{label:'Responsabilidad'},{label:'Flexibilidad'},{label:'Aprendizaje'},{label:'Pasión'},
          {label: 'Resolutivo'},{label:'Autonomía'}
        ],
    },

  'duras': 
    {
      'Lenguajes': 
        [
          {'label': 'HTML5', 'nivel':'intermedio'},
          {'label': 'CSS3', 'nivel':'intermedio'},
          {'label': 'PHP', 'nivel':'intermedio'}, 
          {'label': 'Javascript', 'nivel':'intermedio'}, 
          {'label': 'C Sharp', 'nivel':'básico'}
        ],
      'FrameWorks': 
        [
          {'label': 'ReactJS', 'nivel':'intermedio'},
          {'label': 'Redux', 'nivel':'intermedio'},
          {'label': 'bootstrap', 'nivel':'intermedio'},
        ],

      'Arquitectura y patrones de diseño': 
        [
          {'label': 'MVC', 'nivel':'intermedio'},
          {'label': 'SOLID', 'nivel':'intermedio'},
          {'label': 'DRY', 'nivel':'intermedio'},
          {'label': 'atomic', 'nivel':'intermedio'},
        ],
      'Bases de Datos': 
        [
          {'label': 'MySql', 'nivel':'intermedio'}, 
          {'label': 'mongoDB', 'nivel':'básico'}, 
          {'label': 'SQLServer', 'nivel':'básico'},
          {'label': 'herramientas', 'ejemplos': 'Navicat, SqlYog, Robo 3T'}
        ],
      'Herramientas y tecnologías': 
        [
          {'label': 'SASS', 'nivel':'intermedio'},
          {'label': 'GULP', 'nivel':'intermedio'},
          {'label': 'GRUNT', 'nivel':'básico'}, 
          {'label': 'AJAX', 'nivel':'intermedio'}, 
          {'label': 'POO', 'nivel':'intermedio'}, 
        ],
      'Gestor de Dependencias': 
        [
          {'label': 'NPM', 'nivel':'intermedio'},
          {'label': 'YARN', 'nivel':'básico'},
          {'label': 'NPX', 'nivel':'básico'}, 
        ],
      'Librerías': 
        [
          {'label': 'jQuery', 'nivel':'intermedio'},
          {'label': 'Material Ui', 'nivel':'intermedio'},
          {'label': 'react icons', 'nivel':'intermedio'},
          {'label': 'momentJs', 'nivel':'básico'}, 
          {'label': 'chartJs', 'nivel':'básico'},
        ],
      'control de versiones': 
        [
          {'label': 'GIT', 'nivel':'intermedio'},
          {'label': 'GitHub', 'nivel':'intermedio'},
          {'label': 'Bitbucket', 'nivel':'básico'},
        ],
      'deploy': 
        [
          {'label': 'Firebase', 'nivel':'básico'},
          {'label': 'Netlify', 'nivel':'básico'},
        ],
      'Trabajo colaborativo': 
        [
          {'label': 'Trello', 'nivel':'intermedio'},
          {'label': 'Jira', 'nivel':'intermedio'},
        ]
    }
  }

const experiencias = [
  {
    fecha: '08/2021 - Actualidad',
    logo: 'wggroup.jpg',
    puesto: 'Desarrollador Full Stack Junior',
    empresa: 'WG Group',
    web: 'https://www.web-grafica.com.ar/',
    responsabilidad: {
      corta: 'Mantenimiento y mejora de aplicaciones WEB de distintos rubros y empresas. Manejo de ReactJs para front y C Sharp en Back. Bases de datos en SQLServer y MongoDB.',
      larga: [
        "Mantenimiento y mejora de aplicaciones vinculadas al rubro de laboratorios y de envíos de campaña por SMS",
        "Lenguajes Front: ReactJs y Angular1",
        "Lenguaje Back: C Sharp",
        "Bases de datos: SQL Server y MongoDB",
        "Herramientas de Bases de datos: Robo3T y SQL Server Management Studio",
        "Trabajo remoto: Metodologías Agiles. Dayly por Meet o Zoom, tarjetas por Jira y comunicación por Slack",
        "Control de versiones: Git utilizando Fork y Bitbucket"
      ]
    }
  },
  {
    fecha: '04/2019 - Actualidad',
    logo: 'elbalcon.jpg',
    puesto: 'E-Commerce Manager Senior',
    empresa: 'El Balcon',
    web: 'www.elbalcon.com',
    responsabilidad: {
      corta: 'Lider de la Transformación Digital de la empresa. Planificación y gestión del canal Digital.',
      larga: [
        "Logros:",
        "Colocar culturalmente al cliente y su experiencia como norte.",
        "Eliminar la competencia entre el mundo físico y el digital como base para garantizar la omnicanalidad",
        "Incorporar y capacitar tecnológicamente a la fuerza física de vendedores. Hoy las tecnologías y la Web son sus herramientas y manejan ambos mundos.",
        "Descentralización de la logística en cada punto de venta. Son centros logísticos independientes. Mejor experiencia al cliente, menos costos, aprovechamiento integral del stock.",
        "Descentralización de la atención digital y teléfonica entre todos los vendedores físicos.",
        "Incorporación de la marca a los marketsplaces más relevantes y creación de herramientas para su gestión.",
        "Implementación de un nuevo sitio web"
      ]
    }
  },
  {
    fecha: '08/2020 - Actualidad',
    logo: 'betadigital.jpg',
    puesto: 'Asesor E-Commerce Senior',
    empresa: 'Beta Digital',
    web: 'www.betadigital.com.ar',
    responsabilidad: {
      corta: 'Socio Fundador de Beta Digital. Consultora especializada en el desarrollo del canal digital de sus clientes.',
      larga: [
        "Asesoramiento integral para el desarrollo o evolución del e-commerce, incluyendo su presencia en marketsplaces relevantes, haciendo foco en su transformación digital",
        "Creación de tu primera presencia digital en sitio web propio y en los marketsplaces más relevantes"
      ]
    }
  },
  {
    fecha: '04/2011 - 03/2012',
    logo: 'contextus.jpg',
    puesto: 'Desarrollador Full Stack Junior',
    empresa: 'Contextus',
    web: 'www.contextuslatam.com',
    responsabilidad: {
      corta: 'Desarrollador de sitios e-commerce.',
      larga: [
        "Lenguaje Front: Javascript con jQuery y AJAX",
        "Lenguaje Back: PHP",
        "Frameworks: bootstrap",
        "Base de datos: MySql"
      ]
    }
  },
  {
    fecha: '03/2008 - 03/2017',
    logo: 'freeshop.jpg',
    puesto: 'E-Commerce Manager Senior',
    empresa: 'fiorani',
    web: 'www.fiorani.com',
    responsabilidad: {
      corta: 'Planificación y gestión del canal digital.',
      larga: [
        "Acompañamiento a la empresa en el desarrollo del canal desde el momento cero.",
        "Implementación varios sitios web desde uno a medida en el inicio hasta uno sitio en Magento",
        "Logros:",
        "Incorporación de la marca en los marketsplaces más relevantes",
        "Planificación e implementaciónd de los procesos y herramientas logísticas, de packaging, etc."
      ]
    }
  }
]

const portfolio = [
  {
    Nombre: 'Beto Fiorani CV-APP',
    'Tecnologías': ['HTML5','CSS3','Javascript','ReactJS','MaterialUI','React-Icons'],
    'Github': 'link',
    'deploy': 'link',
    'Descripción': 'Single Page Aplication creada para afianzar mis conocimientos en ReactJS. Recibe objetos con la información personal de una persona, sus intereses, conocimientos, experiencias, etc y los expone en forma agrupada y ordenada. Muestra un poco de mi, de lo que amo y sueño con hacer.',
    'imagenes': [
      <img className="img-logo" src="/images/cvApp1.jpg" alt="CV-APP1" />,
      <img className="img-logo" src="/images/cvApp2.jpg" alt="CV-APP2" />,
      <img className="img-logo" src="/images/cvApp3.jpg" alt="CV-APP3" />,
      <img className="img-logo" src="/images/cvApp4.jpg" alt="CV-APP4" />,
      <img className="img-logo" src="/images/cvApp5.jpg" alt="CV-APP5" />,
      <img className="img-logo" src="/images/cvApp6.jpg" alt="CV-APP6" />,
      <img className="img-logo" src="/images/cvApp7.jpg" alt="CV-APP7" />,
      <img className="img-logo" src="/images/cvApp8.jpg" alt="CV-APP8" />
    ],
    'logo': 'cvAppLogo.png'
  },
  {
    'Nombre': 'Pan y Queso Virtual',
    'Tecnologías': ['HTML5','CSS3','Javascript'],
    'Github': 'link',
    'deploy': 'link',
    'Descripción': 'Single Page Aplication que permite armar muy rápidamente un partido de fútbol en forma manual o aleatoria. Creada para evitar los enojos de siempre al armar el partido entre amigos de cada semana. Permite asignar posiciones para que el azar las tenga en cuenta a la hora de armar los equipos.',
    'imagenes': [
      <img className="img-logo" src="/images/pq0.jpg" alt="Pan Queso 0" />,
      <img className="img-logo" src="/images/pq1.jpg" alt="Pan Queso 1" />,
      <img className="img-logo" src="/images/pq2.jpg" alt="Pan Queso 2" />,
      <img className="img-logo" src="/images/pq3.jpg" alt="Pan Queso 3" />,
      <img className="img-logo" src="/images/pq4.jpg" alt="Pan Queso 4" />,
    ],
    'logo': 'pqLogo.jpg'
  },
  {
    'Nombre': 'GDLWEBCAMP',
    'Tecnologías': ['HTML5','CSS3','PHP','Javascript','Ajax','MySql','PayPal','GULP','SASS','NPM','MVC'],
    'Github': 'https://github.com/betofiorani/ProyectosPHP/tree/main/gdlWebCamp',
    'deploy': '',
    'Descripción': 'Sitio creado para administrar eventos. Permite a los interesados informarse sobre el evento, ver los conferencistas, armar el programa y comprar los pases y pagarlos con PayPal. En el Back, permite administrar todo. Eventos, pases, invitados, galerías de imágenes, etc.',
    'imagenes': [
      <img className="img-logo" src="/images/gdl1.jpg" alt="gdl 0" />,
      <img className="img-logo" src="/images/gdl2.jpg" alt="gdl 1" />,
      <img className="img-logo" src="/images/gdl3.jpg" alt="gdl 2" />,
      <img className="img-logo" src="/images/gdl4.jpg" alt="gdl 3" />,
      <img className="img-logo" src="/images/gdl13.jpg" alt="gdl 13" />,
      <img className="img-logo" src="/images/gdl5.jpg" alt="gdl 4" />,
      <img className="img-logo" src="/images/gdl6.jpg" alt="gdl 5" />,
      <img className="img-logo" src="/images/gdl7.jpg" alt="gdl 6" />,
      <img className="img-logo" src="/images/gdl8.jpg" alt="gdl 7" />,
      <img className="img-logo" src="/images/gdl9.jpg" alt="gdl 8" />,
      <img className="img-logo" src="/images/gdl10.jpg" alt="gdl 9" />,
      <img className="img-logo" src="/images/gdl11.jpg" alt="gdl 10" />,
      <img className="img-logo" src="/images/gdl12.jpg" alt="gdl 11" />
    ],
    'logo': 'gdlLogo.jpg'
  },
  {
    'Nombre': 'Atenea Soluciones Inmobiliarias',
    'Tecnologías': ['HTML5','CSS3','PHP','Javascript','Ajax','MySql','GULP','SASS','NPM','MVC'],
    'Github': 'https://github.com/betofiorani/ProyectosPHP/tree/main/atenea',
    'deploy': '',
    'Descripción': 'Sitio web para empresa inmobiliaria. Desarrollado en un entorno MVC con PHP, Javascript, Ajax y bases de datos en MySql. Permite mostrar propiedades en venta o alquiler, subir entradas de blog y recibir consultas. Tiene DarkMode.',
    'imagenes': [
      <img className="img-logo" src="/images/atenea1.jpg" alt="atenea 0" />,
      <img className="img-logo" src="/images/atenea2.jpg" alt="atenea 1" />,
      <img className="img-logo" src="/images/atenea3.jpg" alt="atenea 2" />,
      <img className="img-logo" src="/images/atenea4.jpg" alt="atenea 3" />,
      <img className="img-logo" src="/images/atenea5.jpg" alt="atenea 4" />,
      <img className="img-logo" src="/images/atenea6.jpg" alt="atenea 5" />,
      <img className="img-logo" src="/images/atenea7.jpg" alt="atenea 6" />
    ],
    'logo': 'ateneaLogo.jpg'
  },
  {
    Nombre: 'upTask - Adminitrador de Tareas',
    'Tecnologías': ['HTML5','CSS3','Javascript','PHP','MySql','Ajax'],
    'Github': 'https://github.com/betofiorani/ProyectosPersonales/tree/main/uptask',
    'deploy': '',
    'Descripción': 'Single Page Aplication creada con PHP, Javascript, Ajax y base de datos en MySql. Permite crear proyectos, asignarle tareas y efectuar con dichas tareas el CRUD (Create, read, update and Delete) completo. Además tiene un indicador de progreso e identifica las finalizadas',
    'imagenes': [
      <img className="img-logo" src="/images/uptask1.jpg" alt="upTask1" />,
      <img className="img-logo" src="/images/uptask2.jpg" alt="upTask2" />,
      <img className="img-logo" src="/images/uptask3.jpg" alt="upTask3" />,
      <img className="img-logo" src="/images/uptask4.jpg" alt="upTask4" />,
      <img className="img-logo" src="/images/uptask5.jpg" alt="upTask5" />,
      <img className="img-logo" src="/images/uptask6.jpg" alt="upTask6" />
    ],
    'logo': 'upTaskLogo.jpg'
  },
  {
    'Nombre': 'Agenda PHP',
    'Tecnologías': ['HTML5','CSS3','PHP','Javascript','Ajax','MySql'],
    'Github': 'https://github.com/betofiorani/ProyectosPersonales/tree/main/agenda',
    'deploy': '',
    'Descripción': 'Single Page Aplication para manejar tus contactos. Permite crear, buscar, modificar y eliminar tus contactos (CRUD). Está creada con PHP, Javascript, Ajax y Mysql',
    'imagenes': [
      <img className="img-logo" src="/images/agenda1.webp" alt="agenda 0" />,
      <img className="img-logo" src="/images/agenda2.webp" alt="agenda 1" />,
      <img className="img-logo" src="/images/agenda3.webp" alt="agenda 2" />,
      <img className="img-logo" src="/images/agenda4.webp" alt="agenda 3" />,
      <img className="img-logo" src="/images/agenda5.jpg" alt="agenda 4" />,
    ],
    'logo': 'agendaLogo.jpg'
  },
  {
    'Nombre': 'AppSalon',
    'Tecnologías': ['HTML5','CSS3','Javascript','JSON','GULP','SASS'],
    'Github': 'https://github.com/betofiorani/cursoUdemy/tree/main/appSalon',
    'deploy': '',
    'Descripción': 'Single Page aplication realizada con Javascript. Permite tomar los precios y servicios de una base de datos (por Api) y mostrarlos a los clientes. Estos pueden registrar un turno y saber cuanto deberán pagar. No permite agendar 2 turnos a la misma fecha ni en los horarios en que el salón está cerrado.',
    'imagenes': [
      <img className="img-logo" src="/images/appsalon1.jpg" alt="appsalon 0" />,
      <img className="img-logo" src="/images/appsalon2.jpg" alt="appsalon 1" />,
      <img className="img-logo" src="/images/appsalon3.jpg" alt="appsalon 2" />
    ],
    'logo': 'appSalonLogo.png'
  },
  {
    'Nombre': 'Weather App',
    'Tecnologías': ['HTML5','CSS3','ReactJS','Javascript','JSON','Hooks','Redux'],
    'Github': 'https://github.com/betofiorani/ProyectosReactJS/tree/main/WeatherApp',
    'deploy': 'https://weather-app-bf.web.app',
    'Descripción': 'Single Page aplication realizada con ReactJs. Permite consultar mostrar el clima de una lista de ciudad que pueden configurarse. Muestra también para cada ciudad información ampliada y el pronóstico extendido. Se conecta a una api del clima para brindar la información real.',
    'imagenes': [
      <img className="img-logo" src="/images/weatherApp1.jpg" alt="weatherApp 0" />,
      <img className="img-logo" src="/images/weatherApp2.jpg" alt="weatherApp 1" />,
      <img className="img-logo" src="/images/weatherApp3.jpg" alt="weatherApp 2" />
    ],
    'logo': 'weatherAppLogo.jpg'
  }
]

function App() {
  return (
    <div className="App">
      <Header personaContacto={personaContacto} seniority="junior"/>
      <TopNav 
        persona={persona} 
        personaContacto={personaContacto} 
        intereses={intereses} 
        estudios={estudios} 
        cursos={cursos} 
        habilidades={habilidades} 
        experiencias={experiencias}
        portfolio={portfolio}/>
      
    </div>
  );
}

export default App;
