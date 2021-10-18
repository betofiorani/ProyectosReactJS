import React from 'react'
import PropTypes from 'prop-types'

const LetraPalabra = ({letra,clase}) => {
    
    return (
        <p className={clase}>
            {letra}
        </p>
    )
}

LetraPalabra.propTypes = {
    letra: PropTypes.string,
    clase: PropTypes.string,
}

export default LetraPalabra
