import { Typography, TextField, Button, Box } from '@mui/material'
import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { UseFoodDrinkCreate } from 'api/hooks/catalogAdminHook'

const yupConfig = yup.object({
    name: yup
        .string('Masukan alphabet')
        .required('Harus Diisi'),
    price: yup
        .number('Masukan Angka')
        .required('Harus Diisi')
        .positive('Masukan Angka Postive')
        .integer(),
    minOrder: yup
        .number()
        .required('Harus Diisi')
        .positive('Masukan Angka Postive')
        .max(99, 'Maximal Min order 99')
        .integer(),
    description: yup
        .string()
        .required('Harus Diisi')
})
const AdminFoodDrinkFormPopup = () => {
    const { mutate } = UseFoodDrinkCreate()
    const formikConfig = useFormik({
        initialValues: {
            name: '',
            price: '',
            minOrder: '',
            description: '',
        },
        validationSchema: yupConfig,
        validateOnChange: false,
        onSubmit: () => mutate(formikConfig.values),
    })

    const nameConfig = {
        name: 'name',
        label: 'Name',
        value: formikConfig.values.name,
        onChange: formikConfig.handleChange,
        helperText: formikConfig.touched.name && formikConfig.errors.name,
    }

    const priceConfig = {
        name: 'price',
        label: 'Price',
        value: formikConfig.values.price,
        onChange: formikConfig.handleChange,
        helperText: formikConfig.touched.price && formikConfig.errors.price
    }

    const minOrderConfig = {
        name: 'minOrder',
        label: 'MinOrder',
        value: formikConfig.values.minOrder,
        onChange: formikConfig.handleChange,
        helperText: formikConfig.touched.minOrder && formikConfig.errors.minOrder,
    }

    const descriptionConfig = {
        name: 'description',
        label: 'Description',
        value: formikConfig.values.description,
        onChange: formikConfig.handleChange,
        helperText: formikConfig.touched.description && formikConfig.errors.description,
    }

    return (
        <Box component="form" onSubmit={formikConfig.handleSubmit} sx={{
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Box sx={{
                display: 'grid',
                gap: 1,

            }}>
                <Typography fontWeight='bold' fontSize={20} >Tambah Menu</Typography>
                <TextField id="outlined-basic" margin='dense' label="Nama Makan/Minuman" variant="outlined"
                    FormHelperTextProps={{
                        sx: {
                            color: 'error.main',
                        },
                    }}
                    {...nameConfig}
                />

                <TextField id="outlined-basic" type='number' label="Harga"
                    FormHelperTextProps={{
                        sx: {
                            color: 'error.main',
                        },
                    }}
                    InputProps={{ inputProps: { min: 1 } }} variant="outlined"
                    {...priceConfig}
                />

                <TextField id="outlined-basic" type='number' label="Min.Order"
                    FormHelperTextProps={{
                        sx: {
                            color: 'error.main',
                        },
                    }}
                    InputProps={{ inputProps: { min: 1 }, maxLength: 2 }} variant="outlined"
                    {...minOrderConfig}
                />

                <TextField id="outlined-basic" label="Deskripsi" variant="outlined" multiline rows={4}
                    FormHelperTextProps={{
                        sx: {
                            color: 'error.main',
                        },
                    }}
                    {...descriptionConfig} />
            </Box>
            <Button sx={{
                borderRadius: 20,
                justifyContent: 'center',
                marginY: 2,
            }} variant='contained' type="submit" fullWidth size="medium">Unggah</Button>
        </Box>
    )
}

export default AdminFoodDrinkFormPopup