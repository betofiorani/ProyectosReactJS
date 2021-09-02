import React from 'react'
import PropTypes from 'prop-types'
import CustomWindow from '../CustomWindow'
import { renderParrafo } from '../../utils/utils';

const ExperienciasItemList = ({experiencia}) => {

    return (
        <div className="experiencia-item">
            <div className="experiencia-info">
                <h4><span>{experiencia.fecha}</span>{` - ${experiencia.puesto}`}</h4>
                <div className="experiencia-empresa">
                    <p className="nombre-empresa">{experiencia.empresa}</p>
                    <a target="_blank" rel="noreferrer" href={experiencia.web}>ver sitio</a>
                </div>
                <div>
                    <p className="experiencia-descripcion">{experiencia.responsabilidad.corta}</p>
                    <CustomWindow textButton="ampliar" title={`${experiencia.puesto} - ${experiencia.empresa}`} contenido={experiencia.puesto} clase="experiencia-detalle">
                        <div>
                            <p className="experiencia-descripcion">{experiencia.responsabilidad.corta}</p>
                            {experiencia.responsabilidad.larga.map((parrafo, index) => renderParrafo(parrafo, index,'parrafo-ampliada'))
                            }
                        </div>
                    </CustomWindow>
                </div>
            </div>
            <div className="experiencia-logo">
                <img src={`/images/${experiencia.logo}`} alt={experiencia.empresa}/>
            </div>
        </div>
    )
}

ExperienciasItemList.propTypes = {
    experiencia: PropTypes.object.isRequired,
}

export default ExperienciasItemList
