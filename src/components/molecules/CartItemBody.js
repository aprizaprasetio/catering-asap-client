import React from 'react'
import { Box, CardMedia, CardContent, Typography } from '@mui/material'
import { formatIDR } from 'commands/application/priceCommand'
import CartItemBodyProps from 'proptypes/molecules/CartItemBodyProps'

const CartItemBody = ({ image, title, price }) => {
    return (
        <Box sx={{
            display: 'flex',
        }}>
            <CardMedia
                component="img"
                image={image}
                sx={{
                    maxWidth: 150,
                    margin: 1,
                    boxShadow: 3,
                    borderRadius: 6,
                }}
            />
            <CardContent>
                <Typography variant="h4" sx={{
                    fontSize: 20,
                }}>
                    {title}
                </Typography>
                <Typography variant="body1" sx={{
                    fontSize: 18,
                    fontWeight: 'bold',
                }}>
                    {formatIDR(price)}
                </Typography>
            </CardContent>
        </Box>
    )
}

CartItemBody.propTypes = CartItemBodyProps

export default CartItemBody