import React from 'react'
import { Box, Typography } from '@mui/material'
import { blue } from '@mui/material/colors'
import useFoodDrinkStore from 'factory/store/UseFoodDrinkStore'

const FoodDrinkMenuDynamic = ({ icon }) => {
    const totalFoodDrink = useFoodDrinkStore(state => state.totalFoodDrink)
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
                {totalFoodDrink}
            </Typography>
        </Box>
    )
}

export default FoodDrinkMenuDynamic