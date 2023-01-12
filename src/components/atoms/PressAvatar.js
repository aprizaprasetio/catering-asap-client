import React from 'react'
import { IconButton, Avatar } from '@mui/material'
import PressAvatarProps from 'proptypes/atoms/PressAvatarProps'

const buttonStyle = {
    width: 50,
    height: 50,
}

const PressAvatar = ({ onClick, children }) => {
    return (
        <IconButton onClick={onClick} sx={buttonStyle} LinkComponent={Avatar}>
            <Avatar>{children}</Avatar>
        </IconButton>
    )
}

PressAvatar.propTypes = PressAvatarProps

export default PressAvatar