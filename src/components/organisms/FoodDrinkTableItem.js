import React from 'react'
import { TableRow, TableCell, List, Stack, IconButton, Checkbox, Avatar, Box, CardMedia }
    from '@mui/material'
import { MoodRounded, SentimentNeutralRounded, MoodBadRounded, KeyboardArrowDown, KeyboardArrowUp, Edit, Delete, }
    from '@mui/icons-material'
import { useFormik } from 'formik'
import * as yup from 'yup'
import FoodDrinkTableCollapsible from './FoodDrinkTableCollapsible'
import { useTrigger } from 'commands/builders/commonBuilder'
import ReactListItem from 'components/molecules/ReactListItem'
import FoodDrinkTableCell from 'components/molecules/FoodDrinkTableCell'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { useFoodDrinkDelete, useFoodDrinkUpdate } from 'api/hooks/catalogAdminHook'
import { useImage } from 'commands/builders/imageBuilder'
import { useFoodDrinkList2 } from 'api/hooks/catalogUserHook'

const FoodDrinkTableItem = ({ id, name, price, minOrder, description, image_Url, like, ok, dislike }) => {
    const [isEditMode, isEditModeTrigger] = useTrigger()
    const { mutate: deleteHandler } = useFoodDrinkDelete()
    const { mutate: updateHandler } = useFoodDrinkUpdate()
    const query = useFoodDrinkList2()
    const [image, imageHandler, { fileName, file }] = useImage()
    const nilai = {
        like: like,
        ok: ok,
        dislike: dislike,
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
            .required()
            .positive('Masukan Angka Postive'),
        min_Order: yup
            .number()
            .required()
            .positive('Masukan Angka Postive')
            .max(99, 'Maximal Min order 99')
            .integer(),
        description: yup
            .string()
            .required(),
    })
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
        //eror
        onSubmit: () => {
            // postHandler({ ...formikConfig.values },
            //     { onSuccess: () => (query.refetch(), setOpenPopup()) },
            // )
            // console.info(formikConfig.values)

            const profileForm = new FormData()

            profileForm.append('name', formikConfig.values.name)
            profileForm.append('price', formikConfig.values.price)
            profileForm.append('min_Order', formikConfig.values.minOrder)
            profileForm.append('description', formikConfig.values.description)
            profileForm.append('type', formikConfig.values.type)
            profileForm.append('imageUrl', file, fileName)


            updateHandler(profileForm, {
                onSuccess: () => (query.refetch()),
            })
        },
        //error

    })
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
        name: 'min_Order',
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

    return (
        <>
            <TableRow >
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
                    {image_Url ? (
                        <CardMedia

                            variant='square'
                            component={"img"}
                            image={image_Url}
                        />
                    ) :
                        <Avatar
                            alt="Remy Sharp"
                            variant='square'
                            src="/static/images/avatar/1.jpg" />
                    }
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
                <TableCell component="th" scope="row" align="right">
                    {isEditMode ? (
                        <IconButton onClick={() => {
                            updateHandler(
                                { id, ...formikConfig.values },
                                { onSuccess: isEditModeTrigger },
                            )
                        }}>
                            <CheckCircleIcon />
                        </IconButton>
                    ) : (
                        <IconButton onClick={isEditModeTrigger}>
                            <Edit />
                        </IconButton>
                    )}
                    <IconButton onClick={() => deleteHandler(id)} color='error'>
                        <Delete />
                    </IconButton>
                    <IconButton size='small' sx={{ visibility: isEditMode ? 'hidden' : 'visible' }} disabled={isEditMode}>
                        <Checkbox />
                    </IconButton>
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