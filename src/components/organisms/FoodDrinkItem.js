import React from 'react'
import { Grid, Card } from '@mui/material'
import FoodDrinkItemProps from 'proptypes/organisms/FoodDrinkItemProps'

const FoodDrinkItem = ({ children }) => {
    const [hover, setHover] = React.useState(false)
    const hoverTrigger = () => setHover(current => !current)

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