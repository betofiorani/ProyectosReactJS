import React from 'react'
import PropTypes from 'prop-types'
import CustomerListItem from './CustomerListItem'
import { accessControl } from '../helpers/accessControl'
import { CUSTOMER_LIST, CUSTOMER_VIEW } from '../constants/permissions'

const CustomersList = ({customers, urlPath}) => {
    return (
        <div className="customers-list">
            {customers.map(customer =>(
                <CustomerListItem
                    key={customer.dni}
                    dni={customer.dni}
                    name={customer.name}
                    editAction={'Editar'}
                    delAction={'Eliminar'}
                    urlPath={urlPath}>
                </CustomerListItem>
            ))}
        </div>
    )
}

CustomersList.propTypes = {
    customers: PropTypes.array.isRequired,
    urlPath: PropTypes.string.isRequired,
}

export default accessControl([CUSTOMER_LIST,CUSTOMER_VIEW])(CustomersList)
