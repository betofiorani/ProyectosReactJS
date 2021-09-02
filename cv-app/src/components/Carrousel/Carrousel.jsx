import React from 'react'
import {Carousel} from '3d-react-carousal';
import PropTypes from 'prop-types'

const Carrousel = ({slides, autoplay, interval}) => {
    return (
        <div className="carrousel">
            <Carousel slides={slides} autoplay={autoplay} interval={interval}/>
        </div>
    )
}

Carrousel.propTypes = {
    slides: PropTypes.array.isRequired,
    autoplay: PropTypes.bool.isRequired,
    interval: PropTypes.number.isRequired,
}

export default Carrousel
