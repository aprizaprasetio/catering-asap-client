import React from 'react'
import { Box, Grid } from '@mui/material'
import UserItemMobile from './UserItemMobile'

const UsersWrapperMobile = ({ children }) => {
    return (
        <Box>
            <Grid container spacing={2} columnSpacing={2} >
                {children}
            </Grid>
        </Box>
    )
}

export default UsersWrapperMobile