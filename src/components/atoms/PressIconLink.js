import React from 'react'
import { useNavigate } from 'react-router-dom'
import PressIconLinkProps from 'proptypes/atoms/PressIconLinkProps'
import { IconButton } from '@mui/material'
// import PressIcon from 'components/atoms/PressIcon'

const PressIconLink = ({ href, children }) => {
    const navigate = useNavigate()

    return (
        <IconButton onClick={() => navigate(href ?? -1)}>
            {children}
        </IconButton>
    )
}

PressIconLink.propTypes = PressIconLinkProps

export default PressIconLink