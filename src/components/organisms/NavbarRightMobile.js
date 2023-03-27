import React from 'react'
import { Paper, Box, IconButton, SwipeableDrawer, MenuList, Divider, Skeleton } from '@mui/material'
import { Menu as MenuIcon, Logout, HourglassBottom, Cached, LocalShipping, Schedule, CardTravel } from '@mui/icons-material'
import PressListItem from 'components/molecules/PressListItem'
import AvatarIcon from 'components/atoms/AvatarIcon'
import { useStale } from 'commands/builders/hookBuilder'
import { useTrigger } from 'commands/builders/commonBuilder'
import { logout } from 'commands/application/authCommand'
import CartIcon from 'components/molecules/CartIcon'

const boxStyle = {
    display: {
        xs: 'block',
        md: 'none',
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
    const [user] = useStale('user')
    const [open, openTrigger] = useTrigger()

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
                    <PressListItem href="/profile" icon={<AvatarIcon />} content={user?.name ?? <Skeleton width="100%" height="100%" variant="rounded" />} />
                    <PressListItem href="/cart" icon={<CartIcon />} content="Keranjang" />
                    <PressListItem onClick={logout} icon={<Logout />} content="Keluar" />
                </MenuList>
                <MenuList component={Paper} sx={listStyle}>
                    <PressListItem icon={<HourglassBottom />} content="Menunggu Verifikasi" href='/statusorders'/>
                    <PressListItem icon={<Cached />} content="Sedang Diproses" href='/statusorders/onproccess' />
                    <PressListItem icon={<LocalShipping />} content="Dalam Perjalanan" href='/statusorders/ondelivery' />
                    <Divider sx={dividerStyle} />
                    <PressListItem icon={<Schedule />} content="Riwayat Pesanan" href='/statusorders/successful' />
                </MenuList>
            </SwipeableDrawer>
        </Box >
    )
}

export default NavbarRightMobile