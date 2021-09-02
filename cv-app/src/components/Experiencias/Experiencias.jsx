import React from 'react'
import PropTypes from 'prop-types'
import ExperienciasItemList from '../ExperienciasItemList'
import './Experiencias.css'

const Experiencias = ({title, experiencias}) => {

    const renderExperiencia = experiencia => {

        return (
            <ExperienciasItemList key={experiencia.empresa} experiencia={experiencia}/>
        )
    }

    return (
        <div className="experiencias-container">
            <h2>{title}</h2> 
            {experiencias.map((experiencia)=>renderExperiencia(experiencia))}   
        </div>
    )
}

Experiencias.propTypes = {
    title: PropTypes.string.isRequired,
    experiencias: PropTypes.array.isRequired,
}

export default Experiencias
