import React from 'react'
import { Box, IconButton, Typography } from '@mui/material'
import { Assignment } from '@mui/icons-material'
import { grey } from '@mui/material/colors'
import { formatIDR } from 'commands/application/priceCommand'

const UserItemContentMobilePopup = () => {
  return (
    <Box sx={{
        display: 'flex',
        gap: 5
    }}>
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            width: 70,
            backgroundColor: grey[300],
            borderRadius: 2,
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: 1,
        }}>
            <Typography sx={{
                fontSize: 23,
            }} variant="body2">Total</Typography>
            <IconButton sx={{ fontSize: 30 }} disabled><Assignment />53</IconButton>
        </Box>
        <Box sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: grey[300],
            borderRadius: 2,
            justifyItems: 'center',
            paddingLeft: 1,
            alignItems: 'start',
            boxShadow: 1
        }}>
            <Typography sx={{fontSize: 23}}>Total</Typography>
            <Typography sx={{fontSize: 23}}>{formatIDR(12000000)}</Typography>
        </Box>
    </Box>
  )
}

export default UserItemContentMobilePopup