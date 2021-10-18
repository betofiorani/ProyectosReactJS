import PropTypes from 'prop-types'

const ListaDesplegable = ({label, opciones, id, clase, onChangeHandler, defaultValue}) => {
    
    const renderOptions = opcion => {
        return <option key={opcion.name} value={opcion.value}>{opcion.name}</option>
    }
    
    return (
        <div className={`${clase}-container`}>
            {label && <label>{label}</label>}
            <select id={id} key={id} className={clase} onChange={onChangeHandler} defaultValue={defaultValue}>
                {opciones.map(opcion => renderOptions(opcion))}   
            </select>
        </div>
    )
}

ListaDesplegable.propTypes = {
    label: PropTypes.string,
    clase: PropTypes.string,
    selected: PropTypes.string,
    onChangeHandler: PropTypes.func,
    opciones: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        defaultValue: PropTypes.bool,
    }))
}


export default ListaDesplegable
