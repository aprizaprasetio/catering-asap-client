import React from 'react'
import { Typography, CardActions, Checkbox, Button, ButtonGroup, IconButton } from '@mui/material'
import { Add, Remove, Delete } from '@mui/icons-material'
import { useCheckboxCart, useOneQuantityCart, useRemoveCartSingle } from 'api/hooks/cartHook'
import CartItemFooterProps from 'proptypes/molecules/CartItemFooterProps'
import useSound from 'use-sound'
import Upward from 'sfx/03 Primary System Sounds/navigation_forward-selection-minimal.ogg'
import Backward from 'sfx/03 Primary System Sounds/navigation_backward-selection-minimal.ogg'

const CartItemFooter = ({ cartId, minOrder, quantity, quantityClick, removeClick, isChecked, checkboxHandler }) => {
    const checkboxTrigger = useCheckboxCart(cartId, checkboxHandler)
    const [increase, decrease] = useOneQuantityCart(cartId, quantityClick)
    const remove = useRemoveCartSingle(cartId, removeClick)

    const [playUpward] = useSound(Upward)
    const [playBackward] = useSound(Backward)

    return (
        <CardActions sx={{
            display: 'grid',
            justifyItems: 'flex-end',
        }}>
            <Checkbox onChange={checkboxTrigger} checked={isChecked} />
            <ButtonGroup
                size="small"
                variant="contained"
                disableElevation
                sx={{
                    position: 'relative',
                    right: {
                        xs: 0,
                        md: 50,
                        lg: 100,
                    },
                    bottom: 0,
                }}
            >
                <Button onClick={() => (playUpward(), increase())}>
                    <Add />
                </Button>
                <Button variant="text" disabled>
                    <Typography variant="body2" sx={{
                        color: 'primary.main',
                    }}>
                        {quantity}
                    </Typography>
                </Button>
                <Button
                    onClick={() => (playBackward(), decrease())}
                    disabled={quantity === minOrder}
                >
                    <Remove />
                </Button>
            </ButtonGroup>
            <IconButton
                onClick={remove}
                size="small"
                sx={{
                }}>
                <Delete />
            </IconButton>
        </CardActions >
    )
}

CartItemFooter.propTypes = CartItemFooterProps

export default CartItemFooter