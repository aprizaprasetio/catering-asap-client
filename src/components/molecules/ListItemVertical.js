import React from 'react'
import { Link } from 'react-router-dom'
import { MenuItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import ListItemVerticalProps from 'proptypes/molecules/ListItemVerticalProps'

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

const ListItemVertical = ({ href, icon, children }) => {
    return (
        <MenuItem component={Link} to={href} sx={itemStyle}>
            <ListItemIcon sx={iconStyle}>{icon}</ListItemIcon>
            <ListItemText>{children}</ListItemText>
        </MenuItem>
    )
}

ListItemVertical.propTypes = ListItemVerticalProps

export default ListItemVertical