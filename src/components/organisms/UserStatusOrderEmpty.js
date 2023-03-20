import { ReceiptLongOutlined, ReceiptLongRounded } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import React from 'react'

const UserStatusOrderEmpty = () => {
    return (
        <>
            <Box sx={{
                position: 'absolute',
                top: '35%',
                left: '45%'
            }}>
                <ReceiptLongOutlined sx={{ fontSize: 150, color: grey[400] , marginLeft: 5 }} />
                <Typography color={grey[500]} >Tidak ada pesanan yang di proses</Typography>
            </Box>
        </>
    )
}

export default UserStatusOrderEmpty