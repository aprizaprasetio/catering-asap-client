import React from 'react'
import { Typography } from '@mui/material'
import PropTypes from 'prop-types'

const brandStyle = {
    fontSize: 22,
    fontWeight: 'medium',
}

const NavbarHeading = ({ content }) => <Typography variant="h1" sx={brandStyle}>{content}</Typography>

NavbarHeading.propTypes = {
    content: PropTypes.string.isRequired,
}

export default NavbarHeading