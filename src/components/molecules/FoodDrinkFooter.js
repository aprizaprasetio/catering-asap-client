import React from 'react'
import PropTypes from 'prop-types'
import { CardActions, Grid } from '@mui/material'

const footerConfig = {
    direction: {
        xs: 'column',
        md: 'row',
    },
    justifyContent: 'space-between',
    gap: 2,
}

const FoodDrinkFooter = ({ children }) => {
    return (
        <CardActions>
            <Grid container {...footerConfig}>
                {children}
            </Grid>
        </CardActions>
    )
}

FoodDrinkFooter.propTypes = {
    children: PropTypes.node.isRequired,
}

export default FoodDrinkFooter