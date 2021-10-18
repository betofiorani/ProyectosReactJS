import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'

const ArriesgarPalabra = ({clase, onClickHandler, palabraArriesgada, onChangeHandler, onKeyPressHandler , statusJuego}) => {
    return (
        <div className={`arriesgar-palabra`}>
            <input type="text" name="arriesgar-palabra" className={clase} placeholder='Arriesgar palabra...' value={palabraArriesgada} onChange={onChangeHandler} onKeyPress={onKeyPressHandler} />
            <Button title="Arriesgar" clase="button btnArriesgar" onClickHandler={onClickHandler} disabled={statusJuego !== "inProgress"}/>
        </div>
    )
}

ArriesgarPalabra.propTypes = {
    onClickHandler: PropTypes.func.isRequired,
    onChangeHandler: PropTypes.func.isRequired,
    palabraArriesgada: PropTypes.string,
    clase: PropTypes.string,
}

export default ArriesgarPalabra
