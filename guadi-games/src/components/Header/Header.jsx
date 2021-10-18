import React from 'react'
import PropTypes from 'prop-types'
import './Header.css'


const Header = ({title,logo}) => {
    return ( 
        <div className="contenido-header">
            <div>
                <img className='logo' src={logo} alt="Guadi Games"/>
            </div>
            <div className="redesNav"></div>
        </div>
    )
}

Header.propTypes = {
    title: PropTypes.string,
}

export default Header
