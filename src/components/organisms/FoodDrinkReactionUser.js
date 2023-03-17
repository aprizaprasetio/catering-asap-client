import { MoodBadRounded, MoodRounded, SentimentNeutralRounded } from '@mui/icons-material'
import { IconButton, ToggleButton, ToggleButtonGroup, } from '@mui/material'
import React from 'react'
import { useCreateReaction, useUpdateReaction } from 'api/hooks/reactionHook'

const FoodDrinkReactionUser = ({ reactionId, dataReaction, foodDrinkId }) => {
    const [value, setValue] = React.useState(dataReaction)
    const mutation = useCreateReaction(foodDrinkId)
    const update = useUpdateReaction(foodDrinkId)

    const triggerValue = (event, newValue) => {
        setValue(newValue)
        if (value !== null)
            return update(reactionId, newValue)
        mutation(newValue)
    }

    return (
        <>
            <ToggleButtonGroup
                value={value}
                exclusive
                onChange={triggerValue}
                aria-label="text alignment"
            >
                <ToggleButton value={0} sx={{ border: 0 }}>
                    <IconButton><MoodRounded /></IconButton>
                </ToggleButton>
                <ToggleButton value={1} sx={{ border: 0 }}>
                    <IconButton><SentimentNeutralRounded /></IconButton>
                </ToggleButton>
                <ToggleButton value={2} sx={{ border: 0 }}>
                    <IconButton><MoodBadRounded /></IconButton>
                </ToggleButton>
            </ToggleButtonGroup>
        </>
    )
}

export default FoodDrinkReactionUser