import React from 'react'
import FoodDrinkItem from './FoodDrinkItem'
import FoodDrinkImage from '../molecules/FoodDrinkImage'
import FoodDrinkFooter from '../molecules/FoodDrinkFooter'
import FoodDrinkBody from '../molecules/FoodDrinkBody'
import FoodDrinkReact from '../molecules/FoodDrinkReact'
import FoodDrinkButton from '../molecules/FoodDrinkButton'
import { Grid, Typography } from '@mui/material'
import { AddShoppingCart } from '@mui/icons-material'

const FoodDrinkItemUser = () => {
    const reactValues = {
        like: 99,
        ok: 99,
        dislike: 99,
    }

    const buttonStyle = {
        display: {
            md: 'none',
        },
        fontFamily: 'sans-serif',
    }

    const currency = Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
    })

    return (
        <FoodDrinkItem>
            <FoodDrinkImage image="https://picsum.photos/600.webp" />
            <FoodDrinkBody name="Judul" price={currency.format(129800)} />
            <FoodDrinkFooter>
                <FoodDrinkReact values={reactValues} />
                <Grid item>
                    <FoodDrinkButton>
                        <AddShoppingCart />
                        <Typography component="p" sx={buttonStyle}>Tambah</Typography>
                    </FoodDrinkButton>
                </Grid>
            </FoodDrinkFooter>
        </FoodDrinkItem>
    )
}

export default FoodDrinkItemUser