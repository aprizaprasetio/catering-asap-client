import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Container } from '@mui/material'
import { KeyboardArrowRight, KeyboardArrowLeft, Key } from '@mui/icons-material'
import BannerItem from 'components/atoms/BannerItem'
import { useFetchBanner } from 'api/hooks/bannerHook'

const FoodDrinkPromotion = () => {
    const { data } = useFetchBanner()
    return (
        <Carousel component={Container} NextIcon={<KeyboardArrowRight />} PrevIcon={<KeyboardArrowLeft />} >
            {
                data?.map(result => <BannerItem key={result.id} image={result.imagePath} link={result.link} />)
            }
        </Carousel>
    )
}

export default FoodDrinkPromotion