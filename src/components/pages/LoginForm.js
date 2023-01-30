import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import LoadingFull from 'components/atoms/LoadingFull'
import Field from 'components/molecules/Field'
import PasswordField from 'components/molecules/PasswordField'
import HelperForm from 'components/molecules/HelperForm'
import BoxForm from 'components/organisms/BoxForm'
import CenterLayout from 'components/templates/CenterLayout'
import { getToken } from 'commands/api/tokenCommand'
import { useLogin } from 'api/hooks/authHook'

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
  const { mutate, isLoading, isError } = useLogin()

  const formikConfig = useFormik({
    initialValues: {
      email: '',
      password: '',
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
      (isError ? 'Mohon pastikan email atau password benar' : formikConfig.errors.email),
  }

  const passwordConfig = {
    name: 'password',
    label: 'Kata Sandi',
    value: formikConfig.values.password,
    onChange: formikConfig.handleChange,
    helperText: formikConfig.touched.password && formikConfig.errors.password,
  }

  if (getToken()) return <LoadingFull />

  return (
    <CenterLayout>
      {isLoading && <LoadingFull />}
      <BoxForm
        title="Masuk Aplikasi Catering"
        subtitle="Selamat datang"
        buttonLabel="Masuk"
        handleSubmit={formikConfig.handleSubmit}
        helper={<HelperForm path="/register" label="Daftar gratis" content="Belum mempunyai akun?" />}
      >
        <Field config={emailConfig} />
        <PasswordField config={passwordConfig} />
      </BoxForm>
    </CenterLayout>
  )
}

export default LoginForm