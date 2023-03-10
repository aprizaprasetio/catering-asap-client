import React from 'react'
import { Box, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'

const CardItemBankUserDetialAdmin = ({ bank_Name, bank_Number }) => {
    const bankResponsive = {
        md: 120,
        lg: 200
    }

    return (
        <>
            <Box sx={{
                display: 'flex',
                width: bankResponsive,
                justifyContent: 'center',
                alignItems: 'center',
                paddingY: 5,
                backgroundColor: grey[100],
            }}>
                <Box>
                    <Typography sx={{ fontWeight: 'bold' }}>{bank_Name}</Typography>
                    <Typography sx={{ fontSize: 14 }}>{bank_Number}</Typography>
                </Box>
            </Box>
            {/* <Box sx={{
                display: 'flex',
                width: bankResponsive,
                justifyContent: 'center',
                alignItems: 'center',
                paddingY: 5,
                backgroundColor: grey[300]
            }}>
                <Box>
                    <Typography sx={{ fontWeight: 'bold' }}>{data?.bankAccounts.map(data => data.bank_Name)}</Typography>
                    <Typography sx={{ fontSize: 14 }}>{data?.bankAccounts.map(data => data.bank_Number)}</Typography>
                </Box>
            </Box> */}
        </>
    )
}

export default CardItemBankUserDetialAdmin