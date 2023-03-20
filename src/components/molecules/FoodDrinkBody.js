import React from 'react'
import { CardContent, Typography, Grid } from '@mui/material'
import { formatIDR } from 'commands/application/priceCommand'
import FoodDrinkBodyProps from 'proptypes/molecules/FoodDrinkBodyProps'

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

const FoodDrinkBody = ({ name, price, onClick }) => {
    return (
        <CardContent onClick={onClick} component={Grid} container {...cardConfig}>
            <Typography variant="h3" sx={titleStyle}>{name}</Typography>
            <Typography variant="subtitle1" sx={priceStyle}>{formatIDR(price)}</Typography>
        </CardContent>
    )
}

FoodDrinkBody.propTypes = FoodDrinkBodyProps

export default FoodDrinkBody