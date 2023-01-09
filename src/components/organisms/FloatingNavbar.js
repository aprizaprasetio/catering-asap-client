import React from 'react'
import { AppBar, Container, Toolbar } from '@mui/material'
import NavbarLeft from '../molecules/NavbarLeft'
import NavbarCenter from '../molecules/NavbarCenter'
import NavbarRight from './NavbarRight'

const FloatingNavbar = () => {
    const menuStyle = {
        display: 'flex',
        justifyContent: 'space-between',
    }

    return (
        <AppBar component="nav" position="sticky">
            <Container>
                <Toolbar sx={menuStyle}>
                    <NavbarLeft />
                    <NavbarCenter />
                    <NavbarRight />
                </Toolbar>
            </Container>
        </AppBar >
    )
}

export default FloatingNavbar