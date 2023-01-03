import React from 'react'
import { Container, Grid } from '@mui/material'
import PropTypes from 'prop-types'

const CenterLayout = ({ children }) => {
    return (
        <Container>
            <Grid container direction="column" justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
                {children}
            </Grid>
        </Container>
    )
}

CenterLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default CenterLayout