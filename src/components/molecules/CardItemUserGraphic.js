import { Avatar, Box, Typography, Grid } from '@mui/material'
import React from 'react'

const CardItemUserGraphic = ({ userName, orderTime }) => {
    return (
        <>
            <Grid item xs={12}>
                <Box sx={{ cursor: 'pointer' }}>
                    <Box sx={{
                        boxShadow: 3,
                        borderRadius: 3,
                        display: 'flex',
                        gap: 4,
                        paddingX: 3,
                        paddingY: 1
                    }}>
                        <Avatar
                            sx={{
                                width: 42,
                                height: 42,
                                fontSize: 16,
                            }}
                            alt="Remy Sharp"
                            src=''
                        />
                        <Box>
                            <Typography sx={{ fontWeight: 'bold', fontSize: 18 }}>{userName}</Typography>
                            <Typography sx={{ fontSize: 14 }}>{orderTime}</Typography>
                        </Box>
                    </Box>
                </Box>
            </Grid>
        </>
    )
}

export default CardItemUserGraphic