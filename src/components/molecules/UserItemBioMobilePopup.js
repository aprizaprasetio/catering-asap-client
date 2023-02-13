import React from 'react'
import { Box, Typography, Avatar, Icon } from '@mui/material'
import { Male, Female, Man } from '@mui/icons-material'
import { deepOrange } from '@mui/material/colors'

const UserItemBioMobilePopup = ({ image, name, email, phone }) => {
  return (
    <Box sx={{
        display: 'flex',
        justifyContent: 'space-between'
    }}>
        <Avatar
            sx={{
                width: 48,
                height: 48,
                boxShadow: 2
            }}
            alt="Remy Sharp"
            src={image}
        >
            B
        </Avatar>
        <Box sx={{marginLeft: 3}}>
            <Typography sx={{
                fontSize: 24,
                fontWeight: 'bold',
            }}
                variant="h3">{name}</Typography>
            <Typography sx={{
                fontSize: 16,
                fontWeight: 600
            }}
                variant="h3">{email}</Typography>
            <Typography sx={{
                fontSize: 14,
                fontWeight: 600
            }}
                variant="h3">{phone}</Typography>
        </Box>
        <Icon><Female fontSize='medium'/></Icon>
    </Box>
  )
}

export default UserItemBioMobilePopup