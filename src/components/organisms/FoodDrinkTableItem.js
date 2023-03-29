import React from 'react'
import { TableRow, TableCell, List, Stack, IconButton, Checkbox, Box, Chip }
    from '@mui/material'
import { MoodRounded, SentimentNeutralRounded, MoodBadRounded, KeyboardArrowDown, KeyboardArrowUp, Edit, Delete, LocalBar, LunchDining }
    from '@mui/icons-material'
import { useFormik } from 'formik'
import { client } from 'api/initiates/queryInitiate'
import * as yup from 'yup'
import FoodDrinkTableCollapsible from './FoodDrinkTableCollapsible'
import { useTrigger } from 'commands/builders/commonBuilder'
import ReactListItem from 'components/molecules/ReactListItem'
import FoodDrinkTableCell from 'components/molecules/FoodDrinkTableCell'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { useFoodDrinkDelete, useFoodDrinkUpdate } from 'api/hooks/catalogAdminHook'
import { useImage } from 'commands/builders/imageBuilder'
import { useFoodDrinkList2 } from 'api/hooks/catalogUserHook'
import ImageFooDrink from 'components/molecules/ImageFoodDrink'

const yupConfig = yup.object({
    image_Url: yup
        .string()
        .required(),
    name: yup
        .string()
        .required(),
    price: yup
        .number()
        .required()
        .positive('Masukan Angka Postive'),
    minOrder: yup
        .number()
        .required()
        .positive('Masukan Angka Postive')
        .max(99, 'Maximal Min order 99')
        .integer(),
    description: yup
        .string()
        .required(),
})

const FoodDrinkTableItem = ({ id, name, price, minOrder, description, image_Url, like, ok, dislike, type }) => {
    const [isEditMode, isEditModeTrigger] = useTrigger()
    const { mutate: deleteHandler } = useFoodDrinkDelete()
    const { mutate: updateHandler } = useFoodDrinkUpdate()
    // const query = useFoodDrinkList2()
    const [image, imageHandler, { fileName, file }] = useImage()
    const nilai = {
        like: like,
        ok: ok,
        dislike: dislike,
    }

    const formikConfig = useFormik({
        initialValues: {
            imageUrl: image_Url,
            name: name,
            price: price,
            minOrder: minOrder,
            description: description,
        },
        validationSchema: yupConfig,
        validateOnChange: false,

    })
    React.useEffect(() => {
        if (!image) return formikConfig.resetForm
        formikConfig.setFieldValue('imageUrl', image.binary)
        return formikConfig.resetForm
    }, [image])

    const imageConfig = {
        name: 'imageUrl',
        id: 'imageUrl',
        label: 'Makanan & Minuman',
        value: formikConfig.values.imageUrl,
        type: 'file',
        accept: 'image/*',
        onChange: imageHandler,
    }
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
        type: 'number',
        value: formikConfig.values.price,
        onChange: formikConfig.handleChange,
        helperText: formikConfig.errors.price
    }
    const minOrderConfig = {
        name: 'minOrder',
        label: 'Min.Pemesanan',
        type: 'number',
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

    const [open, setOpen] = React.useState(false)
    const typeMenu = ['Makanan', 'Minuman']

    return (
        <>
            <TableRow>
                <TableCell width={1} sx={{ '& > *': { borderBottom: 'unset' } }}>
                    <IconButton
                        aria-label='expand row'
                        size='small'
                        onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                    </IconButton>
                </TableCell>
                <TableCell width={1} sx={{ textAlign: 'center' }} component='th'>{id}</TableCell>
                <TableCell width={20} sx={{ justifyContent: 'center' }} align='center' component='th'>

                    {isEditMode ? (
                        <ImageFooDrink config={imageConfig} />
                    ) : (

                        <Box
                            component="img"
                            src={image_Url}
                            sx={{
                                height: 80,
                                objectFit: 'cover',
                                borderRadius: 3
                            }}
                        />
                    )}

                </TableCell>
                <FoodDrinkTableCell open={isEditMode} config={nameConfig} />
                <FoodDrinkTableCell open={isEditMode} config={priceConfig} />
                <FoodDrinkTableCell open={isEditMode} config={minOrderConfig} />
                <TableCell align='center' component="th" scope="row" size='small'
                    sx={{ visibility: isEditMode ? 'hidden' : 'visible' }} disabled={isEditMode}>
                    <List component={Stack} direction="row" disablePadding>
                        <ReactListItem icon={<MoodRounded />} content={nilai.like} />
                        <ReactListItem icon={<SentimentNeutralRounded />} content={nilai.ok} />
                        <ReactListItem icon={<MoodBadRounded />} content={nilai.dislike} />
                    </List>
                </TableCell>
                <TableCell width="fit-content" sx={{ textAlign: 'center' }} component="th" scope="row">
                    <Chip icon={type ? <LocalBar /> : <LunchDining />} label={typeMenu[type]} color={type ? 'info' : 'warning'} sx={{
                        width: 'fit-content',
                        fontSize: 10,
                    }} />
                </TableCell>
                <TableCell component="th" scope="row" align="right">
                    {isEditMode ? (
                        <IconButton onClick={() => {
                            const profileForm = new FormData()

                            profileForm.append('id', id)
                            profileForm.append('name', formikConfig.values.name)
                            profileForm.append('price', formikConfig.values.price)
                            profileForm.append('minOrder', formikConfig.values.minOrder)
                            profileForm.append('description', formikConfig.values.description)

                            if (formikConfig.values.imageUrl !== image_Url)
                                profileForm.append('imageUrl', file, fileName)

                            console.info(profileForm)

                            updateHandler(profileForm, {
                                onSuccess: () => (client.refetchQueries({ queryKey: ['foodDrinkList'] }), isEditModeTrigger()),
                            })
                        }}>
                            <CheckCircleIcon />
                        </IconButton>
                    ) : (
                        <IconButton onClick={() => isEditModeTrigger()}>
                            <Edit />
                        </IconButton>
                    )}
                    <IconButton onClick={() => deleteHandler(id)} color='error'>
                        <Delete />
                    </IconButton>
                    {/* <IconButton size='small' sx={{ visibility: isEditMode ? 'hidden' : 'visible' }} disabled={isEditMode}>
                        <Checkbox />
                    </IconButton> */}
                </TableCell>
            </TableRow>
            <TableRow sx={{
                width: '100%'
            }}>
                <FoodDrinkTableCollapsible
                    openEdit={isEditMode}
                    openCollapse={open}
                    config={descriptionConfig}
                />
            </TableRow>
        </>
    )
}
export default FoodDrinkTableItem