import React from 'react'
import { Box, Typography, Avatar, Icon } from '@mui/material'
import { Male, Female, Man } from '@mui/icons-material'
import { deepOrange } from '@mui/material/colors'

const UserItemBioMobilePopup = () => {
  return (
    <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
    }}>
        <Avatar
            sx={{
                bgcolor: deepOrange[500],
                width: 65,
                height: 65,
                boxShadow: 2
            }}
            alt="Remy Sharp"
            src="/broken-image.jpg"
        >
            B
        </Avatar>
        <Box>
            <Typography sx={{
                fontSize: 24,
                fontWeight: 'bold'
            }}
                variant="h3">Name</Typography>
            <Typography sx={{
                fontSize: 18,
                fontWeight: 600
            }}
                variant="h3">Email@gmail.com</Typography>
            <Typography sx={{
                fontSize: 18,
                fontWeight: 600
            }}
                variant="h3">083675456734</Typography>
        </Box>
        <Icon><Man /></Icon>
    </Box>
  )
}

export default UserItemBioMobilePopup