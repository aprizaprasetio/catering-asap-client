import React from 'react'
import { Avatar, Icon, Typography } from '@mui/material'
import { deepOrange } from '@mui/material/colors'
import { Box } from '@mui/system'
import { Male, Female, Man } from '@mui/icons-material'

const UserItemBioMobile = () => {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
        }}>
            <Avatar
                sx={{
                    bgcolor: deepOrange[500],
                    width: 49,
                    height: 49,
                    boxShadow: 2
                }}
                alt="Remy Sharp"
                src="/broken-image.jpg"
            >
                B
            </Avatar>
            <Box>
                <Typography sx={{
                    fontSize: 15,
                    fontWeight: 'bold'
                }}
                    variant="h3">Name</Typography>
                <Typography sx={{
                    fontSize: 12,
                    fontWeight: 600
                }}
                    variant="h3">Email@gmail.com</Typography>
                <Typography sx={{
                    fontSize: 12,
                    fontWeight: 600
                }}
                    variant="h3">083675456734</Typography>
            </Box>
            <Icon><Man /></Icon>
        </Box>
    )
}

export default UserItemBioMobile