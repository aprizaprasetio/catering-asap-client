import { CardMedia, Box, Typography, Card } from '@mui/material'
import { formatIDR } from 'commands/application/priceCommand'
import { Grid } from '@mui/material'
import React from 'react'

const CardItemVerifyDekstop = ({ foodDrinkName, quantity, price }) => {
    return (
        <Grid item xs={12}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                // justifyContent: 'center',
                // alignItems: 'center'
            }}>
                <Card sx={{
                    boxShadow: 5,
                    // width: '90%',
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
                                width: 140, 
                                height: 140, 
                                borderRadius: 3, 
                                boxShadow: 3, 
                                marginY: 1 
                            }}
                            image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8ZwZ2tuTvWJXRIRDBjpHM--O-J6sULrMbJA&usqp=CAU'
                            alt='Zonk' />
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                            <Typography sx={{ fontSize: 24, fontWeight: 'bold' }}>{foodDrinkName}</Typography>
                            <Typography sx={{ fontSize: 18 }}>{formatIDR(price)}</Typography>
                        </Box>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Typography sx={{ 
                            fontSize: 24, 
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