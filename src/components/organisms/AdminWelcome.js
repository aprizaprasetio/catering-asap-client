import React from 'react'
import { Box, Paper, Typography } from '@mui/material'
import { Dashboard } from '@mui/icons-material'
import AdminWelcomeProps from 'proptypes/organisms/AdminWelcomeProps'

const boxStyle = {
    paddingX: 6,
    paddingY: 8,
    display: 'flex',
    gap: 3,
    backgroundColor: 'primary.main',
    borderRadius: 4,
    boxShadow: 4,
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
        <Box component={Paper} sx={boxStyle}>
            <Box>
                <Typography variant="subtitle1" sx={messageStyle}>{message}</Typography>
                <Typography variant="h2" sx={headerStyle}>{header}</Typography>
                <Typography variant="body1">{body}</Typography>
            </Box>
            <Dashboard sx={iconStyle} />
        </Box>
    )
}

AdminWelcome.propTypes = AdminWelcomeProps

export default AdminWelcome