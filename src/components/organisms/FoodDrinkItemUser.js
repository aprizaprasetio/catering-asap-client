import React from 'react'
import PropTypes from 'prop-types'
import FoodDrinkItem from './FoodDrinkItem'
import FoodDrinkImage from '../molecules/FoodDrinkImage'
import FoodDrinkFooter from '../molecules/FoodDrinkFooter'
import FoodDrinkBody from '../molecules/FoodDrinkBody'
import FoodDrinkReact from '../molecules/FoodDrinkReact'
import FoodDrinkButton from '../molecules/FoodDrinkButton'
import { Grid, Typography } from '@mui/material'
import { AddShoppingCart } from '@mui/icons-material'

const FoodDrinkItemUser = ({ name = 'Judul', price = 192000 }) => {
    const reactValues = {
        like: 99,
        ok: 99,
        dislike: 99,
    }

    const buttonStyle = {
        display: {
            md: 'none',
            lg: 'inline-block'
        },
        fontFamily: 'sans-serif',
    }

    return (
        <FoodDrinkItem>
            <FoodDrinkImage image="https://picsum.photos/600.webp" />
            <FoodDrinkBody name={name} price={price} />
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

FoodDrinkItemUser.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
}

export default FoodDrinkItemUser