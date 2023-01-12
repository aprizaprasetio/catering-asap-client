import React from 'react'
import { MenuItem, ListItemButton, ListItemIcon } from '@mui/material'
import PressListItemProps from 'proptypes/molecules/PressListItemProps'

const PressListItem = ({ icon, content }) => {
    const buttonStyle = {
        borderRadius: 3,
    }

    return (
        <MenuItem component={ListItemButton} sx={buttonStyle}>
            <ListItemIcon>
                {icon}
            </ListItemIcon>
            {content}
        </MenuItem>
    )
}

PressListItem.propTypes = PressListItemProps

export default PressListItem