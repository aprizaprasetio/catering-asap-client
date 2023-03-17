import React from 'react'
import { Grid, Card, Button } from '@mui/material'
import FoodDrinkItemProps from 'proptypes/organisms/FoodDrinkItemProps'
import { useTrigger } from 'commands/builders/commonBuilder'

const FoodDrinkItem = ({ children }) => {
    const [hover, hoverTrigger] = useTrigger()

    const gridConfig = {
        xs: 3,
        sm: 4,
    }

    const cardStyle = {
        borderRadius: 3,
        boxShadow: 6,
        scale: hover ? '1.1 !important' : 1,
        transition: 'all',
        transitionDuration: '.33s',
        height: '100%',
        display: 'grid',
        cursor: 'pointer'
    }

    return (
        <Grid item onMouseOver={hoverTrigger} onMouseOut={hoverTrigger} {...gridConfig}>
            <Card spacing={5} sx={cardStyle}>
                {children}
            </Card>
        </Grid>
    )
}

FoodDrinkItem.propTypes = FoodDrinkItemProps

export default FoodDrinkItem