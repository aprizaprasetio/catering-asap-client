import React from 'react'
import { TableContainer, Table, TableBody, TableHead, TableRow, TableCell, Typography } from '@mui/material'
import { formatIDR } from 'commands/application/priceCommand'
import OrderInvoiceTableProps from 'proptypes/organisms/OrderInvoiceTableProps'

const OrderInvoiceTable = ({ dataRow }) => {
    return (
        <TableContainer sx={{
            maxWidth: '90vw',
            marginX: 'auto',
        }}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <Typography variant="h3" fontSize={16} fontWeight="bold">
                                Makanan & Minuman
                            </Typography>
                        </TableCell>
                        <TableCell align="right">
                            <Typography variant="h3" fontSize={16} fontWeight="bold">Jumlah</Typography>
                        </TableCell>
                        <TableCell align="right">
                            <Typography variant="h3" fontSize={16} fontWeight="bold">Harga Satuan</Typography>
                        </TableCell>
                        <TableCell align="right">
                            <Typography variant="h3" fontSize={16} fontWeight="bold">Total Harga</Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {dataRow?.map(item => (
                        <TableRow key={item.id}>
                            <TableCell>
                                <Typography variant="h4" fontSize={14} fontWeight="bold" textTransform="uppercase">
                                    {item.name}
                                </Typography>
                            </TableCell>
                            <TableCell align="right">
                                <Typography variant="body1">{item.quantity}</Typography>
                            </TableCell>
                            <TableCell align="right">
                                <Typography variant="body1">{formatIDR(item.price)}</Typography>
                            </TableCell>
                            <TableCell align="right">
                                <Typography variant="body1">{formatIDR(item.totalPrice)}</Typography>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer >
    )
}

OrderInvoiceTable.props = OrderInvoiceTableProps

export default OrderInvoiceTable