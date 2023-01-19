import React from 'react'
import { MenuItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import PressListItemProps from 'proptypes/molecules/PressListItemProps'

const itemStyle = {
    borderRadius: 3,
}

const PressListItem = ({ onClick, icon, content }) => {
    return (
        <MenuItem component={ListItemButton} onClick={onClick} sx={itemStyle}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText>{content}</ListItemText>
        </MenuItem>
    )
}

PressListItem.propTypes = PressListItemProps

export default PressListItem