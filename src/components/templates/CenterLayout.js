import React from 'react'
import { Container, Grid } from '@mui/material'
import PropTypes from 'prop-types'
import ButtonScrollTop from '../molecules/ButtonScrollTop'

const gridStyle = {
    marginY: 3,
}

const CenterLayout = ({ children }) => {
    return (
        <Container sx={gridStyle}>
            {children}
            <ButtonScrollTop />
        </Container>
    )
}

CenterLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default CenterLayout