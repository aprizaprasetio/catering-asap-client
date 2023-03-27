import React from 'react'
import { CardContent, Typography, Grid, Chip } from '@mui/material'
import { LocalBar, LunchDining } from '@mui/icons-material'
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

const typeMenu = ['Makanan', 'Minuman']

const FoodDrinkBody = ({ name, price, type, onClick }) => {
    return (
        <CardContent onClick={onClick} component={Grid} container {...cardConfig}>
            <Typography variant="h3" sx={titleStyle}>{name}</Typography>
            <Typography variant="subtitle1" sx={priceStyle}>{formatIDR(price)}</Typography>
            <Chip icon={type ? <LocalBar /> : <LunchDining />} label={typeMenu[type]} color={type ? 'info' : 'warning'} sx={{
                width: 'fit-content',
                fontSize: 10,
            }} />
        </CardContent>
    )
}

FoodDrinkBody.propTypes = FoodDrinkBodyProps

export default FoodDrinkBody