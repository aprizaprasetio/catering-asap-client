import React from 'react'
import { Paper } from '@mui/material'
import { Link } from 'react-router-dom'

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

const BannerItem = ({ image, link }) => {
    return (
        <a href={link} target='_blank'>
            <Paper component={"img"} src={image} sx={bannerStyle} />
        </a>
    )
}

export default BannerItem