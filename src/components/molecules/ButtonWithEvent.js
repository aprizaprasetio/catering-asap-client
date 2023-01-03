import React from 'react'
import { Button } from '@mui/material'
import PropTypes from 'prop-types'

const buttonStyle = {
    maxWidth: 250,
    borderRadius: 14,
}

const ButtonWithEvent = ({ config }) => <Button variant="contained" {...config} style={buttonStyle}>{config.label}</Button>

ButtonWithEvent.propTypes = {
    config: PropTypes.objectOf(
        PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
    ),
}

export default ButtonWithEvent