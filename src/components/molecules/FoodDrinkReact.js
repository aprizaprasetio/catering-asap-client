import React from 'react'
import { MoodRounded, SentimentNeutralRounded, MoodBadRounded } from '@mui/icons-material'
import { Grid, List, Stack } from '@mui/material'
import FoodDrinkReactProps from 'proptypes/molecules/FoodDrinkReactProps'
import ReactListItem from 'components/molecules/ReactListItem'

const listConfig = {
    direction: {
        xs: 'row',
        sm: 'row',
    },
    spacing: 0,
}

const FoodDrinkReact = ({ values }) => {
    const { like, ok, dislike } = values

    return (
        <Grid item>
            <List component={Stack} disablePadding {...listConfig}>
                <ReactListItem icon={<MoodRounded />} content={like} />
                <ReactListItem icon={<SentimentNeutralRounded />} content={ok} />
                <ReactListItem icon={<MoodBadRounded />} content={dislike} />
            </List>
        </Grid>
    )
}

FoodDrinkReact.propTypes = FoodDrinkReactProps

export default FoodDrinkReact