import React from 'react'
import { Card } from '@mui/material'
import CartItemContainerProps from 'proptypes/organisms/CartItemContainerProps'

const CartItemContainer = ({ children }) => {
    return (
        <Card sx={{
            display: {
                xs: 'grid',
                sm: 'flex',
            },
            justifyContent: {
                xs: 'normal',
                sm: 'space-between',
            },
            boxShadow: 1,
            borderRadius: 3,
        }}>
            {children}
        </Card>
    )
}

CartItemContainer.propTypes = CartItemContainerProps

export default CartItemContainer