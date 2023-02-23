import * as React from 'react'
import { Table, TableBody, Paper, TableContainer, TableHead, } from '@mui/material'
import FoodDrinkCardMobile from 'components/molecules/FoodDrinkCardMobile'
import { Box } from '@mui/system'


const FoodDrinkCardMobileContainer = ({ children }) => {

    return (

        <Box sx={{
            display: {
                xs: 'flex',
                lg: 'none'
            }
        }} >
            <Paper sx={{
                pb: 10
            }}>
                {children}
            </Paper>
        </Box>

    )
}


export default FoodDrinkCardMobileContainer