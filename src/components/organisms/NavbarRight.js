import React from 'react'
import { Box, Menu, MenuItem, ListItemIcon, Paper, Divider, alpha, useTheme } from '@mui/material'
import { Person, ShoppingCart, HelpCenter, HourglassBottom, Cached, LocalShipping, Schedule, Logout } from '@mui/icons-material'
import PressIconLink from '../atoms/PressIconLink'
import PressIcon from '../atoms/PressIcon'
import PressAvatar from '../atoms/PressAvatar'
import MenuItemVertical from '../molecules/MenuItemVertical'

const boxStyle = {
    display: {
        xs: 'none',
        sm: 'block'
    },
}

const dividerStyle = {
    marginY: 1,
}

const topStyle = {
    marginBottom: 0.66,
    borderRadius: 3,
}

const bottomStyle = {
    padding: 0.66,
    borderRadius: 3,
}

const historyStyle = {
    borderRadius: 3,
}

const NavbarRight = () => {
    const { black } = useTheme().palette.common

    const [open, setOpen] = React.useState(false)
    const [target, setTarget] = React.useState(null)
    const menuTrigger = Event => {
        if (open === false) {
            if (Event.currentTarget.tagName !== 'BUTTON') return
            console.info(Event.currentTarget.tagName)
            setOpen(true)
            setTarget(Event.currentTarget)
            return
        }
        setOpen(false)
        setTarget(null)
    }

    const menuConfig = {
        anchorEl: target,
        open: open,
        onClose: menuTrigger,
        onClick: menuTrigger,
        disableScrollLock: true,
        PaperProps: {
            sx: {
                marginTop: 1.5,
                marginLeft: -3,
                borderRadius: 4,
                padding: 1,
                backgroundColor: alpha(black, 0.66),
            },
            elevation: 0,
        },
    }

    return (
        <Box sx={boxStyle}>
            <PressIconLink href="/register">
                <HelpCenter />
            </PressIconLink>
            <PressIcon>
                <ShoppingCart />
            </PressIcon>
            <PressAvatar onClick={menuTrigger}>
                <Person />
            </PressAvatar>
            <Menu {...menuConfig}>
                <Paper sx={topStyle}>
                    <MenuItem>
                        <ListItemIcon>
                            <Person />
                            Apriza Prasetio
                        </ListItemIcon>
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <Logout />
                            Keluar
                        </ListItemIcon>
                    </MenuItem>
                </Paper>
                <Paper sx={bottomStyle}>
                    <Box display="flex">
                        <MenuItemVertical href="order/wait" icon={<HourglassBottom />}>
                            Menunggu<br />Verifikasi
                        </MenuItemVertical>
                        <MenuItemVertical href="order/onprocess" icon={<Cached />}>
                            Sedang<br />Diproses
                        </MenuItemVertical>
                        <MenuItemVertical href="order/ondelivery" icon={<LocalShipping />}>
                            Dalam<br />Perjalanan
                        </MenuItemVertical>
                    </Box>
                    <Divider sx={dividerStyle} />
                    <MenuItem sx={historyStyle}>
                        <ListItemIcon>
                            <Schedule />
                            Riwayat Pesanan
                        </ListItemIcon>
                    </MenuItem>
                </Paper>
            </Menu>
        </Box>
    )
}

export default NavbarRight