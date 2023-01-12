import React from 'react'
import { Box } from '@mui/material'
import NavbarHeading from 'components/atoms/NavbarHeading'

const boxStyle = {
    display: {
        xs: 'none',
        sm: 'block'
    }
}

const NavbarLeft = () => {
    return (
        <Box sx={boxStyle}>
            <NavbarHeading content="Katering" />
        </Box>
    )
}

export default NavbarLeft