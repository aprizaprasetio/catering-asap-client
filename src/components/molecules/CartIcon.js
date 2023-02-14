import React from 'react'
import { Badge } from '@mui/material'
import { ShoppingCart } from '@mui/icons-material'
import useCartStore from 'factory/store/useCartStore'

const CartIcon = () => {
    const quantity = useCartStore(state => state.quantity)

    return (
        <Badge badgeContent={quantity ?? undefined} color="error">
            <ShoppingCart />
        </Badge>
    )
}

export default CartIcon