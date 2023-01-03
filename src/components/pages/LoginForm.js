import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import BoxForm from '../organisms/BoxForm'
import Field from '../molecules/Field'
import PasswordField from '../molecules/PasswordField'
import HelperForm from '../molecules/HelperForm'
import CenterLayout from '../templates/CenterLayout'
import store from '../../redux/store'
import { getUser } from '../../redux/slices/userSlice'

// Fungsi tombol submit
const submitAction = (values, action) => {
  store.dispatch(getUser(values)).then(() => {
    const apiError = store.getState().user.error
    if (!apiError) return
    action.setErrors({
      email: apiError,
    })
  })
}

const yupConfig = yup.object({
  email: yup
    .string()
    .email('Mohon periksa email')
    .required('Mohon pastikan email terisi'),
  password: yup
    .string()
    .required('Mohon pastikan password terisi'),
})

const LoginForm = () => {
  const formikConfig = useFormik({
    initialValues: {
      email: '',
      password: '',
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

  const passwordConfig = {
    name: 'password',
    label: 'Kata Sandi',
    value: formikConfig.values.password,
    onChange: formikConfig.handleChange,
    helperText: formikConfig.touched.password && formikConfig.errors.password,
  }

  return (
    <CenterLayout>
      <BoxForm
        title="Masuk Aplikasi Catering"
        subtitle="Selamat datang"
        buttonLabel="Masuk"
        handleSubmit={formikConfig.handleSubmit}
        helper={<HelperForm path="register" label="Daftar gratis" content="Belum mempunyai akun?" />}
      >
        <Field config={emailConfig} />
        <PasswordField config={passwordConfig} />
      </BoxForm>
    </CenterLayout>
  )
}

export default LoginForm