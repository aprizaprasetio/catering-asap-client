import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Button } from '@mui/material'

const buttonStyle = {
    borderRadius: 6,
    width: '100%',
}

const FoodDrinkButton = ({ children }) => {
    return (
        <Grid item>
            <Button sx={buttonStyle}>
                {children}
            </Button>
        </Grid>
    )
}

FoodDrinkButton.propTypes = {
    children: PropTypes.node.isRequired,
}

export default FoodDrinkButton