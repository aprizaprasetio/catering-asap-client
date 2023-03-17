import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'

const FoodDrinkCardMobile = ({ id, name, price }) => {
    const navigate = useNavigate()

    return (
        <Card
            onClick={() => navigate(`/admin/menus/detail/${id}`)}
            sx={{
                borderRadius: 4,
                marginX: 0.5,
                display: {
                    xs: 'flex',
                    lg: 'none'
                }
            }}
        >
            <CardMedia
                component="img"
                sx={{
                    width: 90,
                    padding: 1,
                    borderRadius: 4,
                }}
                image='https://picsum.photos/600.webp'
            />
            <CardContent >
                <Typography sx={{ fontWeight: 500 }} component="div" variant='subtitle' position='flex'>
                    {name}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div" position='flex'>
                    {price}
                </Typography>
            </CardContent>
        </Card>

    )
}

export default FoodDrinkCardMobile