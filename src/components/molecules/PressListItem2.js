import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import PressListItem2Props from 'proptypes/molecules/PressListItem2Props'

const itemStyle = {
    borderRadius: 3,
    display: 'grid',
    alignItems: 'center',
    justifyItems: 'center',
    textAlign: 'center',
    fontSize: 'small',
}

const iconStyle = {
    display: 'flex',
    justifyContent: 'center',
}

const PressListItem2 = ({ icon, content }) => {
    const navigate = useNavigate()

    return (
        <ListItem disablePadding>
            <ListItemButton onClick={() => navigate('#')} sx={itemStyle}>
                <ListItemIcon sx={iconStyle}>{icon}</ListItemIcon>
                <ListItemText>{content}</ListItemText>
            </ListItemButton>
        </ListItem>
    )
}

PressListItem2.propTypes = PressListItem2Props

export default PressListItem2