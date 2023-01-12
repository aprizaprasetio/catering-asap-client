import React from 'react'
import { FormControl, FormLabel, RadioGroup } from '@mui/material'
import RadioFieldProps from 'proptypes/molecules/RadioFieldProps'

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

RadioField.propTypes = RadioFieldProps

export default RadioField