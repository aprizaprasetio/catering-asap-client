import React from 'react'
import { Box, Typography } from '@mui/material'
import { blue } from '@mui/material/colors'

const FoodDrinkMenuDynamic = ({ icon, quantity }) => {
    return (
        <Box sx={{
            backgroundColor: blue[50],
            paddingY: 1,
            borderRadius: 4,
            width: '100%',
            justifyContent: 'left',
            alignItems: 'left',
            gap: 1,
            position: 'relative'
        }}>
            <Typography sx={{
                fontWeight: 'bold',
                fontSize: 30,
                marginX: 2,
            }}>
                {icon}
                {quantity}
            </Typography>
        </Box>
    )
}

export default FoodDrinkMenuDynamic