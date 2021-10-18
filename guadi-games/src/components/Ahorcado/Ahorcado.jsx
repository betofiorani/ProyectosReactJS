import React, {useState} from 'react'
import PropTypes from 'prop-types'
import Imagen from '../Imagen';
import LetraInput from '../LetraInput';
import HistorialLetras from '../HistorialLetras';
import Palabra from '../Palabra';
import ListaDesplegable from '../ListaDesplegable';
import { seleccionPalabra, estaEnPalabra } from '../utils/utils';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import ArriesgarPalabra from '../ArriesgarPalabra';
import Button from '../Button';


const Ahorcado = ({palabrasDisponibles, tematicas}) => {
    // States
    const [tematica, setTematica] = useState('Personajes Animados');
    const palabraInicial = seleccionPalabra('Personajes Animados', palabrasDisponibles)
    const [palabraSeleccionada, setPalabraSeleccionada] = useState(palabraInicial);
    const [letrasElegidas, setLetrasElegidas] = useState({});
    const [letraElegida, setLetraElegida] = useState('');
    const [palabraArriesgada, setPalabraArriesgada] = useState('');
    const [cantidadErrores, setCantidadErrores] = useState(1);
    const [statusJuego, setStatusJuego] = useState('inProgress')

    const reiniciarOnClickHandler = () => {
        setStatusJuego("inProgress")
        setCantidadErrores(1)
        setPalabraArriesgada("")
        setLetraElegida("")
        setLetrasElegidas({})
        setPalabraSeleccionada(seleccionPalabra(tematica,palabrasDisponibles))
    }
    
    const gameOver = (cantidadErrores) => {
        
        if (cantidadErrores === 7) {
            const MySwal = withReactContent(Swal)

                 MySwal.fire({
                     icon: 'error',
                     title: 'AHORCADO!!',
                     text: 'mucha suerte la próxima vez',
                     showConfirmButton: true,
                 })       
            setStatusJuego('gameOver')
        } 
    }

    const gameVictory = letrasElegidas => {
        
        // revisar si ganó
        const letrasCorrectas = Object.keys(letrasElegidas).filter(letra => {
            return letrasElegidas[letra] === true
        })
        
        const letrasPendientes = palabraSeleccionada.replace(/ /g, "").split('').filter((letra) => {
            
            return (!letrasCorrectas.includes(letra))
            
        })
        
        if(letrasPendientes.length === 0) {

            const MySwal = withReactContent(Swal)

            MySwal.fire({
                icon: 'success',
                title: 'Ganaste',
                text: 'Te salvaste de ser Ahorcado',
                showConfirmButton: true,
                
            }) 
            
            setStatusJuego("win")
            setCantidadErrores(8)
        }
    }
    
    // Trae una palabra nueva cuando se cambia la temática del ahorcado
    const onChangeHandler = (e) => {
        setStatusJuego("inProgress")
        setTematica(e.target.value)
        setLetrasElegidas({});
        setLetraElegida('');
        setCantidadErrores(1);
        setPalabraArriesgada('');
        setPalabraSeleccionada(seleccionPalabra(e.target.value,palabrasDisponibles));
    }

    // Guarda el state de la letra elegida.
    const letraInputOnChangeHandler = (e) => {
        setLetraElegida(e.target.value.toUpperCase())
    }

    const letraInputOnKeyPressHandler = (e) => {
        
        if(e.key === "Enter") {
            letraInputOnClickHandler()
        }   
    }

    const arriesgarPalabraOnKeyPressHandler = (e) => {
        
        if(e.key === "Enter") {
            palabraArriesgadaOnClickHandler()
        }
    }

    // Revisa si se eligió una letra, revisa si ya fue elegida, si está en la palabra y 
    // guarda el state de de las letrasElegidas
    // también desencadenaría la aparición de las letras en la palabra.
    const letraInputOnClickHandler = (e) => {
        
        if(letraElegida === ''){
            const MySwal = withReactContent(Swal)

            MySwal.fire({
                icon: 'error',
                title: 'Debes Elegir alguna letra!',
                text: '',
                showConfirmButton: false,
                timer: 1500
            })
        }
        else {
                
              //Revisar si ya eligió esa Letra
            
             let letraRepetida = letrasElegidas && Object.keys(letrasElegidas).filter(letra =>{
                 return letra === letraElegida
             }).length

              //Si ya la eligió, sweet alert
              //Si no, revisar si está en la palabra
             if(letraRepetida >0) {
                 const MySwal = withReactContent(Swal)

                 MySwal.fire({
                     icon: 'error',
                     title: 'Ya Elegiste esta Letra!',
                     text: '',
                     showConfirmButton: false,
                     timer: 1500
                 })   
             } else {
                  //revisar si está en palabra
                 let esAcierto = estaEnPalabra(letraElegida, palabraSeleccionada) 
                 let errores = cantidadErrores

                 if(esAcierto === false) {
                     
                    errores = cantidadErrores + 1
                    setCantidadErrores(errores)
                    gameOver(errores)
                 }
                  //Agregar a letrasElegidas
                 setLetrasElegidas({...letrasElegidas, [letraElegida]: esAcierto}) 
                 setLetraElegida("")
                 gameVictory({...letrasElegidas, [letraElegida]: esAcierto})
                 
             } 

        }
    }

    const palabraArriesgadaOnChangeHandler = (e) => {
        setPalabraArriesgada(e.target.value.toUpperCase())
    }

    const palabraArriesgadaOnClickHandler = (e) => {
        
        const MySwal = withReactContent(Swal)

                 MySwal.fire({
                     icon: 'error',
                     title: 'Ya Elegiste esta Letra!',
                     text: '',
                     showConfirmButton: false,
                     timer: 1500
                 })   

        if(palabraArriesgada === ''){
            const MySwal = withReactContent(Swal)

            MySwal.fire({
                icon: 'error',
                title: 'Debes Arriesgar Alguna Palabra!',
                text: '',
                showConfirmButton: false,
                timer: 1500
            })
        }
        else {
                
             if(palabraArriesgada === palabraSeleccionada) {

                const MySwal = withReactContent(Swal)

                MySwal.fire({
                    icon: 'success',
                    title: 'Ganaste',
                    text: 'Te salvaste de ser Ahorcado',
                    showConfirmButton: true,
                    
                }) 
                
                setStatusJuego("win")
                setCantidadErrores(8)

             } else {

                const MySwal = withReactContent(Swal)

                MySwal.fire({
                    icon: 'error',
                    title: 'Ups!!',
                    text: 'Piensa bien antes de volver a arriesgarte',
                    showConfirmButton: false,
                    timer: 1500
                })
                let errores = cantidadErrores + 1
                setCantidadErrores(errores)   
                gameOver(errores)
             }
        }
    }

    return (
        <div className="ahorcado">
            <h2 className="ahorcado-titulo">Ahorcado</h2>
            <div className='ahorcado-nav'>
                <ListaDesplegable 
                    label="Tema Elegido" 
                    opciones={tematicas} 
                    id="tematicas" 
                    clase="tematicas" 
                    defaultValue={tematica}
                    onChangeHandler={onChangeHandler} />
                <Button 
                        title="Nuevo Juego" 
                        clase="btn-nuevo-juego"
                        onClickHandler={reiniciarOnClickHandler}
                        />
            </div>
            <div className="ahorcado-container">
                <div className="info-juego">
                    <div>
                        <Imagen nombreImagen={cantidadErrores}/>
                        <HistorialLetras letrasElegidas={letrasElegidas} />
                    </div>
                    <div className='input-container'>
                        <LetraInput 
                            value={letraElegida} 
                            onChangeHandler={letraInputOnChangeHandler} 
                            onClickHandler={letraInputOnClickHandler} 
                            onKeyPressHandler={letraInputOnKeyPressHandler}
                            statusJuego={statusJuego}/>
                        <ArriesgarPalabra 
                            palabraArriesgada={palabraArriesgada} 
                            onChangeHandler={palabraArriesgadaOnChangeHandler} 
                            onClickHandler={palabraArriesgadaOnClickHandler} 
                            onKeyPressHandler={arriesgarPalabraOnKeyPressHandler}
                            statusJuego={statusJuego}/>
                    </div>
                </div>
                <Palabra 
                    palabra={palabraSeleccionada} 
                    letrasElegidas={letrasElegidas} 
                    statusJuego={statusJuego} />
            </div>  
        </div>
    )
}

Ahorcado.propTypes = {
    palabrasDisponibles: PropTypes.object.isRequired
}

export default Ahorcado
