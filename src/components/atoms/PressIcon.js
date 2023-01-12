import React from 'react'
import { IconButton } from '@mui/material'
import PressIconProps from 'proptypes/atoms/PressIconProps'

const buttonStyle = {
    width: 50,
    height: 50,
}

const PressIcon = ({ children }) => <IconButton sx={buttonStyle}>{children}</IconButton>

PressIcon.propTypes = PressIconProps

export default PressIcon