import React from 'react'
import { Typography } from '@mui/material'
import PropTypes from 'prop-types'

const SmallHeading = ({ content }) => <Typography variant="h1" fontSize={24} fontWeight="bold">{content}</Typography>

SmallHeading.propTypes = {
    content: PropTypes.string.isRequired,
}

export default SmallHeading