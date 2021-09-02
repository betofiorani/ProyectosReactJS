import React from 'react'
import PropTypes from 'prop-types'
import { Link } from '@material-ui/core';
import IconLabel from '../IconLabel/IconLabel';

const RedesNavItem = ({label, icon, url, type, text}) => {
    
    if(type === 'whatsApp') {
        url = url+`phone=549${text}&text=Hola%20Beto!%0AVimos%20tu%20curriculum%20digital%0Anos%20gustaría....`
    }
    
    return (
        <Link className="redes-link" href={url} target="_blank"  rel="noreferrer">
            <IconLabel className="redes-nav-icon" label={icon} />  
        </Link>
    )
}

RedesNavItem.propTypes = {
    icon: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    text: PropTypes.string,
}

export default RedesNavItem
