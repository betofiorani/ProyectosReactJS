import React from 'react'
import PropTypes from 'prop-types'
import {Slide, TextoSlide} from '../Slider'

const EducationSlide = ({url, image, text}) => {
    return (
        <Slide>
            <a href={url}>
                <img src={`/images/${image}`} alt={text}/>
            </a>
            <TextoSlide>
                <p>{text}</p>
            </TextoSlide>
        </Slide>
    )
}

EducationSlide.propTypes = {
    url: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    text: PropTypes.string,
}

export default EducationSlide
