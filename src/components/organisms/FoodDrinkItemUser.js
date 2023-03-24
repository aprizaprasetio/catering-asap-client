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
import { useNavigate } from 'react-router-dom'

const FoodDrinkItemUser = ({ id, name, price, type, image_Url, like, ok, dislike }) => {
    const reactValues = {
        like: like,
        ok: ok,
        dislike: dislike,
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
    const navigate = useNavigate()

    const addCart = useAddCart()

    return (
        <FoodDrinkItem>
            <FoodDrinkImage image={image_Url} type={type} onClick={() => navigate(`/menus/${id}`)} />
            <FoodDrinkBody name={name} price={price} onClick={() => navigate(`/menus/${id}`)} />
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