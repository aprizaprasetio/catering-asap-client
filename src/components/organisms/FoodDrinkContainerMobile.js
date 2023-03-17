import React from 'react'
import { Box, Paper, Grid } from '@mui/material'

const FoodDrinkContainerMobile = ({ children }) => {
    return (
        <>
            <Grid >
                <Box
                    component={Paper}
                    sx={{
                        boxShadow: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,

                        width: 'auto',
                        borderRadius: 3,
                    }}>{children}</Box>
            </Grid>
        </>
    )
}
export default FoodDrinkContainerMobile
