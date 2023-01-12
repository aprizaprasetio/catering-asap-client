import React from 'react'
import { Typography } from '@mui/material'
import NavbarHeadingProps from 'proptypes/atoms/NavbarHeadingProps'

const brandStyle = {
    fontSize: 22,
    fontWeight: 'medium',
}

const NavbarHeading = ({ content }) => <Typography variant="h1" sx={brandStyle}>{content}</Typography>

NavbarHeading.propTypes = NavbarHeadingProps

export default NavbarHeading