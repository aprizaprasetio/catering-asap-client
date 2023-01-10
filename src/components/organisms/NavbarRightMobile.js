import React from 'react'
import { Paper, Box, IconButton, SwipeableDrawer as Drawer, List, Divider } from '@mui/material'
import { Menu as MenuIcon, Person, Logout, HourglassBottom, Cached, LocalShipping, Schedule } from '@mui/icons-material'
import PressListItem from '../molecules/PressListItem'

const boxStyle = {
    display: {
        xs: 'block',
        sm: 'none',
    }
}

const paperStyle = {
    borderRadius: 3,
    boxShadow: 4,
    marginBottom: 1,
}

const dividerStyle = {
    marginX: 1,
}

const NavbarRightMobile = () => {
    const [open, setOpen] = React.useState(false)
    const openTrigger = () => setOpen(current => !current)

    const drawerConfig = {
        anchor: 'right',
        open: open,
        onOpen: openTrigger,
        onClose: openTrigger,
        BackdropProps: {
            invisible: true,
        },
        PaperProps: {
            sx: {
                padding: 1,
            },
        },
    }

    return (
        <Box sx={boxStyle}>
            <IconButton onClick={openTrigger}>
                <MenuIcon />
            </IconButton>
            <Drawer {...drawerConfig}>
                <Paper sx={paperStyle}>
                    <List>
                        <PressListItem icon={<Person />} content="Apriza Prasetio" />
                        <PressListItem icon={<Logout />} content="Keluar" />
                    </List>
                </Paper>
                <Paper sx={paperStyle}>
                    <List>
                        <PressListItem icon={<HourglassBottom />} content="Menunggu Verifikasi" />
                        <PressListItem icon={<Cached />} content="Sedang Diproses" />
                        <PressListItem icon={<LocalShipping />} content="Dalam Perjalanan" />
                        <Divider sx={dividerStyle} />
                        <PressListItem icon={<Schedule />} content="Riwayat Pesanan" />
                    </List>
                </Paper>
            </Drawer>
        </Box >
    )
}

export default NavbarRightMobile