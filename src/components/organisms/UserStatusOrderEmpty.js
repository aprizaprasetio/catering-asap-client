import { ReceiptLongOutlined, ReceiptLongRounded } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import React from 'react'

const UserStatusOrderEmpty = () => {
    const fontSize = {
        xs: 70,
        md: 150
    }
    const margin = {
        xs: 10,
        md: 5
    }
    const position = {
        xs: '25%',
        md: '45%'
    }

    return (
        <>
            <Box sx={{
                position: 'absolute',
                top: '35%',
                left: position
            }}>
                <ReceiptLongOutlined sx={{ fontSize: fontSize, color: grey[400] , marginLeft: margin }} />
                <Typography color={grey[500]} >Tidak ada pesanan yang di proses</Typography>
            </Box>
        </>
    )
}

export default UserStatusOrderEmpty