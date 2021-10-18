import React from 'react'
import PropTypes from 'prop-types'
import { FaCheck, FaTimes } from "react-icons/fa";

const HistorialLetras = ({letrasElegidas}) => {

    const renderLetraElegida = (letra, index) => {
        
        return (
            <div key={`${letra}-${index}`} className="letraElegidaItem">
                <span className="letraElegida">{letra}</span>
                <span className={`statusLetra ${letrasElegidas[letra]?'verde':'rojo'}`}>{letrasElegidas[letra] ? <FaCheck /> : <FaTimes />}</span>
            </div>
        )
    }

    return (
        <div className="historial-letras">
            {letrasElegidas && Object.keys(letrasElegidas).map((letra, index) => renderLetraElegida(letra,index))}    
        </div>
    )
}

HistorialLetras.propTypes = {
    letrasElegidas: PropTypes.object.isRequired, 

}

export default HistorialLetras
