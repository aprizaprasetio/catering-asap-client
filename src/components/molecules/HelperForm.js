import React from 'react'
import { Link as LinkRoute } from 'react-router-dom'
import { Link } from '@mui/material'
import HelperFormProps from 'proptypes/molecules/HelperFormProps'
import MediumSubtitle from 'components/atoms/MediumSubtitle'

const HelperForm = ({ content, path, label }) => {
    return (
        <MediumSubtitle>
            {content} <Link to={path} component={LinkRoute} underline="hover">{label}</Link>
        </MediumSubtitle>
    )
}
HelperForm.propTypes = HelperFormProps

export default HelperForm