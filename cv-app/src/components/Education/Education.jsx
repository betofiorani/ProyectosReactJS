import React from 'react'
import PropTypes from 'prop-types'
import EducationSlider from '../EducationSlider';
import './Education.css';

const Education = ({title, estudios}) => {

    const renderEducationItem = (estudio,index) => {
        let orden="";
        if(index%2 !== 0){
            orden = "reverse";
        }
        return (
        <div key={estudio['título']} className={`estudio ${orden}`}>
            <div className="estudio-info">
                <h4>{estudio['título']}</h4>
                <p className="institucion">{estudio['lugar']}</p>
                <p className="year">{estudio['año']}</p>
            </div>
            <div className="estudio-imagenes">
                <EducationSlider key={`imagenes-${estudio['lugar']}`} lugar={estudio['lugar']} imagenes={estudio['fotos']}/>
            </div>
        </div>
        )
    }

    return (
        <div className="education">
            <h2>{title}</h2>
            {estudios.map((estudio,index)=>renderEducationItem(estudio,index))}
        </div>
    )
}

Education.propTypes = {
    title: PropTypes.string.isRequired,
    estudios: PropTypes.array.isRequired,
}

export default Education
