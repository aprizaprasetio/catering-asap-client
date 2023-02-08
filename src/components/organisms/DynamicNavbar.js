import React from 'react'
import { AppBar, Container, Toolbar, Typography } from '@mui/material'
import { ArrowBackIosNew } from '@mui/icons-material'
import PressIconLink from 'components/atoms/PressIconLink'

const DynamicNavbar = ({ children }) => {
    return (
        <AppBar position="sticky">
            <Toolbar component={Container} sx={{
                display: 'flex',
                justifyContent: 'space-between',
            }}>
                <PressIconLink href="/">
                    <ArrowBackIosNew />
                </PressIconLink>
                <Typography variant="h2" sx={{
                    fontSize: 18,
                }}>
                    {children}
                </Typography>
                <Typography children="" />
            </Toolbar>
        </AppBar>
    )
}

export default DynamicNavbar