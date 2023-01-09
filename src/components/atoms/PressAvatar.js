import React from 'react'
import { IconButton, Avatar } from '@mui/material'
import PropTypes from 'prop-types'

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

PressAvatar.propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
}

export default PressAvatar