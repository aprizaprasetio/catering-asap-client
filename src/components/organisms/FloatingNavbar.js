import React from 'react'
import { AppBar, Container, Toolbar } from '@mui/material'
import NavbarLeft from 'components/molecules/NavbarLeft'
import NavbarCenter from 'components/molecules/NavbarCenter'
import NavbarRight from 'components/organisms/NavbarRight'
import NavbarRightMobile from 'components/organisms/NavbarRightMobile'

const menuStyle = {
    display: 'flex',
    justifyContent: 'space-between',
}

const FloatingNavbar = () => {
    return (
        <AppBar position="sticky">
            <Toolbar component={Container} sx={menuStyle}>
                <NavbarLeft />
                <NavbarCenter />
                <NavbarRight />
                <NavbarRightMobile />
            </Toolbar>
        </AppBar >
    )
}

export default FloatingNavbar