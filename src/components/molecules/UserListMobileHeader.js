import React from 'react'
import { Box, Typography } from '@mui/material'

const UserListMobileHeader = ({ name1, name2 }) => {
    return (
        <Box
            sx={{
                width: '100%',
                height: 176,
                backgroundColor: 'primary.dark',
                position: 'relative',
            }}
        >
            <Box sx={{
                bottom: '20%',
                position: 'absolute',
                left: '10%',
            }}>
                <Typography
                    sx={{
                        fontSize: 40,
                        fontWeight: 'bold',
                        color: 'white'
                    }}
                    variant="h1"
                >
                    {name1}
                </Typography>
                <Typography sx={{
                    fontSize: 32,
                    color: 'white',
                    fontWeight: 'bold'
                }}
                    variant="subtitle1">{name2}</Typography>
            </Box>
        </Box>
    )
}

export default UserListMobileHeader