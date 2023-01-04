import React from 'react'
import { Grid } from '@mui/material'
import FoodDrinkItemUser from './FoodDrinkItemUser'

const listConfig = {
    spacing: 2,
    columns: {
        xs: 3,
        sm: 8,
        md: 12,
        lg: 16,
    },
}

const FoodDrinkList = () => {
    return (
        <Grid container {...listConfig}>
            {Array.from(Array(10)).map((_, index) => (
                <FoodDrinkItemUser key={index} />
            ))
            }
        </Grid >
    )
}

export default FoodDrinkList