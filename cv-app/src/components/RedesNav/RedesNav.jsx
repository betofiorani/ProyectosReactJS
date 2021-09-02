import React from 'react'
import PropTypes from 'prop-types'
import RedesNavItem from '../RedesNavItem'
import './RedesNav.css';


const renderRedesNav = (red) => {

    const {label, icon, url, type, text } = red
    return (
        <RedesNavItem  key={label} icon={icon} url={url} type={type} label={label} text={text}/>
    )

}

const RedesNav = ({personaContacto}) => {

    return (
        <div className="redes-nav">
            <div>{personaContacto.filter(red=> red.type ==='red').map(red => renderRedesNav(red))}</div>
            <div>{personaContacto.filter(red=> red.type !=='red').map(red => renderRedesNav(red))}</div>
        </div>
        
    )
    
}

RedesNav.propTypes = {
    personaContacto: PropTypes.array.isRequired,
}

export default RedesNav
