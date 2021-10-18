import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'

const LetraInput = ({value, onChangeHandler, onClickHandler, onKeyPressHandler, statusJuego}) => {
    return (
        <div className="letra">
            <input type="text" className="letra-input" maxLength="1" placeholder="..." onChange={onChangeHandler} onKeyPress={onKeyPressHandler} value={value}/>
            <Button title="Elegir Letra" clase="letra-button" onClickHandler={onClickHandler} disabled={statusJuego !== "inProgress"} />  
        </div>
    )
}

LetraInput.propTypes = {
    onChangeHandler: PropTypes.func.isRequired,
    onClickHandler: PropTypes.func.isRequired,
    onKeyPressHandler: PropTypes.func.isRequired,
}

export default LetraInput
