import React from 'react'
import { Typography, CardActions, Checkbox, Button, ButtonGroup, IconButton } from '@mui/material'
import { Add, Remove, Delete } from '@mui/icons-material'
import CartItemFooterProps from 'proptypes/molecules/CartItemFooterProps'

const CartItemFooter = ({ quantity, quantityClick, removeClick, isChecked, checkboxHandler }) => {
    return (
        <CardActions sx={{
            display: 'grid',
            justifyItems: 'flex-end',
        }}>
            <Checkbox onChange={checkboxHandler} checked={isChecked} />
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
                <Button onClick={quantityClick.add}><Add /></Button>
                <Button variant="text" disabled>
                    <Typography variant="body2" sx={{
                        color: 'primary.main',
                    }}>
                        {quantity}
                    </Typography>
                </Button>
                <Button onClick={quantityClick.remove}><Remove /></Button>
            </ButtonGroup>
            <IconButton
                onClick={removeClick}
                size="small"
                sx={{
                }}>
                <Delete />
            </IconButton>
        </CardActions>
    )
}

CartItemFooter.propTypes = CartItemFooterProps

export default CartItemFooter