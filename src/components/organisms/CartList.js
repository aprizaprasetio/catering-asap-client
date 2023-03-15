import React from 'react'
import { Stack, Typography } from '@mui/material'
import { ProductionQuantityLimits } from '@mui/icons-material'
import useCartStore from 'factory/store/useCartStore'
import CartContainer from 'components/organisms/CartContainer'
import CartHeader from 'components/molecules/CartHeader'
import CartCheckout from 'components/organisms/CartCheckout'
import CartItem from 'components/organisms/CartItem'
import { useCartCollection } from 'api/hooks/cartHook'
import CartSkeleton from './CartSkeleton'

const CartList = () => {
    const store = useCartStore()
    const { isFetchedAfterMount } = useCartCollection()

    if (!isFetchedAfterMount) return <CartSkeleton />

    return (
        <CartContainer checkout={<CartCheckout />}>
            {store.isCartExist() ? <CartHeader /> : (
                <Stack alignItems="center" sx={{ opacity: .5 }}>
                    <ProductionQuantityLimits sx={{ fontSize: 100 }} />
                    <Typography variant="body1" fontSize={16} fontWeight="medium">
                        Belum ada makanan atau minuman apapun di keranjang
                    </Typography>
                </Stack>
            )}
            {
                store.pages?.map((group, index) => (
                    <React.Fragment key={index}>
                        {
                            group?.map(item => {
                                const { id, quantity, isChecked, ...bodyItem } = item
                                return (
                                    <CartItem
                                        cartBody={bodyItem}
                                        cartFooter={{
                                            cartId: id,
                                            minOrder: item.food_Drink_Menu_Min_Order,
                                            quantity: quantity,
                                            quantityClick: {
                                                add: () => store.increaseQuantity(id),
                                                remove: () => store.decreaseQuantity(id),
                                            },
                                            removeClick: () => store.removeCart(id),
                                            isChecked: isChecked,
                                            checkboxHandler: () => store.checkboxTrigger(id),
                                        }}
                                        key={id}
                                    />
                                )
                            })
                        }
                    </React.Fragment>
                ))
            }
        </CartContainer>
    )
}

export default CartList