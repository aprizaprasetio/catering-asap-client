import React from 'react'
import PropTypes from 'prop-types'
import { ListItem, ListItemIcon } from '@mui/material'

const ReactListItem = ({ content, icon }) => {
    return (
        <ListItem disablePadding>
            <ListItemIcon>
                {icon}
                {content}
            </ListItemIcon>
        </ListItem>
    )
}

ReactListItem.propTypes = {
    content: PropTypes.number.isRequired,
    icon: PropTypes.element.isRequired,
}

export default ReactListItem