import React from 'react'
import { Grid } from '@mui/material'

const FormOrderVerifyDekstopWrapper = ({ children }) => {
    return (
        <Grid container spacing={1} paddingX={1} paddingY={3} maxHeight={600} overflow="auto">
            {children}
        </Grid>
    )
}

export default FormOrderVerifyDekstopWrapper