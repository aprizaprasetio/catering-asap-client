import React from 'react'
import { ListItem, ListItemIcon } from '@mui/material'
import ReactListItemProps from 'proptypes/molecules/ReactListItemProps'

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

ReactListItem.propTypes = ReactListItemProps

export default ReactListItem