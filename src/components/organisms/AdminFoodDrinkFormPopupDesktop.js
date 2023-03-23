import React, { useEffect } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useFoodDrinkCreate } from 'api/hooks/catalogAdminHook'
import { useFoodDrinkList2 } from 'api/hooks/catalogUserHook'
import UploudImageAdmin from 'components/molecules/UploudImageAdmin'
import TextFieldFoodDrinkAdmin from 'components/molecules/TextFieldFoodDrinkAdmin'
import { Typography, TextField, Button, Dialog, DialogTitle, DialogContent, DialogActions, FormControl, Radio, FormControlLabel, RadioGroup }
    from '@mui/material'
import { FormatStrikethroughSharp } from '@mui/icons-material'
import RadioField from 'components/molecules/RadioField'
import LabeledRadio from 'components/molecules/LabeledRadio'
import ImageFooDrink from 'components/molecules/ImageFoodDrink'
import { useImage } from 'commands/builders/imageBuilder'

const yupConfig = yup.object({
    name: yup
        .string('Masukan alphabet')
        .required('Harus Diisi'),
    price: yup
        .number('Masukan Angka')
        .required('Harus Diisi')
        .positive('Masukan Angka Postive')
        .integer(),
    min_Order: yup
        .number()
        .required('Harus Diisi')
        .positive('Masukan Angka Postive')
        .max(99, 'Maximal Min order 99')
        .integer(),
    description: yup
        .string()
        .required('Harus Diisi'),
    type: yup
        .string()
        .required('Mohon pastikan jenis menu harus diisi'),
    image: yup
        .string()
        .test('fileFormat', 'Hanya gambar', value => (
            value.includes('data:image/')
        )),

})
const AdminFoodDrinkFormPopupDesktop = ({ setOpenPopup, openPopup, }) => {
    const { mutate } = useFoodDrinkCreate()
    const query = useFoodDrinkList2()
    const [image, imageHandler, { fileName, file }] = useImage()
    const formikConfig = useFormik({
        initialValues: {
            image: '',
            name: '',
            price: '',
            min_Order: '',
            description: '',
            type: '',
        },
        validationSchema: yupConfig,
        validateOnChange: false,
        onSubmit: () => {
            // postHandler({ ...formikConfig.values },
            //     { onSuccess: () => (query.refetch(), setOpenPopup()) },
            // )
            // console.info(formikConfig.values)

            const profileForm = new FormData()

            profileForm.append('name', formikConfig.values.name)
            profileForm.append('price', formikConfig.values.price)
            profileForm.append('min_Order', formikConfig.values.min_Order)
            profileForm.append('description', formikConfig.values.description)
            profileForm.append('type', formikConfig.values.type)
            profileForm.append('imageUrl', file, fileName)


            mutate(profileForm, {
                onSuccess: () => (query.refetch(), setOpenPopup()),
            })
        },
    })
    // 
    // const imageConfig = {
    //     name: 'image',
    //     type: 'file',
    //     value: formikConfig.values.image,
    //     onBlur: formikConfig.handleBlur,
    //     helperText: formikConfig.touched.image && formikConfig.errors.image,
    // }
    React.useEffect(() => {
        if (!image) return formikConfig.resetForm
        formikConfig.setFieldValue('image', image.binary)
        return formikConfig.resetForm
    }, [image])

    const imageConfig = {
        name: 'image',
        id: 'image',
        value: formikConfig.values.image,
        onChange: imageHandler,
        type: 'file',
        accept: 'image/*',
    }

    const nameConfig = {
        name: 'name',
        label: 'Nama Makanan/Minuman',
        value: formikConfig.values.name,
        onChange: formikConfig.handleChange,
        helperText: formikConfig.touched.name && formikConfig.errors.name,
    }

    const priceConfig = {
        name: 'price',
        label: 'Price',
        type: 'number',
        value: formikConfig.values.price,
        onChange: formikConfig.handleChange,
        helperText: formikConfig.touched.price && formikConfig.errors.price
    }

    const minOrderConfig = {
        name: 'min_Order',
        label: 'Min.Order',
        type: 'number',
        value: formikConfig.values.min_Order,
        onChange: formikConfig.handleChange,
        helperText: formikConfig.touched.min_Order && formikConfig.errors.min_Order,
    }

    const descriptionConfig = {
        name: 'description',
        label: 'Description',
        value: formikConfig.values.description,
        onChange: formikConfig.handleChange,
        helperText: formikConfig.touched.description && formikConfig.errors.description,
    }

    const paperprops = {
        display: 'flex',
        flexDirection: 'column',
        padding: 3,
        gap: 1,
        borderRadius: 10,
        boxShadow: 3,
        cursor: 'default',
    }

    const typeConfig = {
        name: 'type',
        label: 'Jenis Menu',
        value: '' || formikConfig.values.type,
        onChange: formikConfig.handleChange,
    }



    return (
        <Dialog
            component="form"
            onSubmit={formikConfig.handleSubmit}
            open={openPopup} onClose={setOpenPopup}
            PaperProps={{
                sx: paperprops
            }}>

            <DialogTitle fontWeight='bold' fontSize={20} >Tambah Menu</DialogTitle>

            <DialogContent sx={{
                display: 'grid',
                gap: 1,
                justifyItems: 'center',


            }}>
                <ImageFooDrink config={imageConfig} />
                <TextFieldFoodDrinkAdmin config={nameConfig} />
                <TextFieldFoodDrinkAdmin config={priceConfig} />
                <TextFieldFoodDrinkAdmin config={minOrderConfig} />

                <TextField id="outlined-basic" label="Deskripsi" variant="outlined" fullWidth multiline rows={4}
                    FormHelperTextProps={{
                        sx: {
                            color: 'error.main',
                        },
                    }}
                    {...descriptionConfig} />
                <RadioField config={typeConfig} >
                    <LabeledRadio value="food" label="Makanan" />
                    <LabeledRadio value="drink" label="Minuman" />
                </RadioField>
            </DialogContent>
            <DialogActions  >
                <Button
                    type="submit"
                    sx={{
                        borderRadius: 20,
                        justifyContent: 'center',
                    }} variant='contained' fullWidth size="medium">
                    Simpan
                </Button>
            </DialogActions>
        </Dialog >
    )
}

export default AdminFoodDrinkFormPopupDesktop