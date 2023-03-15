import React from 'react'
import { Container, Box } from '@mui/material'
import CenterLayoutProps from 'proptypes/templates/CenterLayoutProps'
import ButtonScrollTop from 'components/molecules/ButtonScrollTop'

const CenterLayout = ({ admin, header, children }) => {
    const gridStyle = {
        marginY: 3,
        display: 'grid',
        gap: 3,
        marginLeft: {
            xs: 'auto',
            sm: admin ? '100px' : 'auto',
        },
        maxWidth: {
            xs: 'auto',
            sm: 'calc(100% - 100px)'
        },
    }

    return (
        <>
            <Box sx={{
                marginLeft: {
                    xs: 'auto',
                    sm: admin ? '100px' : 'auto',
                },
            }}>
                {header}
            </Box>
            <Container sx={gridStyle}>
                {children}
            </Container>
            <ButtonScrollTop />
        </>
    )
}

CenterLayout.propTypes = CenterLayoutProps

export default CenterLayout