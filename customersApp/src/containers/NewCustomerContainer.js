import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import CustomerEdit from '../components/CustomerEdit'
import AppFrame from '../components/AppFrame'
import {insertCustomer} from '../actions/insertCustomer'
import { SubmissionError } from 'redux-form'

class NewCustomerContainer extends Component {
    static propTypes = {
        insertCustomer: PropTypes.func.isRequired,
    }

    handleSubmit = (values) => {
        return this.props.insertCustomer(values).then( r=>{
            if(r.payload && r.payload.error) {
                throw new SubmissionError(r.payload)
            } 
        })
    }

    handleOnSubmitSuccess = () => {
        this.props.history.goBack();
    }

    handleOnBack = () => {
        this.props.history.goBack();
    }

    renderBody = () => {

        return (
                <CustomerEdit 
                    onSubmit={this.handleSubmit}
                    onSubmitSuccess = {this.handleOnSubmitSuccess}
                    onBack={this.handleOnBack}/>
        )
    }

    render() {
        return (
            <div>
                <AppFrame
                    header={`Nuevo Cliente`}
                    body={this.renderBody()}>
                </AppFrame>    
            </div>
        )
    }
}

export default withRouter(connect(null,{insertCustomer})(NewCustomerContainer))