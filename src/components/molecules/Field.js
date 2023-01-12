import React from 'react'
import { TextField, FormControl } from '@mui/material'
import FieldProps from 'proptypes/molecules/FieldProps'

const helperConfig = {
    sx: {
        color: 'error.main',
    },
}

const Field = ({ config }) => {
    return (
        <FormControl>
            <TextField
                FormHelperTextProps={helperConfig}
                variant="standard"
                sx={{ color: 'error.main' }}
                error={!!config.helperText}
                {...config}
            />
        </FormControl>
    )
}

Field.propTypes = FieldProps

export default Field