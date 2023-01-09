import React from 'react'
import PropTypes from 'prop-types'
import { CardContent, Typography, Grid } from '@mui/material'

const currency = Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
})

const cardConfig = {
    direction: {
        xs: 'column',
        md: 'row',
    },
    justifyContent: 'space-between',
}

const titleStyle = {
    fontSize: 16,
    fontWeight: 'bold',
}

const priceStyle = {
    fontFamily: 'sans-serif',
    fontSize: 14,
}

const FoodDrinkBody = ({ name, price }) => {
    return (
        <CardContent component={Grid} container {...cardConfig}>
            <Typography variant="h3" sx={titleStyle}>{name}</Typography>
            <Typography variant="subtitle1" sx={priceStyle}>{currency.format(price)}</Typography>
        </CardContent>
    )
}

FoodDrinkBody.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
}

export default FoodDrinkBody