import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { reduxForm, Field } from 'redux-form'
import {Prompt} from 'react-router-dom'
import { setPropsAsInitial } from '../helpers/setPropsAsInitial'
import { accessControl } from '../helpers/accessControl'
import CustomersActions from './CustomersActions'
import { CUSTOMER_VIEW,CUSTOMER_LIST,CUSTOMER_EDIT } from '../constants/permissions'

// validación Global
const validate = values => {
    const error = {
    };
    
    if(!values.name) {
        error.name = "El campo Nombre es requerido"
    }
    if(!values.dni) {
        error.dni = "El campo DNI es requerido"
    }
    if(!values.age) {
        error.age = "El campo Edad es requerido"
    }
    return error;
}

// Validaciones individuales
const isRequired = (value) => !value && 'Este campo es requerido'

const isNumber = (value) => (
    isNaN(Number(value)) && "El campo debe ser un Número"
)

const toNumber = (value) => (
    value && Number(value)
)

const onlyGrow = (value, previousValue, values) => (
    value && (!previousValue ? value: (value > previousValue ? value : previousValue))
)

const toUpper = (value) => value && value.toUpperCase()
const toLower = (value) => value && value.toLowerCase()

class CustomerEdit extends Component {
    
    componentDidMount() {
        if(this.txt) {
            this.txt.focus();
        }
    }
    
    renderField = ({input,meta,type,label,name,withFocus}) => {
        const controls = {...input, value: input['value'] || ""}
        return (
            <div>
                <label htmlFor={name}>{label}</label>
                <input {...controls} 
                    type={!type ? "text" : type}
                    ref={withFocus && (txt => this.txt = txt)}/>
                {
                    meta.touched && meta.error && <span>{meta.error}</span>
                }
            </div>)
    }

    render() {

        const {handleSubmit, submitting, onBack, pristine,submitSucceeded } = this.props
        return (
            <div>
                <h2>Editar Cliente</h2>
                <form onSubmit={handleSubmit}>
                    <Field 
                        withFocus={true}
                        name="name" 
                        component={this.renderField} 
                        type="text" 
                        label="Nombre"
                        parse={toUpper}
                        format={toLower}
                        >
                    </Field>
                    <Field name="dni" 
                        component={this.renderField} 
                        type="text" 
                        label="DNI"
                        validate={[isNumber]}>
                    </Field>
                
                    <Field name="age" 
                        component={this.renderField} 
                        type="number" 
                        label="Edad"
                        validate={[isRequired, isNumber]}
                        parse={toNumber}
                        normalize={onlyGrow}>
                    </Field>
                    <CustomersActions>
                        <button type="submit" disabled={pristine || submitting}>Aceptar</button>
                        <button type="button" disabled={submitting} onClick={onBack}>Cancelar</button>
                    </CustomersActions>
                    <Prompt
                    when={!pristine && !submitSucceeded}
                    message="Se perderán los datos si continua"></Prompt>
                </form>
            </div>
        )
    }

}

CustomerEdit.propTypes = {
    name: PropTypes.string,
    dni: PropTypes.string,
    age: PropTypes.string,
    onBack: PropTypes.func.isRequired,
}

export default accessControl([CUSTOMER_EDIT,CUSTOMER_VIEW,CUSTOMER_LIST])(setPropsAsInitial(reduxForm({form: 'CustomerEdit',validate: validate})(CustomerEdit)))
