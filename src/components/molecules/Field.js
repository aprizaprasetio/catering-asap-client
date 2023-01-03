import React from 'react'
import { TextField, FormControl } from '@mui/material'
import PropTypes from 'prop-types'

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

Field.propTypes = {
    config: PropTypes.shape({
        name: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
        helperText: PropTypes.string,
    }),
}

export default Field