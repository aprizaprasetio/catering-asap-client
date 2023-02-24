import React from 'react'
import CardItemGraphicTablet from 'components/molecules/CardItemGraphicTablet'
import Graphic from 'components/molecules/Graphic'
import { Box, Card, Typography } from '@mui/material'
import CardItemUserGraphic from 'components/molecules/CardItemUserGraphic'
import GraphicWrapper from './GraphicWrapper'

const GraphicContainerTablet = () => {
    const display = {
        xs: 'none',
        md: 'block',
    }

    return (
        <Box display={display}>
            <Box>
                <CardItemGraphicTablet />
                <Box sx={{
                    display: 'flex',
                    // justifyContent: 'space-between',
                    gap: 4
                }}>
                    <Card sx={{
                        width: 560,
                        marginTop: 3,
                        boxShadow: 5,
                        borderRadius: 3,
                        padding: 3
                    }}>
                        <Graphic height={500} />
                    </Card>
                    <Card sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                        borderRadius: 3,
                        padding: 3,
                        marginTop: 3,
                        boxShadow: 5
                    }}>
                        <Typography sx={{ fontWeight: 'bold' }}>History Penjualan</Typography>
                        <CardItemUserGraphic />
                        <CardItemUserGraphic />
                        <CardItemUserGraphic />
                        <CardItemUserGraphic />
                    </Card>
                </Box>
            </Box>
        </Box>
    )
}

export default GraphicContainerTablet