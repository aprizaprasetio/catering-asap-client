import React from 'react'
import { formatIDR } from 'commands/application/priceCommand'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar, IconButton } from '@mui/material'
import { Delete } from '@mui/icons-material'
import UserTableRowAdminProps from 'proptypes/organisms/UserTableRowAdminProps'
import { useDeleteUser } from 'api/hooks/usersManagementHook'

const UserTableRowAdmin = ({ id, name, email, image, phone, quantity, totalPriceOrdered, gender }) => {
    const mutation  = useDeleteUser()

    return (
        <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell component="th" scope="row">
                <Avatar
                    alt="Remy Sharp"
                    src={image}
                    sx={{ width: 56, height: 56 }}
                />
            </TableCell>
            <TableCell align="left">{name}</TableCell>
            <TableCell align="left">{email}</TableCell>
            <TableCell align="left">{phone}</TableCell>
            <TableCell align="left">{quantity}</TableCell>
            <TableCell align="left">{formatIDR(totalPriceOrdered)}</TableCell>
            <TableCell align="left">{gender ? 'Wanita' : 'Pria'}</TableCell>
            <TableCell align="left">
                <IconButton onClick={() => mutation.mutate(id)}>
                    <Delete />
                </IconButton>
            </TableCell>
        </TableRow>
    )
}

UserTableRowAdmin.propTypes = UserTableRowAdminProps

export default UserTableRowAdmin