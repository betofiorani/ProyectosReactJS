import './App.css';
import Ahorcado from './components/Ahorcado';
import Footer from './components/Footer';
import Header from './components/Header';
import logo from './img/logo.png';

const tematicas = [
  {name: 'Personajes Animados', value: 'Personajes Animados'},
  {name: 'Objetos', value: 'Objetos'},
  {name: 'Paises', value: 'Paises'},
  {name: 'Nombres', value: 'Nombres'},
  {name: 'Comidas', value: 'Comidas'},
]

const palabrasDisponibles = {
  'Personajes Animados': [
    {
      'palabra': 'merida',
      'pista': 'personaje muy valiente',
      'url': 'buscar/aqui.com',
      'url_imagen': 'imagen.com'
    },
    {
      'palabra': 'los increibles',
      'pista': 'familia de superheroes',
      'url': 'buscar/aqui.com',
      'url_imagen': 'imagen.com'
    },
    {
      'palabra': 'frozen',
      'pista': 'una aventura congelada',
      'url': 'buscar/aqui.com',
      'url_imagen': 'imagen.com'
    },
    {'palabra': 'enredados'},
    {'palabra': 'bolt'},
    {'palabra': 'aladdin'},
    {'palabra': 'moana'},
    {'palabra': 'barbie'},
    {'palabra': 'lady bug'},
    {'palabra': 'cat noir'},
    {'palabra': 'monster high'},
    {'palabra': 'bob esponja'},
    {'palabra': 'calamardo'},
    {'palabra': 'don cangrejo'},
    {'palabra': 'arenita'},
    {'palabra': 'plancton'},
    {'palabra': 'patricio'},
    {'palabra': 'fondo de bikini'},
    {'palabra': 'jazmin'},
    {'palabra': 'blancanieves'},
    {'palabra': 'la cenicienta'},
    {'palabra': 'malefica'},
    {'palabra': 'cruella'},
    {'palabra': 'rapunzel'},
    {'palabra': 'turbo'},
    {'palabra': 'rayo macqueen'},
    {'palabra': 'los croods'},
    {'palabra': 'madagascar'},
    {'palabra': 'mi villano favorito'},
    {'palabra': 'minions'},
    {'palabra': 'eugene'},
    {'palabra': 'lluvia de hamburguesas'},
    {'palabra': 'space jam'},
    {'palabra': 'bugs bunny'},
    {'palabra': 'mickey mouse'},
    {'palabra': 'minnie mouse'},
    {'palabra': 'pluto'},
    {'palabra': 'goofy'},
    {'palabra': 'daisy'},
    {'palabra': 'pato donald'},
    {'palabra': 'bailarina'},
    {'palabra': 'scarlett overkill'},
    {'palabra': 'profesor nefario'},
    {'palabra': 'el macho'},
    {'palabra': 'chicken little'},
    {'palabra': 'la sirenita'},
    {'palabra': 'ariel'},
    {'palabra': 'aurora'},
    {'palabra': 'rango'},
    {'palabra': 'el gato con botas'},
    {'palabra': 'violeta'},
    {'palabra': 'frozono'},
    {'palabra': 'prodigios'},
    {'palabra': 'jefe en pañales'},
    {'palabra': 'unidos'},
    {'palabra': 'sherlock gnomes'},
    {'palabra': 'angry birds'},
    {'palabra': 'buscando a nemo'},
    {'palabra': 'buscando a dory'},
    {'palabra': 'descendientes'},
    {'palabra': 'como entrenar a tu dragon'},
    {'palabra': 'coco'},
    {'palabra': 'dumbo'},
    {'palabra': 'el lorax'},
    {'palabra': 'el grinch'},
    {'palabra': 'horton'},
    {'palabra': 'el alcalde'},
    {'palabra': 'villaquien'},
    {'palabra': 'el rey leon'},
    {'palabra': 'timon'},
    {'palabra': 'pumba'},
    {'palabra': 'mulan'},
    {'palabra': 'mufasa'},
    {'palabra': 'ferdinand'},
    {'palabra': 'intensamente'},
    {'palabra': 'hotel transylvania'},
    {'palabra': 'dracula'},
    {'palabra': 'kung fu panda'},
    {'palabra': 'la bella y la bestia'},
    {'palabra': 'gaston'},
    {'palabra': 'la dama y el vagabundo'},
    {'palabra': 'ratatouille'},
    {'palabra': 'la era del hielo'},
    {'palabra': 'manny'},
    {'palabra': 'diego'},
    {'palabra': 'la princesa y el sapo'},
    {'palabra': 'lilo y stitch'},
    {'palabra': 'la vida secreta de tus mascotas'},
    {'palabra': 'zootopia'},
    {'palabra': 'megamente'},
    {'palabra': 'peter pan'},
    {'palabra': 'tinker bell'},
    {'palabra': 'capitan garfio'}

  ],
  'Objetos': [
    {
      'palabra': 'televisor',
      'pista': 'caja boba',
      'url': 'buscar/aqui.com',
      'url_imagen': 'imagen.com'
    },
    {
      'palabra': 'tenedor',
      'pista': 'pariente pequeño del tridente',
      'url': 'buscar/aqui.com',
      'url_imagen': 'imagen.com'
    },
    {
      'palabra': 'martillo',
      'pista': 'si te golpea un dedo duele',
      'url': 'buscar/aqui.com',
      'url_imagen': 'imagen.com'
    }
  ],
  'Paises': [
    {
      'palabra': 'Argentina',
      'pista': 'país sin arreglo',
      'url': 'buscar/aqui.com',
      'url_imagen': 'imagen.com'
    },
    {
      'palabra': 'Francia',
      'pista': 'Hogar de Lady Bug',
      'url': 'buscar/aqui.com',
      'url_imagen': 'imagen.com'
    },
    {
      'palabra': 'Nueva Zelanda',
      'pista': 'Te bailan el Haka',
      'url': 'buscar/aqui.com',
      'url_imagen': 'imagen.com'
    },
    {'palabra': 'Alemania'},
    {'palabra': 'españa'},
    {'palabra': 'costa rica'},
    {'palabra': 'estados unidos'},
    {'palabra': 'etiopia'},
    {'palabra': 'siria'},
    {'palabra': 'egipto'},
    {'palabra': 'china'},
    {'palabra': 'brasil'},
    {'palabra': 'uruguay'},
    {'palabra': 'paraguay'},
    {'palabra': 'tanzania'},
    {'palabra': 'rusia'},
    {'palabra': 'cuba'},
    {'palabra': 'haiti'},
    {'palabra': 'honduras'},
    {'palabra': 'canada'},
    {'palabra': 'australia'},
    {'palabra': 'japon'},
    {'palabra': 'italia'},
    {'palabra': 'noruega'},
    {'palabra': 'colombia'},
    {'palabra': 'venezuela'},
    {'palabra': 'holanda'},
    {'palabra': 'belgica'},
    {'palabra': 'dinamarca'},
    {'palabra': 'suecia'},
    {'palabra': 'ucrania'},
    {'palabra': 'inglaterra'},
    {'palabra': 'escocia'},
    {'palabra': 'portugal'},
    {'palabra': 'hungria'},
    {'palabra': 'austria'},
  ],
  'Comidas': [
    {
      'palabra': 'Berengenas a la pizza',
      'pista': 'increiblemente, le gustan al papá',
      'url': 'buscar/aqui.com',
      'url_imagen': 'imagen.com'
    },
    {
      'palabra': 'Papas Fritas',
      'pista': 'le gustan a todos',
      'url': 'buscar/aqui.com',
      'url_imagen': 'imagen.com'
    },
    {
      'palabra': 'Helado',
      'pista': 'una aventura congelada',
      'url': 'buscar/aqui.com',
      'url_imagen': 'imagen.com'
    },
    {'palabra': 'asado'},
    {'palabra': 'lomito'},
    {'palabra': 'hamburguesa'},
    {'palabra': 'ñoquis'},
    {'palabra': 'ravioles'},
    {'palabra': 'tallarines'},
    {'palabra': 'arroz con lentejas'},
    {'palabra': 'lasaña'},
    {'palabra': 'huevos revueltos'},
    {'palabra': 'omelete'},
    {'palabra': 'tarta de espinaca'},
    {'palabra': 'tarta de acelga'},
    {'palabra': 'tarta de jamon y queso'},
    {'palabra': 'empanadas arabes'},
    {'palabra': 'empanadas de pollo'},
    {'palabra': 'empanadas de jamon y queso'},
    {'palabra': 'pollo a la parrilla'},
    {'palabra': 'pastel de carne'},
    {'palabra': 'Sorrentinos'},
    {'palabra': 'milanesas'},
    {'palabra': 'milanesa a la napolitana'},
    {'palabra': 'escalopes'},
  
  ],
  'Nombres': [
    {
      'palabra': 'Guadalupe',
      'pista': 'Una virgen famosa se llama asi',
      'url': 'https://es.wikipedia.org/wiki/Guadalupe',
      'url_imagen': 'imagen.com'
    },
    {
      'palabra': 'Daniela',
      'pista': 'familia de superheroes',
      'url': 'buscar/aqui.com',
      'url_imagen': 'imagen.com'
    },
    {
      'palabra': 'Maxima',
      'pista': 'como la reina de Holanda',
      'url': 'buscar/aqui.com',
      'url_imagen': 'imagen.com'
    },
    {'palabra': 'Alberto'},
    {'palabra': 'Tiago'},
    {'palabra': 'Ignacio'},
    {'palabra': 'Catalina'},
    {'palabra': 'Maite'},
    {'palabra': 'Santino'},
    {'palabra': 'Virginia'},
    {'palabra': 'Victoria'},
    {'palabra': 'Tania'},
    {'palabra': 'Ezequiel'},
    {'palabra': 'Martin'},
    {'palabra': 'Estela'},
    {'palabra': 'Tiziana'},
    {'palabra': 'Natalia'},
    {'palabra': 'Carolina'},
    {'palabra': 'Maria Sol'},
    {'palabra': 'Francisco'},
    {'palabra': 'Faustino'},
    {'palabra': 'Soledad'},
    {'palabra': 'Lourdes'},
    {'palabra': 'Camila'},
    {'palabra': 'Gabriela'},
    {'palabra': 'Tufic'},
  ]


}

function App() {
  return (
    <div className="App">
      <Header title="Los Juegos de Guadi" logo={logo} />
      <div className="App-container">
        <Ahorcado palabrasDisponibles={palabrasDisponibles} tematicas={tematicas} />  
      </div>
      <Footer clase="footer" legales="diseñado por Guadalupe Gema Fiorani" />
    </div>
  );
}

export default App;
