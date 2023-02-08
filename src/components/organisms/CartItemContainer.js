import React from 'react'
import { Card } from '@mui/material'
import CartItemContainerProps from 'proptypes/organisms/CartItemContainerProps'

const CartItemContainer = ({ children }) => {
    return (
        <Card sx={{
            display: 'flex',
            justifyContent: 'space-between',
            boxShadow: 1,
            borderRadius: 3,
        }}>
            {children}
        </Card>
    )
}

CartItemContainer.propTypes = CartItemContainerProps

export default CartItemContainer