import React from 'react'
import PropTypes from 'prop-types'
import CustomWindow from '../CustomWindow';
import './Cursos.css';
import { renderParrafo } from '../../utils/utils';

const Cursos = ({title, cursos}) => {



    const renderEducationItem = (curso,index) => {
        let orden="";
        if(index%2 !== 0){
            orden = "reverse";
        }
        return (
        <div key={curso['título']} className={`curso ${orden}`}>
            <div className="curso-info">
                <h4><span className="span-year">{curso['año']}</span>{curso['título']}</h4>
                <p className="institucion">
                    <img className="institucion-logo" src={`/images/${curso['logo']}`} alt={curso['lugar']} />
                    <a href={curso['link']} target="_blank" rel="noreferrer">ver curso</a>
                </p>
                <div className="flex curso-detalle">
                    <p className="duracion">{curso['duracion']}</p>|<p className="profesor">{curso['profesor']}</p>
                </div>
                <div className="aprendizaje">{curso['aprendizaje'].map((parrafo,index) => renderParrafo(parrafo,index,'aprendizaje-parrafo'))}</div>
            </div>
            <div className="curso-imagenes">
                <img src={`/images/${curso['certificado']}`} alt={curso['título']} key={`imagenes-${curso['lugar']}`} />    
                <CustomWindow textButton="Ampliar" title={curso['título']} clase="curso" >
                    <img className="img-zoom" src={`/images/${curso['certificado']}`} alt={curso['título']} key={`imagenes-${curso['lugar']}`} />    
                </CustomWindow>
                
            </div>
        </div>
        )
    }

    return (
        <div className="cursos">
            <h2>{title}</h2>
            {cursos.map((curso,index)=>renderEducationItem(curso,index))}
        </div>
    )
}

Cursos.propTypes = {
    title: PropTypes.string.isRequired,
    cursos: PropTypes.array.isRequired,
}

export default Cursos
