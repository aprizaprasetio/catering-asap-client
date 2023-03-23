import React from 'react'
import { TextField } from '@mui/material'

const TextFieldFoodDrinkAdmin = ({ config }) => {
    return (
        <TextField size="small" fullWidth id="outlined-basic" margin='dense' variant="outlined"
            FormHelperTextProps={{
                sx: {
                    color: 'error.main',
                },
            }}
            {...config}
        />
    )
}

export default TextFieldFoodDrinkAdmin