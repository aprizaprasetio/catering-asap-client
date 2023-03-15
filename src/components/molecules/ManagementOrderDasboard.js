import React from 'react'
import { List, ListItem, ListItemButton, Stack, Box, Typography } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'

const ManagementOrderDasboard = () => {
    const navigate = useNavigate()

    return (
        <List
            component={Stack}
            direction="row"
            spacing={4}
            sx={{
                width: '100%',
                overflow: 'auto',
                justifyContent: 'space-between',
                padding: 0
            }}
        >
            <ListItem disablePadding>
                <ListItemButton
                    onClick={() => navigate('/admin/orders')}
                    sx={{
                        fontWeight: 'bold',
                        color: 'white',
                    }}>
                    <Typography>Verifikasi</Typography>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton onClick={() => navigate('/admin/orders/waiting')} sx={{ fontWeight: 'bold', color: 'white' }}>
                    <Typography noWrap>Proses Pesanan</Typography>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton onClick={() => navigate('/admin/orders/delivering')} sx={{ fontWeight: 'bold', color: 'white' }}>
                    <Typography noWrap>Pesanan Dikirim</Typography>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton onClick={() => navigate('/admin/orders/success')} sx={{ fontWeight: 'bold', color: 'white' }}>
                    <Typography noWrap>Selesai</Typography>
                </ListItemButton>
            </ListItem>
        </List>
    )
}

export default ManagementOrderDasboard