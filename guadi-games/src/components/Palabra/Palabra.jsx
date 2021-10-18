import React from 'react'
import PropTypes from 'prop-types'
import LetraPalabra from '../LetraPalabra'

const Palabra = ({palabra, letrasElegidas, statusJuego}) => {

    const letrasCorrectas = letrasElegidas && Object.keys(letrasElegidas).filter(letra => {
        return letrasElegidas[letra] === true
    })

    const renderLetra = (letra, index, clase) => {
        return <LetraPalabra key={letra+index} letra={letra} clase={clase} />
    }

    return (
        <div className="palabra">    
        {
            palabra && palabra.split(" ").map((palabraInterna,index) => {
                return (
                    <div className='palabraSeparada' key={`palabraSeparada-${index}`}>
                        {
                        palabraInterna.split('').map((letra,index) => {
                            if(letra === ' ') {
                                return renderLetra(' ',index, '')
                            } else {
                            return statusJuego === "inProgress" 
                            ? letrasCorrectas.includes(letra)? renderLetra(letra,index,'letraPalabra') : renderLetra(' ',index,'letraPalabra')
                            : renderLetra(letra,index,'letraPalabra')
                            }
                        })
                        }
                    </div>
                )
            })
        }
        </div>
    )
}

Palabra.propTypes = {
    palabra: PropTypes.array.isRequired,
}

export default Palabra
