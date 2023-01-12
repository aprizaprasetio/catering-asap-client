import React from 'react'
import { Paper, Box, IconButton, SwipeableDrawer, MenuList, Divider } from '@mui/material'
import { Menu as MenuIcon, Person, Logout, HourglassBottom, Cached, LocalShipping, Schedule } from '@mui/icons-material'
import PressListItem from 'components/molecules/PressListItem'

const boxStyle = {
    display: {
        xs: 'block',
        sm: 'none',
    }
}

const listStyle = {
    padding: 1,
    marginBottom: 1,
    borderRadius: 3,
    boxShadow: 4,
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
            <SwipeableDrawer {...drawerConfig}>
                <MenuList component={Paper} sx={listStyle}>
                    <PressListItem icon={<Person />} content="Apriza Prasetio" />
                    <PressListItem icon={<Logout />} content="Keluar" />
                </MenuList>
                <MenuList component={Paper} sx={listStyle}>
                    <PressListItem icon={<HourglassBottom />} content="Menunggu Verifikasi" />
                    <PressListItem icon={<Cached />} content="Sedang Diproses" />
                    <PressListItem icon={<LocalShipping />} content="Dalam Perjalanan" />
                    <Divider sx={dividerStyle} />
                    <PressListItem icon={<Schedule />} content="Riwayat Pesanan" />
                </MenuList>
            </SwipeableDrawer>
        </Box >
    )
}

export default NavbarRightMobile