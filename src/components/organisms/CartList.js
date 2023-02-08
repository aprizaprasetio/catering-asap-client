import React from 'react'
import useCartStore from 'factory/store/useCartStore'
import CartContainer from 'components/organisms/CartContainer'
import CartHeader from 'components/molecules/CartHeader'
import CartCheckout from 'components/organisms/CartCheckout'
import CartItem from 'components/organisms/CartItem'
import CartSkeleton from './CartSkeleton'

const CartList = () => {
    const store = useCartStore()

    React.useEffect(() => {
        const cartList = []
        cartList.push({
            id: 1,
            image: 'https://picsum.photos/600.webp',
            title: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, quidem?',
            price: 182990,
            quantity: 99,
            isChecked: false,
        })
        cartList.push({
            id: 2,
            image: 'https://picsum.photos/600.webp',
            title: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, quidem?',
            price: 182990,
            quantity: 99,
            isChecked: false,
        })
        cartList.push({
            id: 3,
            image: 'https://picsum.photos/600.webp',
            title: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, quidem?',
            price: 182990,
            quantity: 10,
            isChecked: false,
        })
        setTimeout(() => store.setCart(cartList), 5000)
    }, [])

    if (store.data === null) return <CartSkeleton />

    return (
        <CartContainer checkout={<CartCheckout />}>
            <CartHeader />
            {
                store.data.map(item => {
                    const { id, quantity, isChecked, ...bodyItem } = item

                    return (
                        <CartItem
                            cartBody={bodyItem}
                            cartFooter={{
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
                }

                )
            }
        </CartContainer>
    )
}

export default CartList