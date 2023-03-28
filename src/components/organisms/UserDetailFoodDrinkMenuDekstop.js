import { AddShoppingCart } from '@mui/icons-material'
import { Box, Button, CardMedia, Divider, Skeleton, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import { useAddCart } from 'api/hooks/cartHook'
import { useFoodDrinkDetail } from 'api/hooks/catalogUserHook'
import { formatIDR } from 'commands/application/priceCommand'
import FoodDrinkReact from 'components/molecules/FoodDrinkReact'
import React from 'react'
import SkeletonListDetail from './SkeletonListDetail'

const UserDetailFoodDrinkMenuDekstop = () => {
    const { data, isFetching } = useFoodDrinkDetail()

    const reactValues = {
        like: data?.data?.like,
        ok: data?.data?.ok,
        dislike: data?.data?.dislike,
    }

    const buttonStyle = {

        fontFamily: 'sans-serif',
    }

    const widthButton = {
        md: 300,
        lg: 400
    }

    const imageRespon = {
        md: 250,
        lg: 350
    }

    const heightImage = {
        md: 300,
        lg: 400
    }

    const display = {
        xs: 'inline-block',
        md: 'flex',
        lg: 'flex'
    }

    const divider = {
        xs: 'none',
        md: 'block'
    }

    const fontRespon = {
        md: 26,
        lg: 32
    }

    const fontIdrRespon = {
        md: 18,
        lg: 22
    }

    const addCart = useAddCart()

    return (
        <>
            <Stack direction={'row'} spacing={2} divider={<Divider orientation="vertical" sx={{ display: divider }} />} sx={{
                display: display,
            }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 5,
                    flex: 1,
                    alignItems: 'end',
                    justifyContent: 'space-between',
                }}>
                    {
                        isFetching
                            ?
                            <Skeleton variant="rounded" width={350} height={400} />
                            :
                            <CardMedia
                                component={'img'}
                                sx={{
                                    width: imageRespon,
                                    height: heightImage,
                                    borderRadius: 3,
                                    objectFit: 'cover'
                                }}
                                image={data?.data?.image_Url}
                                alt='Zonk'
                            />
                    }
                    <FoodDrinkReact values={reactValues} />
                </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                    justifyContent: 'space-between',
                }}>
                    {
                        isFetching ? <SkeletonListDetail />
                            :
                            <Box sx={{}}>
                                <Typography sx={{ fontWeight: 'bold', fontSize: fontRespon }}>{data?.data?.name}</Typography>
                                <Typography sx={{ fontWeight: 'bold', fontSize: fontIdrRespon }}>{formatIDR(data?.data?.price)}</Typography>
                                <Typography>min: {data?.data?.min_Order}</Typography>
                                <Typography>{data?.data?.description}</Typography>
                            </Box>
                    }
                    {
                        isFetching ? <Skeleton width={300} height={50} />
                            : <Button variant="contained" sx={{ borderRadius: 3, width: widthButton, marginTop: 5 }} onClick={() => addCart(data?.data?.id)}>
                                <AddShoppingCart />
                                <Typography component="p" sx={buttonStyle}>Tambah</Typography>
                            </Button>
                    }
                </Box>
            </Stack>
        </>
    )
}

export default UserDetailFoodDrinkMenuDekstop