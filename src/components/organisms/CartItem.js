import React from 'react'
import CartItemContainer from './CartItemContainer'
import CartItemBody from 'components/molecules/CartItemBody'
import CartItemFooter from 'components/molecules/CartItemFooter'
import CartItemProps from 'proptypes/organisms/CartItemProps'

const CartItem = ({ cartBody, cartFooter }) => {
    return (
        <CartItemContainer>
            <CartItemBody {...cartBody} />
            <CartItemFooter {...cartFooter} />
        </CartItemContainer>
    )
}

CartItem.propTypes = CartItemProps

export default CartItem