import React from 'react'
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Typography } from '@mui/material'
import { useCartCheckout } from 'api/hooks/cartHook'
import { formatIDR } from 'commands/application/priceCommand'

const CheckoutTable = () => {
    const { data } = useCartCheckout()

    return (
        <TableContainer sx={{
            borderRadius: 4,
            boxShadow: 3,
            maxHeight: '60vh',
        }}>
            <Table stickyHeader sx={{
                maxHeight: 50,
            }}>
                <TableHead>
                    <TableRow>
                        <TableCell colSpan="100%">
                            <Typography variant="h3" fontSize={16} fontWeight="bold">
                                Daftar Keranjang
                            </Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody sx={{
                    ':last-child': {
                        borderBottom: 0,
                    }
                }}>
                    {data.carts.map(item => (
                        <TableRow key={item.id}>
                            <TableCell>
                                <Typography variant="h4" fontSize={14} fontWeight="bold">
                                    {item.menuName}
                                </Typography>
                                <Typography variant="caption">{item.quantity} x {formatIDR(item.menuPrice)}</Typography>
                            </TableCell>
                            <TableCell align="right">
                                <Typography variant="subtitle2">Total Harga</Typography>
                                <Typography variant="body1" fontWeight="bold">{formatIDR(item.menuTotalPrice)}</Typography>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default CheckoutTable