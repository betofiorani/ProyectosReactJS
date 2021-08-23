// importar React
import React, {FC} from 'react';
import Button, {ButtonClickHandler} from './Button/Button';

// Componente funcional
const operators = ["+","-","*","/","="];



const renderOperators = (onClickOperation:ButtonClickHandler , onClickEqual: ButtonClickHandler ) => {

    const renderOperator = ((operator:string) => {
        let onClick; 
        if(operator !== "="){
            onClick = onClickOperation;
        } else {
            onClick = onClickEqual;
        }   
        return <Button 
                    key={operator} 
                    text={operator} 
                    clickHandler={onClick}
                />     
    })
    return operators.map(renderOperator);

}

type Props = {
    onClickOperation: ButtonClickHandler,
    onClickEqual: ButtonClickHandler
}
const MathOperations: FC <Props> = ({onClickOperation, onClickEqual}) => (
        <section className="math-operations">
            {renderOperators(onClickOperation, onClickEqual)}
        </section>
    )

// Exportación del componente para su consumo desde otro componente
export default MathOperations;