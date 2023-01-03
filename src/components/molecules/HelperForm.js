import React from 'react'
import { Link as LinkRoute } from 'react-router-dom'
import { Link } from '@mui/material'
import MediumSubtitle from '../atoms/MediumSubtitle'
import PropTypes from 'prop-types'

const HelperForm = ({ content, path, label }) => {
    return (
        <MediumSubtitle>
            {content} <Link to={path} component={LinkRoute} underline="hover">{label}</Link>
        </MediumSubtitle>
    )
}

HelperForm.propTypes = {
    content: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
}

export default HelperForm