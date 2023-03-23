import React from 'react'
import { Paper } from '@mui/material'

const bannerStyle = {
    width: '100%',
    height: {
        xs: 250,
        md: 300,
    },
    boxShadow: 4,
    borderRadius: 4,
    objectFit: 'cover',
}

const BannerItem = ({ image }) => <Paper component={"img"} src={image} sx={bannerStyle} />

export default BannerItem