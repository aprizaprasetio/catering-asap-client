import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { ListItemIcon, MenuItem } from '@mui/material'

const itemStyle = {
    borderRadius: 3,
}

const iconStyle = {
    display: 'grid',
    justifyItems: 'center',
    fontSize: 'small',
    textAlign: 'center',
}

const ListItemVertical = ({ href, icon, children }) => {
    return (
        <MenuItem component={Link} to={href} sx={itemStyle}>
            <ListItemIcon sx={iconStyle}>
                {icon}
                {children}
            </ListItemIcon>
        </MenuItem>
    )
}

ListItemVertical.propTypes = {
    href: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
    children: PropTypes.node.isRequired,
}

export default ListItemVertical