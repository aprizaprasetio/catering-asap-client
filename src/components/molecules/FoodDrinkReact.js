import React from 'react'
import PropTypes from 'prop-types'
import { MoodRounded, SentimentNeutralRounded, MoodBadRounded } from '@mui/icons-material'
import { Grid, List, Stack } from '@mui/material'
import ReactListItem from './ReactListItem'

const gridConfig = {
    direction: 'row',
    gap: 0,
}

const iconStyle = {
    padding: 0,
    margin: 0,
}

const listConfig = {
    component: Stack,
    direction: {
        xs: 'column',
        sm: 'row',
    },
    spacing: 1,
}

const FoodDrinkReact = ({ values }) => {
    const { like, ok, dislike } = values

    return (
        <Grid item>
            <List {...listConfig}>
                <ReactListItem icon={<MoodRounded />} content={like} />
                <ReactListItem icon={<SentimentNeutralRounded />} content={ok} />
                <ReactListItem icon={<MoodBadRounded />} content={dislike} />
            </List>
        </Grid>
    )
}

FoodDrinkReact.propTypes = {
    values: PropTypes.objectOf(PropTypes.number).isRequired,
}

export default FoodDrinkReact