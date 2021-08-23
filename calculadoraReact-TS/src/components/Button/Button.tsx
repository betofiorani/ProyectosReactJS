// importar React
import React, {FC} from 'react';

// importar CSS
import './Button.css'

export type ButtonClickHandler = (nombreParamCualquiera: string) => void


type Props = {
    type?: string,
    text: string,
    clickHandler: ButtonClickHandler
}
// Componente funcional
const Button: FC <Props> = ({type, text, clickHandler}) => (
        <button className={type} onClick={ () => clickHandler(text)}>
            <span>{text}</span>
        </button>
    )

// Exportación del componente para su consumo desde otro componente
export default Button;