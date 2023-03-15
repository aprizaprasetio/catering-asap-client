import React from 'react'
import { Box, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'

const CardItemBankUserDetialAdmin = ({ bankName, bankNumber }) => {
    const bankResponsive = {
        md: 120,
        lg: 200
    }

    return (
        <>
            <Box sx={{
                borderRadius: 3,
                overflow: 'auto'
            }}>
                <Box sx={{
                    display: 'flex',
                    width: bankResponsive,
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingY: 5,
                    backgroundColor: grey[100],
                }}>
                    <Box>
                        <Typography sx={{ fontWeight: 'bold' }}>{bankName}</Typography>
                        <Typography sx={{ fontSize: 14 }}>{bankNumber}</Typography>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default CardItemBankUserDetialAdmin