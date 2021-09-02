import React from 'react';
import {Slideshow} from '../Slider'
import EducationSlide from '../EducationSlide';
import './EducationSlider.css';

const renderEducationSlide = (slide, lugar) => {

    return (
        <EducationSlide key ={`${lugar}-${slide.image}`} url="#" image={slide.image} text={slide.caption} />    
    )

}

const EducationSlider = ({imagenes, lugar}) => {
	return (
		<div className="education-slider">
			<Slideshow controles={true} autoplay={false} velocidad="1000" intervalo="3000">
				{imagenes.map(slide=> renderEducationSlide(slide, lugar))}
			</Slideshow>
		</div>
	);
}
 
export default EducationSlider;