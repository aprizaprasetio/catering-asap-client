import React from 'react'
import { Badge } from '@mui/material'
import { ShoppingCart } from '@mui/icons-material'
import { useCurrentCartQuantity } from 'api/hooks/cartHook'

const CartIcon = () => {
    const quantity = useCurrentCartQuantity()

    return (
        <Badge badgeContent={quantity} color="error">
            <ShoppingCart />
        </Badge>
    )
}

export default CartIcon