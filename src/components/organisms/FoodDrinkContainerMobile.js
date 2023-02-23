import React from 'react'
import { Box, Paper, Grid } from '@mui/material'
import { grey } from '@mui/material/colors'

const FoodDrinkContainerMobile = ({ children }) => {
    return (
        <>
            <Grid >
                {/* item xs={6} sm={4} */}
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
