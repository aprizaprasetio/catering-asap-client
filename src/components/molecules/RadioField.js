import React from 'react'
import { FormControl, FormLabel, RadioGroup } from '@mui/material'
import PropTypes from 'prop-types'

const RadioField = ({ config, children }) => {
    return (
        <FormControl>
            <FormLabel>{config.label}</FormLabel>
            <RadioGroup
                row
                name={config.name}
                value={config.value}
                onChange={config.onChange}
            >
                {children}
            </RadioGroup>
        </FormControl >
    )
}

RadioField.propTypes = {
    config: PropTypes.shape({
        name: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
    }),
}

export default RadioField