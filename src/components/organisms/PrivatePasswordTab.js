import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { Card, CardContent, CardActions, Button, Snackbar, Alert } from '@mui/material'
import { useChangePassword } from 'api/hooks/manageUserHook'
import PasswordField from 'components/molecules/PasswordField'

const yupConfig = yup.object({
    oldPassword: yup
        .string()
        .required('Mohon isi kata sandi lama'),
    newPassword: yup
        .string()
        .required('Mohon isi kata sandi baru')
        .min(8, 'Mohon buat kata sandi di atas 8 kata'),
    newConfirmation: yup
        .string()
        .oneOf([yup.ref('newPassword'), null], 'Mohon periksa kesamaan kata sandi')
        .required('Mohon pastikan pengulangan kata sandi terisi')
})

const PrivatePasswordTab = () => {
    const { mutate, isSuccess } = useChangePassword();

    const formikConfig = useFormik({
        initialValues: {
            oldPassword: '',
            newPassword: '',
            newConfirmation: '',
        },
        validationSchema: yupConfig,
        validateOnChange: false,
        onSubmit: () => mutate(formikConfig.values),
    })

    const oldPasswordConfig = {
        name: 'oldPassword',
        label: 'Kata Sandi Lama',
        value: formikConfig.values.oldPassword,
        onChange: formikConfig.handleChange,
        helperText: formikConfig.touched.oldPassword && formikConfig.errors.oldPassword,
    }

    const newPasswordConfig = {
        name: 'newPassword',
        label: 'Kata Sandi Baru',
        value: formikConfig.values.newPassword,
        onChange: formikConfig.handleChange,
        helperText: formikConfig.touched.newPassword && formikConfig.errors.newPassword,
    }

    const newConfirmationConfig = {
        name: 'newConfirmation',
        label: 'Ulangi Kata Sandi Baru',
        value: formikConfig.values.newConfirmation,
        onChange: formikConfig.handleChange,
        helperText: formikConfig.touched.newConfirmation && formikConfig.errors.newConfirmation,
    }

    return (
        <>
            <Card
                onSubmit={formikConfig.handleSubmit}
                component={'form'}
                sx={{
                    paddingY: 3,
                    position: 'relative',
                    borderRadius: 3,
                    boxShadow: 6,
                }}>
                <CardContent sx={{
                    display: 'grid',
                    gap: 3,
                }}>
                    <PasswordField config={oldPasswordConfig} />
                    <PasswordField config={newPasswordConfig} />
                    <PasswordField config={newConfirmationConfig} />
                </CardContent>
                <CardActions>
                    <Button type="submit" variant="contained">Ubah</Button>
                </CardActions>
            </Card >
            <Snackbar open={isSuccess} autoHideDuration={3000}>
                <Alert severity="success">Kata sandi berhasil diganti!</Alert>
            </Snackbar>
        </>
    )
}

export default PrivatePasswordTab