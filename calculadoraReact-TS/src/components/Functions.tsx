// importar React
import React, {FC} from 'react';
import Button, {ButtonClickHandler} from './Button/Button';

// Componente funcional
type Props = {
    onClearContent: ButtonClickHandler,
    onDelete: ButtonClickHandler
}
const Functions: FC<Props> = ({onClearContent, onDelete}) => (
        <section className="functions">
            <Button type="button-long button-long-text" text="borrar" clickHandler={onClearContent}/>
            <Button type="button-long" text="&larr;" clickHandler={onDelete}/>
            
        </section>
)

// Exportación del componente para su consumo desde otro componente
export default Functions;