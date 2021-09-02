import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
    FaIdCard,FaUserCheck,FaMapMarkerAlt,FaVenusMars,FaBirthdayCake,
    FaFacebookSquare,FaGithubSquare,FaLinkedin,FaYoutube,FaWhatsappSquare,FaEnvelope,
    FaFutbol,FaGamepad,FaItunesNote,FaFilm,FaUtensils,FaTv,FaFish,FaBook,FaRegClone,
    FaCss3,FaGitSquare,FaGulp,FaJira,FaNpm,FaNodeJs,FaReact,FaTrello,FaYarn,FaCode,
    FaCogs,FaComments,FaDoorOpen,FaFilter,FaHeartbeat,FaLaptopCode,FaRegLightbulb,FaLink,
    FaPeopleCarry,FaPuzzlePiece,FaRecycle,FaSeedling,FaSearch,FaStethoscope,FaThumbsUp,
    FaToggleOn,FaTools,FaUnlock,FaVolumeUp,FaRegGrinAlt,FaBootstrap,FaGrunt,FaMapSigns
} from 'react-icons/fa'
import { DiMongodb,DiJavascript1,DiBitbucket,DiJqueryLogo,DiSass,DiMysql,DiHtml5,DiPhp } from "react-icons/di";
import { IoLogoFirebase } from "react-icons/io5";
import { ImAccessibility, ImUserPlus } from "react-icons/im";
import Flags from 'country-flag-icons/react/3x2'

// export const validValues = [
//     "Nombre","dni","Argentino","Fecha Nacimiento","Estado Civil",
//     "Origen","Residencia", "facebook", "github", "linkedIn", "youTube", "mail", "whatsApp","fútbol","videojuegos","comida", "pesca", "movies", "series","libros",
//     "música","genericIcon","Empatía","CSS3","GIT","GULP","Jira","PHP","ReactJS","NPM","YARN","Trello","GitHub","Comunicación","bootstrap","Javascript","GRUNT",
//     "mongoDB","Bitbucket","jQuery","SASS","MySql","HTML5","Firebase","Aprendizaje","Creatividad","Escucha Activa","Buena Onda","Resolutivo","Trabajo en Equipo",
//     "Pasión","Actitud +","Flexibilidad","Iniciativa","Amabilidad","Liderazgo"
// ];

const labelByName = {
    Nombre: FaUserCheck,
    dni: FaIdCard,
    Argentino: Flags,
    'Fecha Nacimiento': FaBirthdayCake,
    'Estado Civil': FaVenusMars,
    Origen: FaMapMarkerAlt,
    Residencia: FaMapMarkerAlt,
    facebook: FaFacebookSquare,
    github: FaGithubSquare,
    linkedIn: FaLinkedin,
    youTube: FaYoutube,
    whatsApp: FaWhatsappSquare,
    mail: FaEnvelope,
    'fútbol': FaFutbol,
    videojuegos: FaGamepad,
    'música': FaItunesNote,
    movies: FaFilm,
    comida: FaUtensils,
    series: FaTv,
    pesca: FaFish,
    libros: FaBook,
    genericIcon: FaFutbol,
    'Empatía': FaRegClone,
    'CSS3': FaCss3,
    'GIT': FaGitSquare,
    'GULP': FaGulp,
    'Jira': FaJira,
    'PHP': DiPhp,
    'ReactJS':FaReact,
    'NPM': FaNpm,
    'YARN': FaYarn,
    'Trello': FaTrello,
    'GitHub': FaGithubSquare,
    'Comunicación': FaComments,
    'bootstrap':FaBootstrap,
    'Javascript': DiJavascript1,
    'GRUNT': FaGrunt,
    'mongoDB': DiMongodb,
    'Bitbucket': DiBitbucket,
    'jQuery': DiJqueryLogo,
    'SASS': DiSass,
    'MySql': DiMysql,
    'HTML5': DiHtml5,
    'Firebase': IoLogoFirebase,
    'Aprendizaje': FaSeedling,
    'Creatividad': FaRegLightbulb,
    'Escucha Activa': FaStethoscope,
    'Buena Onda': FaRegGrinAlt,
    'Resolutivo': FaTools,
    'Trabajo en Equipo': FaPuzzlePiece,
    'Pasión': FaHeartbeat,
    'Actitud +': FaThumbsUp,
    'Flexibilidad': FaMapSigns,
    'Iniciativa': FaDoorOpen,
    'Amabilidad': ImAccessibility,
    'Liderazgo': ImUserPlus,
    'code': FaCode,
    'nodeJs': FaNodeJs,
    'cogs': FaCogs,
    'filter': FaFilter,
    'search': FaSearch,
    'notebookCode': FaLaptopCode,
    'megafono':FaVolumeUp,
    'reciclado':FaRecycle,
    'link': FaLink,
    'FaPeopleCarry': FaPeopleCarry,
    'FaToggleOn': FaToggleOn,
    'candado': FaUnlock
}

const IconLabel = ({ label, showLabel }) => {

    const LabelByName = labelByName[label] || labelByName['genericIcon'];
    
    const [state, setstate] = useState('')

    const onClickHandlerLabel = (e) => {
        state==='' ? setstate(label) : setstate('')
    }

    return (
        <>
            <LabelByName className={`icon icon-${label}`} onClick={showLabel ? onClickHandlerLabel : null}/> 
            {state==='' ? '' :<span className="span-icon">{state}</span>}
        </>
    )
}

IconLabel.propTypes = {
    //label: PropTypes.oneOf(validValues).isRequired
    label: PropTypes.string.isRequired,
}

export default IconLabel;

