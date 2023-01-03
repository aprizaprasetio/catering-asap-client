import React from 'react'
import { Typography } from '@mui/material'
import PropTypes from 'prop-types'

const SmallHeading = ({ content }) => <Typography variant="h5" fontWeight="bold" gutterBottom>{content}</Typography>

SmallHeading.propTypes = {
    content: PropTypes.string.isRequired,
}

export default SmallHeading