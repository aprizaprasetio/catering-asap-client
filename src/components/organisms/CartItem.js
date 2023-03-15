import React from 'react'
import CartItemContainer from './CartItemContainer'
import CartItemBody from 'components/molecules/CartItemBody'
import CartItemFooter from 'components/molecules/CartItemFooter'
import CartItemProps from 'proptypes/organisms/CartItemProps'

const CartItem = ({ cartBody, cartFooter }) => {
    return (
        <CartItemContainer>
            <CartItemBody
                image="https://picsum.photos/600.webp"
                title={cartBody.food_Drink_Menu_Name}
                price={cartBody.food_Drink_Menu_Price}
                minOrder={cartFooter.minOrder}
            />
            <CartItemFooter {...cartFooter} />
        </CartItemContainer>
    )
}

CartItem.propTypes = CartItemProps

export default CartItem