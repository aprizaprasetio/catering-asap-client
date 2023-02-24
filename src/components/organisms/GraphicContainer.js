import React from 'react'
import CardItemGraphic from 'components/molecules/CardItemGraphic'
import { Box, Typography } from '@mui/material'
import CardItemUserGraphic from 'components/molecules/CardItemUserGraphic'
import GraphicWrapper from './GraphicWrapper'
import Graphic from 'components/molecules/Graphic'

const GraphicContainer = () => {
    const display = {
        xs: 'block',
        md: 'none',
        height: 350
    }
    return (
        <Box display={display}>
            <Graphic {...display}/>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 3
            }}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-around'
                }}
                >
                    <CardItemGraphic title='Keuntungan' />
                    <CardItemGraphic title='Kerugian' />
                </Box>
                <Typography variant='subtitle1' sx={{ fontWeight: 500 }}>History Penjualan:</Typography>
                <GraphicWrapper>
                    <CardItemUserGraphic />
                    <CardItemUserGraphic />
                    <CardItemUserGraphic />
                    <CardItemUserGraphic />
                    <CardItemUserGraphic />
                    <CardItemUserGraphic />
                </GraphicWrapper>
            </Box>
        </Box>
    )
}

export default GraphicContainer