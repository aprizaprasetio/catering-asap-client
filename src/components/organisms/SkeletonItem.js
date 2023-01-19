import React from 'react'
import { Grid, Box, Card, Skeleton } from '@mui/material'
import FoodDrinkItemProps from 'proptypes/organisms/FoodDrinkItemProps'

const SkeletonItem = () => {
    const gridConfig = {
        xs: 3,
        sm: 4,
    }

    const cardStyle = {
        borderRadius: 3,
        boxShadow: 6,
        height: '100%',
    }

    return (
        <Grid item {...gridConfig}>
            <Card sx={cardStyle}>
                <Skeleton variant="rectangular" height="150px" />
                <Box sx={{ p: 2 }}>
                    <Skeleton />
                    <Skeleton height={30} />
                </Box>
            </Card>
        </Grid>
    )
}

export default SkeletonItem