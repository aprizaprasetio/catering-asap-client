import React from 'react'
import { TextField } from '@mui/material'

const TextFieldFoodDrinkAdmin = ({ config }) => {
    const apriza = {
        nama: 'Apriza',
        umur: 19,
    }
    // const { nama, umur } = apriza
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