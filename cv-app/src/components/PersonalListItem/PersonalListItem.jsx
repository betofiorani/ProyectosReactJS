import React from 'react'
import PropTypes from 'prop-types'
import IconLabel from '../IconLabel/IconLabel'

const PersonalListItem = ({label, showLabel, span, body}) => {
    
    return (
        
        <div className="persona-list-item">
                <div className="icon-label">
                    <IconLabel label={label} />
                    {showLabel && <label className="label">{label}
                        <span className={span}>{`(${span})`}</span>
                    </label>}
                </div>
                {body}
        </div>
        
    )
}

PersonalListItem.propTypes = {
    label: PropTypes.string.isRequired,
    span: PropTypes.string.isRequired,
    body: PropTypes.element.isRequired,
    showLabel: PropTypes.bool,
}

export default PersonalListItem
