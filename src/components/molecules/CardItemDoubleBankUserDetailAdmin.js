import { Box, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import React from 'react'

const CardItemDoubleBankUserDetailAdmin = ({ bankAccounts }) => {
    const bankResponsive = {
        md: 120,
        lg: 140
    }

    return (
        <>
            <Box sx={{ display: 'flex', borderRadius: 3, overflow: 'auto' }}>
                <Box sx={{
                    display: 'flex',
                    width: bankResponsive,
                    paddingY: 5,
                    paddingX: 2,
                    backgroundColor: grey[100],
                }}>
                    <Box>
                        <Typography sx={{ fontWeight: 'bold' }}>{bankAccounts[0].bankName}</Typography>
                        <Typography sx={{ fontSize: 14 }}>{bankAccounts[0].bankNumber}</Typography>
                    </Box>
                </Box>
                <Box sx={{
                    display: 'flex',
                    width: bankResponsive,
                    paddingY: 5,
                    paddingX: 3,
                    backgroundColor: grey[300],
                }}>
                    <Box>
                        <Typography sx={{ fontWeight: 'bold' }}>{bankAccounts[1].bankName}</Typography>
                        <Typography sx={{ fontSize: 14 }}>{bankAccounts[1].bankNumber}</Typography>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default CardItemDoubleBankUserDetailAdmin