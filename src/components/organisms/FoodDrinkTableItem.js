import React from 'react'
import { TableRow, TableCell, List, Stack, IconButton, Checkbox, Avatar }
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
import { UseFoodDrinkDelete, UseFoodDrinkUpdate } from 'api/hooks/catalogAdminHook'

const FoodDrinkTableItem = ({ id, name, price, minOrder, description, image_Url }) => {
    const [isEditMode, isEditModeTrigger] = useTrigger()
    const { mutate: deleteHandler } = UseFoodDrinkDelete()
    const { mutate: updateHandler } = UseFoodDrinkUpdate()
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
            imageUrl: image_Url,
            name: name,
            price: price,
            minOrder: minOrder,
            description: description,
        },
        validationSchema: yupConfig,
        validateOnChange: false,
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
        value: formikConfig.values.price,
        onChange: formikConfig.handleChange,
        helperText: formikConfig.errors.price
    }
    const minOrderConfig = {
        name: 'minOrder',
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
                <TableCell width={20} sx={{ justifyContent: 'center' }} align='center' component='th'><Avatar
                    alt="Remy Sharp" variant='square' src="/static/images/avatar/1.jpg" />
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