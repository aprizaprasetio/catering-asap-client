import React from 'react'
import { Button } from '@mui/material'
import ButtonWithEventProps from 'proptypes/molecules/ButtonWithEventProps'

const buttonStyle = {
    maxWidth: 250,
    borderRadius: 14,
}

const ButtonWithEvent = ({ config }) => <Button variant="contained" {...config} style={buttonStyle}>{config.label}</Button>

ButtonWithEvent.propTypes = ButtonWithEventProps

export default ButtonWithEvent