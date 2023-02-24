import { Box, Card, Typography } from '@mui/material'
import React from 'react'

const CardItemGraphic = ({title}) => {
    return (
        <>
            <Card sx={{
                display: 'flex',
                boxShadow: 5,
                width: 195  ,
                borderRadius: 3,
                paddingY: 3,
                paddingX: 1,
                justifyContent: 'space-around'
                }}>
                <Box>
                    <Typography sx={{fontWeight: 'bold', fontSize: 14}}>{title}</Typography>
                    <Typography sx={{fontSize: 12}}>/Tahun</Typography>
                </Box>
                <Typography sx={{fontSize: 32, fontWeight: 'bold'}}>50%</Typography>
            </Card>
        </>
    )
}

export default CardItemGraphic