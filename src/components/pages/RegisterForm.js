import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import BoxForm from '../organisms/BoxForm'
import Field from '../molecules/Field'
import PasswordField from '../molecules/PasswordField'
import LabeledRadio from '../molecules/LabeledRadio'
import RadioField from '../molecules/RadioField'
import HelperForm from '../molecules/HelperForm'
import CenterLayout from '../templates/CenterLayout'

// Fungsi tombol submit
const submitAction = values => {
    console.info(values)
}

const yupConfig = yup.object({
    email: yup
        .string()
        .email('Mohon periksa email')
        .required('Mohon spastikan email terisi'),
    name: yup
        .string()
        .required('Mohon pastikan email terisi'),
    password: yup
        .string()
        .required('Mohon pastikan kata sandi terisi')
        .min(8, 'Mohon buat kata sandi di atas 8 kata'),
    confirmation: yup
        .string()
        .oneOf([yup.ref('password'), null], 'Mohon periksa kesamaan kata sandi')
        .required('Mohon pastikan pengulangan kata sandi terisi'),
    gender: yup
        .string()
        .required('Mohon pastikan jenis kelamin terisi'),
})

const LoginForm = () => {
    const formikConfig = useFormik({
        initialValues: {
            email: '',
            name: '',
            password: '',
            confirmation: '',
            gender: '',
        },
        validationSchema: yupConfig,
        validateOnChange: false,
        onSubmit: submitAction,
    })

    const emailConfig = {
        name: 'email',
        label: 'Email',
        value: formikConfig.values.email,
        onChange: formikConfig.handleChange,
        helperText: formikConfig.touched.email && formikConfig.errors.email,
    }

    const nameConfig = {
        name: 'name',
        label: 'Nama Lengkap',
        value: formikConfig.values.name,
        onChange: formikConfig.handleChange,
        helperText: formikConfig.touched.name && formikConfig.errors.name,
    }

    const passwordConfig = {
        name: 'password',
        label: 'Kata Sandi',
        value: formikConfig.values.password,
        onChange: formikConfig.handleChange,
        helperText: formikConfig.touched.password && formikConfig.errors.password,
    }

    const confirmationConfig = {
        name: 'confirmation',
        label: 'Ulangi Kata Sandi',
        value: formikConfig.values.confirmation,
        onChange: formikConfig.handleChange,
        helperText: formikConfig.touched.confirmation && formikConfig.errors.confirmation,
    }

    const genderConfig = {
        name: 'gender',
        label: 'Jenis Kelamin',
        value: formikConfig.values.gender,
        onChange: formikConfig.handleChange,
    }

    return (
        <CenterLayout>
            <BoxForm
                title="Daftar Akun Catering"
                subtitle="Daftarkan akun baru untuk memulai pesanan"
                buttonLabel="Daftar"
                handleSubmit={formikConfig.handleSubmit}
                helper={<HelperForm path="/" label="Masuk" content="Sudah mempunyai akun?" />}
            >
                <Field config={emailConfig} />
                <Field config={nameConfig} />
                <PasswordField config={passwordConfig} />
                <PasswordField config={confirmationConfig} />
                <RadioField config={genderConfig}>
                    <LabeledRadio label="Laki-laki" value="male" />
                    <LabeledRadio label="Perempuan" value="female" />
                </RadioField>
            </BoxForm>
        </CenterLayout>
    )
}

export default LoginForm