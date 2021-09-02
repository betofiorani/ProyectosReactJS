import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Flags from 'country-flag-icons/react/3x2'
import {FaHeart} from 'react-icons/fa'
import "@fontsource/roboto";
import foto from './../../img/foto.jpg'
import './PersonalData.css';
import ButtonOutlined from '../Button/ButtonOutlined';
import Carrousel from '../Carrousel';
import PersonalListItem from '../PersonalListItem';
import { calcularEdad } from '../../helpers/helpers';
import RedesNav from '../RedesNav';
import CustomWindow from '../CustomWindow';

const PersonalData = ({title, persona, personaContacto} ) => {

    const {nombre, apodo, dni, fecNac, estadoCivil, origen, residencia, profesion} = persona
    
    const [edad, setEdad] = useState()

    const renderEdad = ()=> setEdad(calcularEdad(fecNac));

    return (
        <div className="personal-data">
            <div className="user">
                <div className="foto-user">
                    <img className="img" src={foto} alt={apodo} />
                    <div className="foto-info">
                        <p>{apodo}</p>
                        <span>{profesion}</span>
                    </div>
                </div>
                <RedesNav personaContacto={personaContacto} />
            </div>
            <div className="data-user">
                <h2>{title}</h2>
                <PersonalListItem label="Nombre" showLabel={true} span="string" body={<p>{`${nombre}`}<span className="operator string">===</span>{`"${apodo}"`}</p>}/>
                <PersonalListItem label="dni" showLabel={true} span="int" body={<p>{dni}</p>}/>
                <div className="persona-list-item">
                    <div className="icon-label">
                        <Flags.AR className="flag icon"/>
                        <label className="label">Argentino<span className="boolean">(bool)</span></label>
                    </div>
                    <p className="orange">true</p>
                </div>
                <PersonalListItem label="Fecha Nacimiento" showLabel={true} span="date" body={
                    <div className="flex edad">
                        <p>{`${fecNac}  =>`}</p>
                        <ButtonOutlined className="button" onClickHandler={renderEdad} disabled={edad} text="Calcular Edad"/>
                        <span className="mostrar-edad">{edad && `${edad} años`}</span>
                    </div>}/>
                <PersonalListItem label="Estado Civil" showLabel={true} span="string" body={<p>{estadoCivil}<span className="operator string">&&</span><FaHeart className="corazon"/></p>}/>
                <PersonalListItem 
                    label="Origen" 
                    showLabel={true} 
                    span="string" 
                    body={
                        <div className="flex">
                            <p>{Object.keys(origen)[0]}</p>
                            <CustomWindow textButton="ver fotos" title={Object.keys(origen)[0]} contenido={origen} clase="origen">
                                <Carrousel slides={origen[Object.keys(origen)[0]]} autoplay={false} interval={1000} />
                            </CustomWindow>
                        </div>}/>
                <PersonalListItem 
                    label="Residencia" 
                    showLabel={true} 
                    span="string" 
                    body={
                        <div className="flex">
                            <p>{Object.keys(residencia)[0]}</p>
                            <CustomWindow textButton="ver fotos" title={Object.keys(residencia)[0]} contenido={residencia} clase="residencia">
                                <Carrousel slides={residencia[Object.keys(residencia)[0]]} autoplay={false} interval={1000} />
                            </CustomWindow>
                        </div>}/>
            </div>
        </div>
    )
}

PersonalData.propTypes = {
    title: PropTypes.string.isRequired,
    persona: PropTypes.object.isRequired,
}

export default PersonalData
