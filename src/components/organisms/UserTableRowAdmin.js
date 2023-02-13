import React from 'react'
import { formatIDR } from 'commands/application/priceCommand'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar } from '@mui/material'
import UserTableRowAdminProps from 'proptypes/organisms/UserTableRowAdminProps'

const UserTableRowAdmin = ({ name, email, image, phone, item, orderTotalPrice, gender }) => {
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
            <TableCell align="left">{item}</TableCell>
            <TableCell align="left">{formatIDR(orderTotalPrice)}</TableCell>
            <TableCell align="left">{gender}</TableCell>
        </TableRow>
    )
}

UserTableRowAdmin.propTypes = UserTableRowAdminProps 

export default UserTableRowAdmin