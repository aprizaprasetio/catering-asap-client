import React from 'react'
import { Typography } from '@mui/material'
import PropTypes from 'prop-types'

const MediumSubtitle = ({ content, children }) => <Typography variant="subtitle1" fontWeight="light">{content ?? children}</Typography>

MediumSubtitle.propTypes = {
    content: PropTypes.string,
    children: PropTypes.node,
}

export default MediumSubtitle