import React from 'react'
import PropTypes from 'prop-types'
import IconLabel from '../IconLabel'
import Carrousel from '../Carrousel'
import CustomWindow from '../CustomWindow'

const PortfolioProyect = ({proyecto, index}) => {

    const renderItem = item => {
        return (
            <div key={`item-${item}`} className="proyecto-item">
                <IconLabel label={item} showLabel={true}/>
            </div>
        )
    }

    return (
        <div className="proyecto-container">
            <div className="proyecto-info">
                <h4 className="proyecto-nombre">{proyecto.Nombre}</h4>
                <div className="proyecto-tecnologias">
                    {proyecto['Tecnologías'].map(tecnologia => renderItem(tecnologia))} 
                </div>
                <p className="proyecto-descripcion">{proyecto['Descripción']}</p> 
                <div className="proyecto-sources">
                    <a href={proyecto.Github} target="_blank" rel="noreferrer">
                        <IconLabel label={'GitHub'} />ver Repositorio
                    </a>
                    {proyecto.deploy==="" 
                    ? '' 
                    :
                    <a href={proyecto.deploy} target="_blank" rel="noreferrer">
                        <IconLabel label={'Firebase'} />ver sitio
                    </a>}
                </div>
                <CustomWindow textButton="Ampliar" title={proyecto.Nombre} clase="proyecto" >
                    <div className="proyecto-custom-window">
                        <div>
                            <Carrousel slides={proyecto.imagenes} autoplay={false} interval={1000} />
                        </div>
                        <div className="proyecto-custom-window-info">
                            <div className="proyecto-tecnologias">
                                {proyecto['Tecnologías'].map(tecnologia => renderItem(tecnologia))} 
                            </div>
                            <p className="proyecto-descripcion">{proyecto['Descripción']}</p> 
                            <div className="proyecto-sources">
                            <a href={proyecto.Github} target="_blank" rel="noreferrer">
                                <IconLabel label={'GitHub'} />ver Repositorio
                            </a>
                            {proyecto.deploy==="" 
                            ? '' 
                            :
                            <a href={proyecto.deploy} target="_blank" rel="noreferrer">
                                <IconLabel label={'Firebase'}/>ver sitio
                            </a>}
                        </div>
                        </div>
                    </div>      
                </CustomWindow>
            </div>
            <div className="proyecto-logo">
                <a href={proyecto.deploy} target="_blank" rel="noreferrer">
                    <img className="img-logo" src={`/images/${proyecto.logo === '' ? 'logoGenerico.jpg' : proyecto.logo}`} alt={proyecto.Nombre} />
                </a>
            </div>
        </div>
    )
}

PortfolioProyect.propTypes = {
proyecto: PropTypes.object.isRequired,
}

export default PortfolioProyect
