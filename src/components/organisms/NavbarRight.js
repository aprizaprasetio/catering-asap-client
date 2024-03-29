import React from 'react'
import { Box, Menu, MenuList, Stack, Paper, Divider, Skeleton } from '@mui/material'
import { Person, HelpCenter, HourglassBottom, Cached, LocalShipping, Schedule, Logout } from '@mui/icons-material'
import AvatarIcon from 'components/atoms/AvatarIcon'
import PressIconLink from 'components/atoms/PressIconLink'
import PressAvatar from 'components/atoms/PressAvatar'
import PressListItem from 'components/molecules/PressListItem'
import ListItemVertical from 'components/molecules/ListItemVertical'
import CartIcon from 'components/molecules/CartIcon'
import { useStale } from 'commands/builders/hookBuilder'
import { logout } from 'commands/application/authCommand'

const boxStyle = {
    display: {
        xs: 'none',
        md: 'block'
    },
}

const dividerStyle = {
    marginY: 1,
}

const listConfig = {
    sx: {
        padding: 1,
        marginTop: 1,
        borderRadius: 3,
    },
    elevation: 3,
}

const NavbarRight = () => {
    const [user] = useStale('user')
    const [open, setOpen] = React.useState(false)
    const [target, setTarget] = React.useState(null)
    const menuTrigger = Event => {
        if (open === false) {
            if (Event.currentTarget.tagName !== 'BUTTON') return
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
        spacing: 1,
        PaperProps: {
            sx: {
                borderRadius: 3,
                padding: 1,
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                },
                '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 5,
                    right: 15,
                    width: 20,
                    height: 20,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                },
            },
            elevation: 3,
        },
        transformOrigin: {
            horizontal: 'right',
            vertical: 'top',
        },
        anchorOrigin: {
            horizontal: 'right',
            vertical: 'bottom',
        },
    }

    return (
        <Box sx={boxStyle}>
            <PressIconLink href="/cart">
                <CartIcon />
            </PressIconLink>
            <PressAvatar onClick={menuTrigger}>
                {user?.avatar ? (
                    <Box
                        component="img"
                        src={user.avatar}
                        sx={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                        }}
                    />
                ) : <Person />}
            </PressAvatar>
            <Menu {...menuConfig}>
                <MenuList component={Paper}{...listConfig}>
                    <PressListItem
                        href="profile"
                        icon={<AvatarIcon />}
                        content={user?.name ?? <Skeleton variant="rounded" width="100%" height={20} />}
                    />
                    <PressListItem onClick={logout} icon={<Logout />} content="Keluar" />
                </MenuList>
                <MenuList component={Paper} {...listConfig}>
                    <Stack direction="row">
                        <ListItemVertical href="/statusorders" icon={<HourglassBottom />}>
                            Menunggu<br />Verifikasi
                        </ListItemVertical>
                        <ListItemVertical href="/statusorders/onproccess" icon={<Cached />}>
                            Sedang<br />Diproses
                        </ListItemVertical>
                        <ListItemVertical href="/statusorders/ondelivery" icon={<LocalShipping />}>
                            Dalam<br />Perjalanan
                        </ListItemVertical>
                    </Stack>
                    <Divider sx={dividerStyle} />
                    <PressListItem icon={<Schedule />} content="Riwayat Pesanan" href='/statusorders/successful' />
                </MenuList>
            </Menu>
        </Box >
    )
}

export default NavbarRight