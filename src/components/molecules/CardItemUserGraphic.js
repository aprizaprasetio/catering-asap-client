import { Avatar, Box, Typography, Grid } from '@mui/material'
import React from 'react'

const CardItemUserGraphic = () => {
    return (
        <>
            <Grid item xs={12}>
                <Box sx={{ cursor: 'pointer' }}>
                    <Box sx={{
                        boxShadow: 3,
                        borderRadius: 3,
                        display: 'flex',
                        gap: 6,
                        paddingX: 5,
                        paddingY: 2
                    }}>
                        <Avatar
                            sx={{
                                // bgcolor: deepOrange[500],
                                width: 56,
                                height: 56,
                                fontSize: 16,
                            }}
                            alt="Remy Sharp"
                            src=''
                        />
                        <Box>
                            <Typography sx={{ fontWeight: 'bold', fontSize: 20 }}>Syawal</Typography>
                            <Typography>16 Februari 2023</Typography>
                        </Box>
                    </Box>
                </Box>
            </Grid>
        </>
    )
}

export default CardItemUserGraphic