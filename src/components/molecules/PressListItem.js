import React from 'react'
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import PropTypes from 'prop-types'

const PressListItem = ({ icon, content }) => {
    const buttonStyle = {
        borderRadius: 3,
    }

    return (
        <ListItem sx={{ padding: 0.66 }}>
            <ListItemButton sx={buttonStyle}>
                <ListItemIcon>
                    {icon}
                </ListItemIcon>
                <ListItemText primary={content} />
            </ListItemButton>
        </ListItem>
    )
}

PressListItem.propTypes = {
    icon: PropTypes.element.isRequired,
    content: PropTypes.string.isRequired,
}

export default PressListItem