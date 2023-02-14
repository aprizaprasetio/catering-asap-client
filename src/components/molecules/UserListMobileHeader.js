import React from 'react'
import { Box, Typography } from '@mui/material'

const UserListMobileHeader = ({ name1, name2 }) => {
    return (
        <Box
            sx={{
                height: 120,
                backgroundColor: 'primary.dark',
                position: 'relative',
            }}
        >
            <Box sx={{
                bottom: '20%',
                position: 'absolute',
                paddingLeft: '3%',
                marginLeft: {
                    sm: '100px'
                }
            }}>
                <Typography
                    sx={{
                        fontSize: 30,
                        fontWeight: 'bold',
                        color: 'white'
                    }}
                    variant="h1"
                >
                    {name1}
                </Typography>
                <Typography sx={{
                    fontSize: 22,
                    color: 'white',
                    fontWeight: 'bold'
                }}
                    variant="subtitle1">{name2}</Typography>
            </Box>
        </Box>
    )
}

export default UserListMobileHeader