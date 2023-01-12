import React from 'react'
import { CardContent, Typography, Grid } from '@mui/material'
import FoodDrinkBodyProps from 'proptypes/molecules/FoodDrinkBodyProps'

const currency = Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
})

const cardConfig = {
    direction: 'column',
    justifyContent: 'space-between',
}

const titleStyle = {
    fontSize: 14,
}

const priceStyle = {
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    fontSize: 16,
}

const FoodDrinkBody = ({ name, price }) => {
    return (
        <CardContent component={Grid} container {...cardConfig}>
            <Typography variant="h3" sx={titleStyle}>{name}</Typography>
            <Typography variant="subtitle1" sx={priceStyle}>{currency.format(price)}</Typography>
        </CardContent>
    )
}

FoodDrinkBody.propTypes = FoodDrinkBodyProps

export default FoodDrinkBody