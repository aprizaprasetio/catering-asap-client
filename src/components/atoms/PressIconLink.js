import React from 'react'
import { Link } from 'react-router-dom'
import PressIcon from './PressIcon'
import PropTypes from 'prop-types'

const PressIconLink = ({ href, children }) => {
    return (
        <Link to={href}>
            <PressIcon>
                {children}
            </PressIcon>
        </Link>
    )
}

PressIconLink.propTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}

export default PressIconLink