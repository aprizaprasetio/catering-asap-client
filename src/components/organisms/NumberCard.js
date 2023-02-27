import React from 'react'
import { Grid, Paper, Box, Card, CardContent, Typography } from '@mui/material'
import { RestaurantMenu } from '@mui/icons-material'

const NumberCard = () => {
    return (
        <Grid item xs={2}>
            <Card component={Paper} sx={{ borderRadius: 6, boxShadow: 3 }}>
                <CardContent sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
                    <Box>
                        <Typography variant="h3" sx={{ fontSize: 16, fontWeight: 'light' }}>Total Makanan & Minuman</Typography>
                        <Typography variant="body1" sx={{ fontSize: 50 }} >53</Typography>
                    </Box>
                    <RestaurantMenu sx={{ fontSize: 50, opacity: .5 }} />
                </CardContent>
            </Card >
        </Grid>
    )
}

export default NumberCard