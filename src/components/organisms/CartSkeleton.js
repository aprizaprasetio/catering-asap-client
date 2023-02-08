import React from 'react'
import { Skeleton } from '@mui/material'
import CartContainer from 'components/organisms/CartContainer'

const CartSkeleton = () => {
    return (
        <CartContainer
            checkout={<Skeleton variant="rectangular" sx={{
                width: '100%',
                height: 400,
                borderRadius: 6,
            }} />}
        >
            <Skeleton variant="rectangular" sx={{
                width: '100%',
                height: 50,
                borderRadius: 6,
            }} />
            {
                [...Array(3)].map((item, index) => (
                    <Skeleton variant="rectangular" key={index} sx={{
                        width: '100%',
                        height: 150,
                        borderRadius: 6,
                    }} />
                ))
            }
        </CartContainer>
    )
}

export default CartSkeleton