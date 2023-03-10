import * as React from 'react'
import { Paper } from '@mui/material'
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