import React from 'react'
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
            {store?.pages ? <CartHeader /> : <h1>Nggak ada item</h1>}
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
    // return (
    //     <CartContainer checkout={<CartCheckout />}>
    //         <CartHeader />
    //         {
    //             store.data.map(item => {
    //                 const { id, quantity, isChecked, ...bodyItem } = item

    //                 return (
    //                     <CartItem
    //                         cartBody={bodyItem}
    //                         cartFooter={{
    //                             quantity: quantity,
    //                             quantityClick: {
    //                                 add: () => store.increaseQuantity(id),
    //                                 remove: () => store.decreaseQuantity(id),
    //                             },
    //                             removeClick: () => store.removeCart(id),
    //                             isChecked: isChecked,
    //                             checkboxHandler: () => store.checkboxTrigger(id),
    //                         }}
    //                         key={id}
    //                     />
    //                 )
    //             }

    //             )
    //         }
    //     </CartContainer>
    // )
}

export default CartList