import React from 'react'
import { Box, Grid } from '@mui/material'
import UserItemMobile from './UserItemMobile'

const UsersWrapperMobile = ({ children }) => {
    const display = {
        xs: 'block',
        md: 'none'
    }

    return (
        <Box sx={{ display: display }}>
            <Grid container spacing={2}>
                {children}
            </Grid>
        </Box>
    )
}

export default UsersWrapperMobile