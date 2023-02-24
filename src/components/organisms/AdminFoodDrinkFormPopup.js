import { Card, Typography, TextField, List, Button, Box } from '@mui/material'
import React from 'react'
import { Formik, useFormik } from 'formik'
import * as yup from 'yup'
import { number } from 'prop-types'


const yupConfig = yup.object({
    name: yup
        .string()
        .required('Harus Diisi'),
    price: yup
        .number()
        .required('Harus Diisi'),
    minOrder: yup
        .number()
        .required('Harus Diisi'),
    description: yup
        .string()
        .required('Harus Diisi')
})
const AdminFoodDrinkFormPopup = (name, price, minOrder, description, image_Url) => {

    const formikConfig = useFormik({
        initialValues: {
            image_Url: '',
            name: '',
            price: '',
            minOrder: '',
            description: '',
        },
        validationSchema: yupConfig,
        validateOnChange: false,
        onSubmit: () => { }
    })
    const image_UrlConfig = {
        name: 'image_Url',
        label: 'foto Profile',
        value: formikConfig.values.image_Url,
        onChange: formikConfig.handleChange,
        isError: formikConfig.errors.image_Url,
    }

    const nameConfig = {
        name: name,
        label: 'Makanan & Minuman',
        value: formikConfig.values.name,
        onChange: formikConfig.handleChange,
        isError: formikConfig.errors.email
    }
    const priceConfig = {
        name: price,
        label: 'Harga',
        value: formikConfig.values.price,
        onChange: formikConfig.handleChange,
        isError: formikConfig.errors.price
    }
    const minOrderConfig = {
        name: minOrder,
        label: 'Min. Pemesanan',
        value: formikConfig.values.minOrder,
        onChange: formikConfig.handleChange,
        isError: formikConfig.errors.minOrder,
    }
    const descriptionConfig = {
        name: description,
        label: 'Deskripsi',
        value: formikConfig.values.description,
        onChange: formikConfig.handleChange,
        isError: formikConfig.errors.description,
    }

    return (
        <Box sx={{
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Box sx={{
                display: 'grid',
                gap: 1,


            }}>
                <Typography fontWeight='bold' fontSize={20} >Tambah Menu</Typography>
                <TextField id="outlined-basic" margin='dense' label="Nama Makan/Minuman" variant="outlined"
                    config={nameConfig}
                />

                <TextField id="outlined-basic" type='number' label="Harga"
                    InputProps={{ inputProps: { min: 1 } }} variant="outlined"
                    config={priceConfig} />

                <TextField id="outlined-basic" type='number' label="Min.Order"
                    InputProps={{ inputProps: { min: 1 } }} variant="outlined"
                    config={minOrderConfig} />

                <TextField id="outlined-basic" label="Deskripsi" variant="outlined" multiline rows={4}
                    config={descriptionConfig} />
            </Box>
            <Button sx={{
                borderRadius: 20,
                justifyContent: 'center',
                marginY: 2,
            }} variant='contained' fullWidth size="medium">Medium</Button>

        </Box>
    )
}

export default AdminFoodDrinkFormPopup