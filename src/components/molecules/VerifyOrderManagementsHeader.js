import React from 'react'
import { ArrowBack } from '@mui/icons-material'
import { Box, IconButton, Typography } from '@mui/material'

const VerifyOrderManagementsHeader = () => {
  return (
    <>
    <Box
    sx={{
        background: 'linear-gradient(to left bottom, #009FFD, #2A2A72)',
        height: 50,
        display: 'flex',
    }}>
        <IconButton><ArrowBack /></IconButton>
        <Typography sx={{
            marginLeft: 19,
            marginTop: 1,
            color: 'white',
            fontSize: 18,
            fontWeight: 'bold'
        }}>Verifikasi</Typography>
    </Box>
    </>
  )
}

export default VerifyOrderManagementsHeader