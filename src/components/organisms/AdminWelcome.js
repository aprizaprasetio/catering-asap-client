import React from 'react'
import { Grid, Box, Paper, Typography, Icon } from '@mui/material'
import { Home } from '@mui/icons-material'
import { Dashboard } from '@mui/icons-material'
import AdminWelcomeProps from 'proptypes/organisms/AdminWelcomeProps'

const boxStyle = {
    height: '100%',
    paddingX: 6,
    paddingY: 8,
    display: 'flex',
    gap: 3,
    justifyContent: 'space-between',
    alignItems: 'end',
    background: 'linear-gradient(to right bottom, #009FFD, #2A2A72)',
    borderRadius: 4,
    color: 'white',
}

const headerStyle = {
    fontSize: 30,
    fontWeight: 'bold',
}

const messageStyle = {
    fontSize: 20,
    fontWeight: 'bold',
}

const iconStyle = {
    fontSize: 100,
    opacity: .5,
    display: {
        xs: 'none',
        md: 'block',
    },
}

const AdminWelcome = ({ header, message, body }) => {
    return (
        <Grid item xs={7}>
            <Box component={Paper} sx={boxStyle} elevation={3}>
                <Box>
                    <Home sx={{
                        fontSize: 50,
                    }} />
                    <Typography variant="subtitle1" sx={messageStyle}>{message}</Typography>
                    <Typography variant="h2" sx={headerStyle}>{header}</Typography>
                    <Typography variant="body1">{body}</Typography>
                </Box>
                <Dashboard sx={iconStyle} />
            </Box>
        </Grid>
    )
}

AdminWelcome.propTypes = AdminWelcomeProps

export default AdminWelcome