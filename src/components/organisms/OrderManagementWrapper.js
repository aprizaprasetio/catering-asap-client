import { Grid } from '@mui/material'
import React from 'react'

const OrderManagementWrapper = ({ children }) => {
    return (
        <Grid container spacing={1} padding={1}>
            {children}
        </Grid>
    )
}

export default OrderManagementWrapper