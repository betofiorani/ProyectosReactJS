import React from 'react'
import PropTypes from 'prop-types'
import ColorBox from '../ColorBox'
import './Habilidades.css'




const Habilidades = ({title, habilidades}) => {
    
    const renderTipoHabilidad = (tipo, habilidades) => {
        
        return (
            <div key={tipo}>
                <h5 className="subtitle">{tipo}</h5>
                <div className="skill-container">
                    {habilidades[tipo].map(skill => renderSkills(skill))}
                </div>
            </div>
        )
    }
    
    const renderSkills = (skill) => {
        
        return <ColorBox key={skill.label} title={skill.label} icon={skill.label} classes={'skills-colorBox'}/>
    
    }

    return (
        <div className="habilidades">
            <h2>{title}</h2>  
            {Object.keys(habilidades).map((tipo) => renderTipoHabilidad(tipo, habilidades))}
        </div>
    )
}

Habilidades.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Habilidades
