import React from 'react'
import { Link } from 'react-router-dom'
import PressIconLinkProps from 'proptypes/atoms/PressIconLinkProps'
import PressIcon from 'components/atoms/PressIcon'

const PressIconLink = ({ href, children }) => {
    return (
        <Link to={href}>
            <PressIcon>
                {children}
            </PressIcon>
        </Link>
    )
}

PressIconLink.propTypes = PressIconLinkProps

export default PressIconLink