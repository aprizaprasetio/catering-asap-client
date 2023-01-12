import React from 'react'
import { Link } from 'react-router-dom'
import { MenuItem, ListItemIcon } from '@mui/material'
import ListItemVerticalProps from 'proptypes/molecules/ListItemVerticalProps'

const itemStyle = {
    borderRadius: 3,
    display: 'grid',
    justifyItems: 'center',
    fontSize: 'small',
}

const ListItemVertical = ({ href, icon, children }) => {
    return (
        <MenuItem component={Link} to={href} sx={itemStyle}>
            <ListItemIcon>{icon}</ListItemIcon>
            {children}
        </MenuItem>
    )
}

ListItemVertical.propTypes = ListItemVerticalProps

export default ListItemVertical