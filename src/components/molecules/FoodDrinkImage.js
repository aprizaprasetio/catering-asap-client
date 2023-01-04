import React from 'react'
import PropTypes from 'prop-types'
import { CardMedia } from '@mui/material'

const FoodDrinkImage = ({ image }) => <CardMedia component="img" height="150" image={image} />

FoodDrinkImage.propTypes = {
    image: PropTypes.string.isRequired,
}

export default FoodDrinkImage