import React from 'react'
import PropTypes from 'prop-types'
import imagen1 from '../../img/1.png'
import imagen2 from '../../img/2.png'
import imagen3 from '../../img/3.png'
import imagen4 from '../../img/4.png'
import imagen5 from '../../img/5.png'
import imagen6 from '../../img/6.png'
import imagen7 from '../../img/7.png'
import imagen8 from '../../img/8.png'

const imageByName = {
    1: imagen1,
    2: imagen2,
    3: imagen3,
    4: imagen4,
    5: imagen5,
    6: imagen6,
    7: imagen7,
    8: imagen8

}

const Imagen = ({nombreImagen}) => {
    

    return (
        <div className="imagen">
            <img src={imageByName[nombreImagen]} alt="imagen Ahorcado"/>
        </div>
    )
}

Imagen.propTypes = {
    nombreImagen: PropTypes.number.isRequired,
}

export default Imagen
