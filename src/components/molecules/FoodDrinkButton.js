import React from 'react'
import { Grid, Button } from '@mui/material'
import FoodDrinkButtonProps from 'proptypes/molecules/FoodDrinkButtonProps'

const buttonStyle = {
    borderRadius: 6,
    width: '100%',
}

const FoodDrinkButton = ({ onClick, children }) => {
    return (
        <Button onClick={onClick} component={Grid} item sx={buttonStyle}>
            {children}
        </Button>
    )
}

FoodDrinkButton.propTypes = FoodDrinkButtonProps

export default FoodDrinkButton