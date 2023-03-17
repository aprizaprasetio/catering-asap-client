import React from 'react'
import { CardMedia } from '@mui/material'
import FoodDrinkImageProps from 'proptypes/molecules/FoodDrinkImageProps'

const FoodDrinkImage = ({ image, onClick }) => <CardMedia onClick={onClick} component="img" height="150" image={image} />

FoodDrinkImage.propTypes = FoodDrinkImageProps

export default FoodDrinkImage