import React from 'react'
import PropTypes from 'prop-types'
import PortfolioProyect from '../PortfolioProyect'
import './Portfolio.css'

const Portfolio = ({title, portfolio}) => {

    const renderProyecto = (proyecto, index) => {
        console.log("desde renderProyecto",proyecto)
        return (
                <PortfolioProyect key={`proyecto${index}`} proyecto={proyecto} index={index} />
        )
    }

    return (
        <div className="portfolio container">
            <h2>{title}</h2>
            <div className="proyectos">
                {portfolio.map((proyecto, index) => renderProyecto(proyecto, index))}
            </div>
        </div>
    )
}

Portfolio.propTypes = {
    title: PropTypes.string.isRequired,
    portfolio: PropTypes.array.isRequired,
}

export default Portfolio
