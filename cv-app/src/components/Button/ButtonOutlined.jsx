import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button';

const ButtonOutlined = ({className, onClickHandler, disabled, text}) => {
    return (
        <Button className={className} variant="outlined" color="primary" onClick={onClickHandler} disabled={disabled}>{text}</Button>    
    )
}

ButtonOutlined.propTypes = {
    className: PropTypes.string.isRequired,
    onClickHandler: PropTypes.func.isRequired,
    disabled: PropTypes.string,
    text: PropTypes.string.isRequired,
}

export default ButtonOutlined
