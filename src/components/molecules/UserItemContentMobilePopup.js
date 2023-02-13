import React from 'react'
import { Box, IconButton, Typography } from '@mui/material'
import { Assignment, Padding } from '@mui/icons-material'
import { grey } from '@mui/material/colors'
import { formatIDR } from 'commands/application/priceCommand'

const UserItemContentMobilePopup = () => {
  return (
    <Box sx={{
        display: 'flex',
        gap: 4
    }}>
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            width: 50,
            backgroundColor: grey[100],
            borderRadius: 2,
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: 1,
            paddingTop: 1
        }}>
            <Typography sx={{
                fontSize: 18,
            }} variant="body2">Total</Typography>
            <IconButton sx={{ fontSize: 20}} disabled><Assignment />53</IconButton>
        </Box>
        <Box sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: grey[100],
            borderRadius: 2,
            justifyItems: 'center',
            paddingLeft: 2,
            alignItems: 'start',
            boxShadow: 1,
        }}>
            <Typography sx={{fontSize: 18, marginTop: 1}}>Total</Typography>
            <Typography sx={{fontSize: 16}}>{formatIDR(12000000)}</Typography>
        </Box>
    </Box>
  )
}

export default UserItemContentMobilePopup