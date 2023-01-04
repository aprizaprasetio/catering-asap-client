import React from 'react'
import PropTypes from 'prop-types'
import { MoodRounded, SentimentNeutralRounded, MoodBadRounded } from '@mui/icons-material'
import { Grid, Button, Typography } from '@mui/material'

const gridConfig = {
    direction: 'row',
    justifyContent: 'space-evenly',
}

const FoodDrinkReact = ({ values }) => {
    const { like, ok, dislike } = values

    return (
        <Grid item>
            <Grid container {...gridConfig}>
                <Button disabled>
                    <MoodRounded />
                    <Typography fontFamily="sans-serif" component="span">{like}</Typography>
                </Button>
                <Button disabled>
                    <SentimentNeutralRounded />
                    <Typography fontFamily="sans-serif" component="span">{ok}</Typography>
                </Button>
                <Button disabled>
                    <MoodBadRounded />
                    <Typography fontFamily="sans-serif" component="span">{dislike}</Typography>
                </Button>
            </Grid>
        </Grid>
    )
}

FoodDrinkReact.propTypes = {
    values: PropTypes.objectOf(PropTypes.number).isRequired,
}

export default FoodDrinkReact