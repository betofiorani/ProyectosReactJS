import React from 'react'
import PropTypes from 'prop-types'

const Button = ({title, clase, onClickHandler, disabled}) => {
    return (
        <div className={`${clase}-container`}>
            <input type="button" className={clase} onClick={onClickHandler} value={title} disabled={disabled}/>
        </div>
    )
}

Button.propTypes = {
    title: PropTypes.string.isRequired,
    clase: PropTypes.string.isRequired,
    onClickHandler: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
}

export default Button
