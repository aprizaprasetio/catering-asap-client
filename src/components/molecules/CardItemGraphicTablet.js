import { AutoGraph, KeyboardArrowDown, KeyboardArrowUp, KeyboardDoubleArrowDown, KeyboardDoubleArrowUp } from '@mui/icons-material'
import { Box, Typography, Paper } from '@mui/material'
import React from 'react'
import { useDataGraph } from 'api/hooks/ordersManagementHook'
import { formatIDR } from 'commands/application/priceCommand'

const Arrow = ({ percent }) => {
    if (percent > 0)
        return (percent >= 5) ?
            <KeyboardDoubleArrowUp sx={{ fontSize: 50, color: '#1bf538' }} /> : <KeyboardArrowUp sx={{ fontSize: 50, color: '#1bf538' }} />
    else if(percent == 0)
        return 
    return (percent <= -5) ?
        <KeyboardDoubleArrowDown sx={{ fontSize: 50, color: '#f52020' }} /> : <KeyboardArrowDown sx={{ fontSize: 50, color: '#f52020' }} />
}

const CardItemGraphicTablet = () => {
    const { data } = useDataGraph()

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
                <Paper sx={{
                    flex: 2,
                    borderRadius: 3,
                    boxShadow: 5,
                    padding: 3,
                    display: 'flex',
                    gap: 5,
                }}>
                    <AutoGraph sx={{ fontSize: 60, marginY: 'auto' }} />
                    <Box>
                        <Typography sx={{ fontWeight: 'bold' }}>Total Pendapatan</Typography>
                        <Typography sx={{ fontSize: 36, fontWeight: 'bold' }}>{formatIDR(data?.totalIncome)}</Typography>
                    </Box>
                </Paper>
                <Box sx={{
                    flex: 2,
                    display: 'flex',
                    gap: 3,
                }}>
                    <Paper sx={{
                        flex: 1,
                        borderRadius: 3,
                        boxShadow: 5,
                        padding: 3,
                    }}>
                        <Typography sx={{ fontWeight: 'bold' }}>Komparasi Pendapatan</Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'center' }} >
                            <Arrow percent={data?.dataComparison} />
                            <Typography sx={{ fontSize: 36, fontWeight: 'bold' }}>{data?.dataComparison}%</Typography>
                        </Box>
                    </Paper>
                    <Paper sx={{
                        flex: 1,
                        borderRadius: 3,
                        boxShadow: 5,
                        padding: 3,
                    }}>
                        <Typography sx={{ fontWeight: 'bold' }}>Total Pesanan</Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
                            <Typography sx={{ fontSize: 36, fontWeight: 'bold' }}>{data?.totalOrdered}</Typography>
                            <Typography sx={{ fontWeight: 'bold', position: 'absolute', right: '10%', bottom: 0 }}>pcs</Typography>
                        </Box>
                    </Paper>
                </Box>
            </Box>
        </Box>
    )
}

export default CardItemGraphicTablet