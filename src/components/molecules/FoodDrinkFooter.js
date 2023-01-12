import React from 'react'
import { CardActions, Grid } from '@mui/material'
import FoodDrinkFooterProps from 'proptypes/molecules/FoodDrinkFooterProps'

const footerConfig = {
    direction: {
        xs: 'column',
        sm: 'row',
    },
    justifyContent: 'space-between',
    gap: 2,
}

const FoodDrinkFooter = ({ children }) => {
    return (
        <CardActions component={Grid}>
            <Grid container {...footerConfig}>
                {children}
            </Grid>
        </CardActions>
    )
}

FoodDrinkFooter.propTypes = FoodDrinkFooterProps

export default FoodDrinkFooter