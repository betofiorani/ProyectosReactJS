import React from 'react'
import PropTypes from 'prop-types'
import ColorBox from '../ColorBox'
import './Interests.css'

const Interests = ({title, intereses}) => {

    const insterestNames = Object.keys(intereses)

    const renderInterest = (interes, intereses) => {
        
        return (
            <div key={interes}>
                <ColorBox title={interes} icon={interes} classes={interes}/>
                {renderInterestList(intereses[interes],interes)}
            </div>
        )
    }

    const renderInterestList = (items,interes) => {

        return Object.keys(items).map(item=>renderInterestListItem(items, item, interes))

    }

    const renderInterestListItem = (items,item,interes) => {
        
        return (
            <div key={`div-${interes}-${item}`} className="interest-list-item">
                <label key={`label-${interes}-${item}`}>{item}</label>
                <p key={`p-${interes}-${item}`}>{items[item]}</p>
            </div>
        )
    }

    return (
        <div>
            <h2>{title}</h2>   
            <div className="interest-container">
                { insterestNames.map(i => renderInterest(i, intereses)) }
            </div> 
        </div>
    )
}

Interests.propTypes = {
    title: PropTypes.string.isRequired,
    intereses: PropTypes.object.isRequired,
}

export default Interests
