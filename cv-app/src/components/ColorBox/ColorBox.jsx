import React from 'react'
import PropTypes from 'prop-types'
import IconLabel from '../IconLabel'
import './ColorBox.css'

const ColorBox = ({title , icon, classes}) => {
    
    return (
        <div className={`color-box ${classes}`}>
            <IconLabel label={icon}/>
            <h3 className={`title-${classes}`}>{title}</h3>
        </div>
    )
}

ColorBox.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    classes: PropTypes.string,
}

export default ColorBox
