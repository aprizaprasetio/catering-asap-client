import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import LoadingFull from 'components/atoms/LoadingFull'
import Field from 'components/molecules/Field'
import PasswordField from 'components/molecules/PasswordField'
import LabeledRadio from 'components/molecules/LabeledRadio'
import RadioField from 'components/molecules/RadioField'
import HelperForm from 'components/molecules/HelperForm'
import BoxForm from 'components/organisms/BoxForm'
import CenterLayout from 'components/templates/CenterLayout'
import { useRegister } from 'api/hooks/authHook'

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

const RegisterForm = () => {
    const { mutate, isLoading } = useRegister()

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
        onSubmit: () => mutate(formikConfig.values),
    })

    const emailConfig = {
        name: 'email',
        label: 'Email',
        value: formikConfig.values.email,
        onChange: formikConfig.handleChange,
        helperText: formikConfig.touched.email &&
            (formikConfig.errors.email ?? formikConfig.errors.gender),
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
        value: '' || formikConfig.values.gender,
        onChange: formikConfig.handleChange,
    }

    return (
        <CenterLayout>
            {isLoading && <LoadingFull />}
            <BoxForm
                title="Daftar Akun Catering"
                subtitle="Daftarkan akun baru untuk memulai pesanan"
                buttonLabel="Daftar"
                handleSubmit={formikConfig.handleSubmit}
                helper={<HelperForm path="/login" label="Masuk" content="Sudah mempunyai akun?" />}
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

export default RegisterForm