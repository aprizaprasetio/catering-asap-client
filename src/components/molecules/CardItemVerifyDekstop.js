import { Box, Typography, Card, CardMedia, CardContent, Paper, Chip } from '@mui/material'
import { formatIDR } from 'commands/application/priceCommand'
import { Grid } from '@mui/material'
import React from 'react'
import { Stack } from '@mui/system'

const CardItemVerifyDekstop = ({ foodDrinkName, food_Drink_Id, quantity, price, imagePath }) => {
    return (
        <Grid item xs={12}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
            }}>
                <Card sx={{
                    padding: 1,
                    display: 'flex',
                    boxShadow: 3,
                    borderRadius: 3
                }}>
                    <CardMedia
                        component={'img'}
                        sx={{
                            width: 100,
                            height: 100,
                            borderRadius: 3,
                            boxShadow: 1,
                        }}
                        image={imagePath}
                        alt='Zonk' />
                    <CardContent sx={{
                        flex: 1,
                        display: 'flex',
                        justifyContent: 'space-between',

                    }}>
                        <Box >
                            <Typography fontSize={14}>{foodDrinkName}</Typography>
                            <Stack spacing={1} direction="row" alignItems="center">
                                <Typography variant="body2">{quantity} x</Typography>
                                <Typography fontSize={18} fontWeight="bold">{formatIDR(price)}</Typography>
                            </Stack>
                        </Box>
                        <Chip label={`MENU ID: ${food_Drink_Id}`} size="small" />
                    </CardContent>
                </Card>
            </Box>
        </Grid >
    )
}

export default CardItemVerifyDekstop