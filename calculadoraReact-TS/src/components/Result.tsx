import React, {FC} from 'react';

type Prop = {
    value: string
}
const Result: FC<Prop> = ({ value }) =>  // si pongo entre llaves la propiedad es igual que el destructuring. Sería igual const {value} = props; // destructuring de props.
(
    <div className="result">
        <span>{value}</span>
    </div>    
)

Result.defaultProps = {
    value : "0"
}

export default Result;