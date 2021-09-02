import React from 'react'
import PropTypes from 'prop-types'
import RedesNav from '../RedesNav';
import './Header.css'

const Header = ({personaContacto}) => {
    return (
        <div className="header">
            <RedesNav personaContacto={personaContacto} />
            <div className="header-logo">
                <img className="img-logo" src="/images/logoHorizontal.png" alt="logo" />
            </div>
            <div className="header-weather"></div>
        </div>
    )
}

Header.propTypes = {
    personaContacto: PropTypes.array.isRequired,
}

export default Header
