import React from 'react'
import { useNavigate } from 'react-router-dom'
import { MenuItem, ListItemIcon, ListItemText } from '@mui/material'
import PressListItemProps from 'proptypes/molecules/PressListItemProps'

const itemStyle = {
    borderRadius: 3,
}

const PressListItem = ({ href, onClick = undefined, icon, content }) => {
    const navigate = useNavigate()

    return (
        <MenuItem onClick={onClick ?? (() => navigate(href))} sx={itemStyle} >
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText>{content}</ListItemText>
        </MenuItem >
    )
}

PressListItem.propTypes = PressListItemProps

export default PressListItem