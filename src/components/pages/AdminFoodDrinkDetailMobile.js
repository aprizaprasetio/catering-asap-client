import React from 'react'
import {
    Box, Paper, Stack, List, CardMedia, Button, IconButton
}
    from '@mui/material'
import { MoodBadRounded, MoodRounded, SentimentNeutralRounded } from '@mui/icons-material'
import { red, blue } from '@mui/material/colors'
import DynamicNavbar from 'components/organisms/DynamicNavbar'
import CenterLayout from 'components/templates/CenterLayout'
import { useTrigger } from 'commands/builders/commonBuilder'
import EditIcon from '@mui/icons-material/Edit'
import { useFoodDrinkDetail } from 'api/hooks/catalogAdminHook'
import { useNavigate } from 'react-router-dom'
import { UseFoodDrinkDelete, UseFoodDrinkUpdate } from 'api/hooks/catalogAdminHook'
import { useFormik } from 'formik'
import * as yup from 'yup'
import TextBoxFormMobileFoodDrink from 'components/molecules/TextBoxFormMobileFoodDrink'
import LoadingFull from 'components/atoms/LoadingFull'
import TextBoxFormMobileFoodDrinkDesk from 'components/molecules/TextBoxFormMobileFoodDrinkDesk'

const AdminFoodDrinkDetailMobile = () => {
    const { data, isFetchedAfterMount } = useFoodDrinkDetail()
    const [isEditMode, isEditModeTrigger] = useTrigger()
    const { mutate: updateHandler } = UseFoodDrinkUpdate()
    const navigate = useNavigate()
    const { mutate: deleteHandler } = UseFoodDrinkDelete()
    const nilai = {
        like: 99,
        ok: 99,
        dislike: 99,
    }
    const yupConfig = yup.object({
        image_Url: yup
            .string()
            .required(),
        name: yup
            .string()
            .required(),
        price: yup
            .number()
            .required(),
        minOrder: yup
            .number()
            .required(),
        description: yup
            .string()
            .required(),
    })

    const formikConfig = useFormik({
        initialValues: {
            id: '',
            name: '',
            price: '',
            minOrder: '',
            description: '',
        },
        validationSchema: yupConfig,
        validateOnChange: false,
    })

    React.useEffect(() => {
        if (!isFetchedAfterMount) return

        formikConfig.setValues({
            id: data.id,
            name: data.name,
            price: data.price,
            minOrder: data.min_Order,
            description: data.description,
        })
    }, [isFetchedAfterMount])

    const nameConfig = {
        name: 'name',
        label: 'Makanan & Minuman',
        value: formikConfig.values.name,
        onChange: formikConfig.handleChange,
        helperText: formikConfig.errors.email
    }
    const priceConfig = {
        name: 'price',
        label: 'Harga',
        value: formikConfig.values.price,
        onChange: formikConfig.handleChange,
        helperText: formikConfig.errors.price
    }
    const minOrderConfig = {
        name: 'minorder',
        label: 'Min. Pemesanan',
        value: formikConfig.values.minOrder,
        onChange: formikConfig.handleChange,
        helperText: formikConfig.errors.minOrder,
    }
    const descriptionConfig = {
        name: 'description',
        label: 'Deskripsi',
        value: formikConfig.values.description,
        onChange: formikConfig.handleChange,
        helperText: formikConfig.errors.description,
    }

    if (!isFetchedAfterMount) return <LoadingFull />

    return (
        <>
            <DynamicNavbar>{data?.name}</DynamicNavbar>
            <CenterLayout>
                <Box
                    component={Paper}

                    sx={{
                        width: '100%',
                        paddingX: 1,
                        boxShadow: 0,

                    }}>
                    {
                        isEditMode ?
                            (
                                <>
                                    <CardMedia
                                        sx={{
                                            marginY: 1,
                                            borderRadius: 2
                                        }}
                                        component="img"
                                        height="194"
                                        image="https://picsum.photos/600.webp"
                                        alt="Paella dish"

                                    />
                                    <IconButton variant="contained" component="label" sx={{
                                        marginTop: -48,
                                        marginLeft: 2,
                                        width: 10,
                                    }}>
                                        <EditIcon />
                                        <input hidden accept="image/*" multiple type="file" />
                                    </IconButton>
                                </>

                            ) : (

                                <CardMedia
                                    sx={{
                                        marginY: 1,
                                        borderRadius: 2
                                    }}
                                    component="img"
                                    height="194"
                                    image="https://picsum.photos/600.webp"
                                    alt="Paella dish"

                                />

                            )
                    }
                    <List component={Stack} margin={0} direction='column'>
                        <TextBoxFormMobileFoodDrink
                            open={isEditMode} config={nameConfig} />
                        <TextBoxFormMobileFoodDrink
                            open={isEditMode} config={priceConfig} />
                        <TextBoxFormMobileFoodDrink
                            open={isEditMode} config={minOrderConfig} />

                        <TextBoxFormMobileFoodDrinkDesk
                            open={isEditMode} config={descriptionConfig} />

                        <List component={Stack} direction="row" width={'50%'} >
                            <MoodRounded content={nilai.like} />
                            <SentimentNeutralRounded content={nilai.ok} />
                            <MoodBadRounded content={nilai.dislike} />
                        </List>
                    </List>
                </Box>
                <List component={Stack} direction='column' gap={1} >

                    {isEditMode ? (
                        <Button
                            onClick={() => {
                                updateHandler(
                                    { ...formikConfig.values },
                                    { onSuccess: isEditModeTrigger },
                                )
                            }}
                            variant='contained'
                            sx={{
                                borderRadius: 2,
                                backgroundColor: blue[300],
                            }}>
                            Simpan
                        </Button>
                    ) : (
                        <Button
                            onClick={isEditModeTrigger}
                            variant='contained'
                            sx={{
                                borderRadius: 2,
                                backgroundColor: blue[300],
                            }}>
                            Ubah
                        </Button>
                    )

                    }

                    <Button onClick={() => deleteHandler(data.id, { onSuccess: () => navigate('/admin/menus') })} sx={{
                        borderRadius: 2,
                        color: red[400],
                    }}>Hapus </Button>
                </List>
            </CenterLayout>
        </>
    )
}
export default AdminFoodDrinkDetailMobile
