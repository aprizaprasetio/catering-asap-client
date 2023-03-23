import { CardMedia, Box, Typography, Card } from '@mui/material'
import { formatIDR } from 'commands/application/priceCommand'
import { Grid } from '@mui/material'
import React from 'react'

const CardItemVerifyDekstop = ({ foodDrinkName, quantity, price, imagePath }) => {
    return (
        <Grid item xs={12}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
            }}>
                <Card sx={{
                    boxShadow: 5,
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: 1,
                    borderRadius: 3
                }}>
                    <Box sx={{
                        display: 'flex',
                        gap: 3
                    }}>
                        <CardMedia
                            component={'img'}
                            sx={{
                                width: 100,
                                height: 100,
                                borderRadius: 3,
                                boxShadow: 3,
                                marginY: 1
                            }}
                            image={imagePath}
                            alt='Zonk' />
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                            <Typography sx={{ fontSize: 18, fontWeight: 'bold' }}>{foodDrinkName}</Typography>
                            <Typography sx={{ fontSize: 12 }}>{formatIDR(price)}</Typography>
                        </Box>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Typography sx={{
                            fontSize: 18,
                            fontWeight: 'bold',
                            marginRight: 1
                        }}>{quantity}pcs</Typography>
                    </Box>
                </Card>
            </Box>
        </Grid>
    )
}

export default CardItemVerifyDekstop