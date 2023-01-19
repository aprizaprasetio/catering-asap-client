import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Container } from '@mui/material'
import { KeyboardArrowRight, KeyboardArrowLeft } from '@mui/icons-material'
import BannerItem from 'components/atoms/BannerItem'

const FoodDrinkPromotion = () => {
    return (
        <Carousel component={Container} NextIcon={<KeyboardArrowRight />} PrevIcon={<KeyboardArrowLeft />} >
            <BannerItem image="https://picsum.photos/1200/500?a.webp" />
            <BannerItem image="https://picsum.photos/1200/500?b.webp" />
            <BannerItem image="https://picsum.photos/1200/500?c.webp" />
        </Carousel>
    )
}

export default FoodDrinkPromotion