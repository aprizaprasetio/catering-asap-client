import React, { useEffect } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { UseFoodDrinkCreate } from 'api/hooks/catalogAdminHook'
import { useFoodDrinkList2 } from 'api/hooks/catalogUserHook'
import UploudImageAdmin from 'components/molecules/UploudImageAdmin'
import TextFieldFoodDrinkAdmin from 'components/molecules/TextFieldFoodDrinkAdmin'
import { Typography, TextField, Button, Dialog, DialogTitle, DialogContent, DialogActions }
    from '@mui/material'
import { FormatStrikethroughSharp } from '@mui/icons-material'

const yupConfig = yup.object({
    // image_Url: yup
    //     .mixed()
    //     .required('Required')
    //     .test(
    //         "fileFormat",
    //         "Unsupported Format",
    //         value => value && value.type.includes('image/')
    //     ),
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
const AdminFoodDrinkFormPopupDesktop = ({ setOpenPopup, openPopup, }) => {
    const { mutate: postHandler } = UseFoodDrinkCreate()
    const query = useFoodDrinkList2()
    const formikConfig = useFormik({
        initialValues: {
            // image: undefined,
            name: '',
            price: '',
            minOrder: '',
            description: '',
        },
        validationSchema: yupConfig,
        validateOnChange: false,
        // onSubmit: () => console.info(formikConfig.values),
        onSubmit: () => postHandler({ ...formikConfig.values },
            { onSuccess: () => (query.refetch(), setOpenPopup()) },
        ),
    })
    // const refetch = () => query?.refetch().then()

    // const imageConfig = {
    //     name: 'image',
    //     type: 'file',
    //     value: formikConfig.values.image,
    //     onBlur: formikConfig.handleBlur,
    //     helperText: formikConfig.touched.image && formikConfig.errors.image,
    // }
    // React.useEffect(() => {
    //     formikConfig.setFieldValue('name', values.name)
    //     formikConfig.setFieldValue('price', values.price)
    //     formikConfig.setFieldValue('minOrder', values.minOrder)
    //     formikConfig.setFieldValue('description', values.description)
    // }, [values])

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
        name: 'minOrder',
        label: 'Min.Order',
        type: 'number',
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

    const paperprops = {
        display: 'flex',
        flexDirection: 'column',
        padding: 3,
        gap: 1,
        borderRadius: 10,
        boxShadow: 3,
        cursor: 'default',
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

            }}>
                {/* <UploudImageAdmin {...imageConfig} /> */}
                <TextFieldFoodDrinkAdmin config={nameConfig} />
                <TextFieldFoodDrinkAdmin config={priceConfig} />
                <TextFieldFoodDrinkAdmin config={minOrderConfig} />

                <TextField id="outlined-basic" label="Deskripsi" variant="outlined" multiline rows={4}
                    FormHelperTextProps={{
                        sx: {
                            color: 'error.main',
                        },
                    }}
                    {...descriptionConfig} />
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
                {/* <Button
                    onClick={() => postHandler(
                        { ...formikConfig.values },
                        { onSuccess: refetch },
                    )}
                    sx={{
                        borderRadius: 20,
                        justifyContent: 'center',
                    }} variant='contained' fullWidth size="medium">
                        Unggah
                    </Button> */}
            </DialogActions>
        </Dialog >
    )
}

export default AdminFoodDrinkFormPopupDesktop