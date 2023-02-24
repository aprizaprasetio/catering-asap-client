import { AutoGraph } from '@mui/icons-material'
import { Box, Typography, Icon, Card } from '@mui/material'
import { width } from '@mui/system'
import React from 'react'

const CardItemGraphicTablet = () => {
    const display = {
        xs: 'none',
        md: 'block'
    }
    return (
        <Box display={display}>
            <Box sx={{
                display: 'flex',
                gap: 3,
            }}>
                <Card sx={{
                    borderRadius: 3,
                    boxShadow: 5,
                    padding: 3,
                    display: 'flex',
                    gap: 3,
                    width: 500
                }}>
                    <Icon sx={{ fontSize: 50 }}><AutoGraph fontSize='large' /></Icon>
                    <Box>
                        <Typography sx={{ fontWeight: 'bold' }}>Profit</Typography>
                        <Typography sx={{ fontSize: 32, fontWeight: 'bold' }}>IDR.2.000.000.000</Typography>
                    </Box>
                </Card>
                <Box sx={{
                    display: 'flex',
                    gap: 3,
                }}>
                    <Card sx={{
                        borderRadius: 3,
                        boxShadow: 5,
                        padding: 3,
                        width: 200
                    }}>
                        <Typography sx={{ fontWeight: 'bold' }}>Profit</Typography>
                        <Typography sx={{ fontSize: 42, fontWeight: 'bold' }}>60%</Typography>
                    </Card>
                    <Card sx={{
                        borderRadius: 3,
                        boxShadow: 5,
                        padding: 3,
                        width: 200
                    }}>
                        <Typography sx={{ fontWeight: 'bold' }}>Profit</Typography>
                        <Typography sx={{ fontSize: 42, fontWeight: 'bold' }}>40%</Typography>
                    </Card>
                </Box>
            </Box>
        </Box>
    )
}

export default CardItemGraphicTablet