import React from 'react'
import { formatIDR } from 'commands/application/priceCommand'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar, IconButton, Typography } from '@mui/material'
import { Delete } from '@mui/icons-material'
import UserTableRowAdminProps from 'proptypes/organisms/UserTableRowAdminProps'
import { useDeleteUser, useUserList } from 'api/hooks/usersManagementHook'
import { useTrigger } from 'commands/builders/commonBuilder'
import PopUp from 'components/molecules/PopUp'
import { Button, Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const UserTableRowAdmin = ({ id, name, email, image, phone, quantity, totalPriceOrdered, gender }) => {
    const [openPopup, setOpenPopup] = useTrigger()
    const mutation = useDeleteUser()
    const query = useUserList()
    const navigate =  useNavigate()
    const deleteOnPopup = () => mutation.mutate(id, {
        onSuccess: () => query.refetch().then(setOpenPopup)
    })

    return (
        <>
            <TableRow component={Box}
                onClick={() => navigate(`/users/detail/${id}`)}
                sx={{ '&:last-child td, &:last-child th': { border: 0 }, cursor: 'pointer' }}
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
                    <IconButton onClick={setOpenPopup}>
                        <Delete />
                    </IconButton>
                </TableCell>
            </TableRow>

            <PopUp openPopup={openPopup} setOpenPopup={setOpenPopup}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 3
                }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', gap: 2 }}>
                        <Typography sx={{ fontWeight: 'bold' }}>PERHATIAN!!!</Typography>
                        <Typography>Apakah anda yakin ingin menghapus akun ini?</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 3 }}>
                        <Button sx={{ flex: 1 }} variant="contained" onClick={deleteOnPopup}>Iya</Button>
                        <Button sx={{ flex: 1 }} variant="outlined" color='error' onClick={setOpenPopup}>Tidak</Button>
                    </Box>
                </Box>
            </PopUp>
        </>
    )
}

UserTableRowAdmin.propTypes = UserTableRowAdminProps

export default UserTableRowAdmin