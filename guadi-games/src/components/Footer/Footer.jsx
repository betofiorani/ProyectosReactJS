import React from 'react'
import PropTypes from 'prop-types'

const Footer = ({clase, legales}) => {
    return (
        <div className={clase}>
            <p>{legales}</p>
        </div>
    )
}

Footer.propTypes = {
    clase: PropTypes.string,
    legales: PropTypes.string.isRequired,
}

export default Footer
