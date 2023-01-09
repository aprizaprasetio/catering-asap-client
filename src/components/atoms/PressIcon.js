import React from 'react'
import { IconButton } from '@mui/material'
import PropTypes from 'prop-types'

const buttonStyle = {
    width: 50,
    height: 50,
}

const PressIcon = ({ children }) => <IconButton sx={buttonStyle}>{children}</IconButton>

PressIcon.propTypes = {
    children: PropTypes.node.isRequired
}

export default PressIcon