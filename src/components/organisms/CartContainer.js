import React from 'react'
import { Paper, Box } from '@mui/material'
import CartContainerProps from 'proptypes/organisms/CartContainerProps'

const CartContainer = ({ children, checkout }) => {
    return (
        <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: {
                xs: 'column-reverse',
                lg: 'row',
            },
            gap: 3,
        }}>
            <Paper sx={{
                flex: 8,
                padding: 3,
                boxShadow: 3,
                borderRadius: 6,
                height: 'fit-content',
                display: 'grid',
                gap: 1,
            }}>
                {children}
            </Paper>
            <Paper sx={{
                position: 'sticky',
                flex: 3,
                padding: 3,
                boxShadow: 3,
                borderRadius: 6,
                height: 'fit-content',
            }}>
                {checkout}
            </Paper>
        </Box>
    )
}

CartContainer.propTypes = CartContainerProps

export default CartContainer