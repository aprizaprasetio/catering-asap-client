import React from 'react'
import { Link } from 'react-router-dom'
import { formatIDR } from 'commands/application/priceCommand'
import { Button, Box, TableCell, TableRow, Avatar, IconButton, Typography } from '@mui/material'
import { Delete } from '@mui/icons-material'
import PopUp from 'components/molecules/PopUp'
import UserTableRowAdminProps from 'proptypes/organisms/UserTableRowAdminProps'
import { useDeleteUser, useUserList } from 'api/hooks/usersManagementHook'
import { useTrigger } from 'commands/builders/commonBuilder'
const UserTableRowAdmin = ({ id, avatar, name, email, phone, quantity, totalPriceOrdered, gender }) => {
    const [openPopup, setOpenPopup] = useTrigger()
    const [isHover, isHoverTrigger] = useTrigger()
    const mutation = useDeleteUser()
    const query = useUserList()
    const deleteOnPopup = () => mutation.mutate(id, {
        onSuccess: () => query.refetch().then(setOpenPopup)
    })

    return (
        <>
            <TableRow
                component={Link}
                onMouseOver={isHoverTrigger}
                onMouseOut={isHoverTrigger}
                to={`/users/detail/${id}`}
                sx={{
                    textDecoration: 'none',
                    backgroundColor: isHover ? '#f5f5f5' : 'white',
                    transition: 'all .33s',
                }}
            >
                <TableCell component="th" scope="row">
                    <Avatar
                        alt={name}
                        src={avatar}
                        sx={{ width: 56, height: 56 }}
                        onClick={() => { }}
                    />
                </TableCell>
                <TableCell align="left" onClick={() => { }} >{name}</TableCell>
                <TableCell align="left" onClick={() => { }} >{email}</TableCell>
                <TableCell align="left" onClick={() => { }} >{phone}</TableCell>
                <TableCell align="left" onClick={() => { }} >{quantity}</TableCell>
                <TableCell align="left" onClick={() => { }} >{formatIDR(totalPriceOrdered)}</TableCell>
                <TableCell align="left" onClick={() => { }} >{gender ? 'Wanita' : 'Pria'}</TableCell>
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