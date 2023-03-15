import React from 'react'
import { Grid, Typography } from '@mui/material'
import { AddShoppingCart } from '@mui/icons-material'
import FoodDrinkItemUserProps from 'proptypes/organisms/FoodDrinkItemUserProps'
import FoodDrinkItem from 'components/organisms/FoodDrinkItem'
import FoodDrinkImage from 'components/molecules/FoodDrinkImage'
import FoodDrinkFooter from 'components/molecules/FoodDrinkFooter'
import FoodDrinkBody from 'components/molecules/FoodDrinkBody'
import FoodDrinkReact from 'components/molecules/FoodDrinkReact'
import FoodDrinkButton from 'components/molecules/FoodDrinkButton'
import { useAddCart } from 'api/hooks/cartHook'

const FoodDrinkItemUser = ({ id, name, price }) => {
    const reactValues = {
        like: 99,
        ok: 99,
        dislike: 99,
    }

    const addStyle = {
        display: {
            xs: 'none',
            sm: 'block',
        }
    }

    const buttonStyle = {
        display: {
            md: 'none',
            lg: 'inline-block'
        },
        fontFamily: 'sans-serif',
    }

    const addCart = useAddCart()

    return (
        <FoodDrinkItem>
            <FoodDrinkImage image="https://picsum.photos/600.webp" />
            <FoodDrinkBody name={name} price={price} />
            <FoodDrinkFooter>
                <FoodDrinkReact values={reactValues} />
                <FoodDrinkButton onClick={() => addCart(id)} component={Grid} item sx={addStyle}>
                    <AddShoppingCart />
                    <Typography component="p" sx={buttonStyle}>Tambah</Typography>
                </FoodDrinkButton>
            </FoodDrinkFooter>
        </FoodDrinkItem>
    )
}

FoodDrinkItemUser.propTypes = FoodDrinkItemUserProps

export default FoodDrinkItemUser