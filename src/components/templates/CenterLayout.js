import React from 'react'
import { Container } from '@mui/material'
import CenterLayoutProps from 'proptypes/templates/CenterLayoutProps'
import ButtonScrollTop from 'components/molecules/ButtonScrollTop'

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

CenterLayout.propTypes = CenterLayoutProps

export default CenterLayout