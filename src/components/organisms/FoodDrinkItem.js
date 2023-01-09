import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Card } from '@mui/material'

const cardStyle = {
    borderRadius: 3,
    boxShadow: 6,
}

const gridConfig = {
    xs: 3,
    sm: 5,
    md: 4,
}

const FoodDrinkItem = ({ children }) => {
    return (
        <Grid item {...gridConfig}>
            <Card spacing={5} sx={cardStyle}>
                {children}
            </Card>
        </Grid>
    )
}

FoodDrinkItem.propTypes = {
    children: PropTypes.node.isRequired,
}

export default FoodDrinkItem