import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { Box, Typography, IconButton } from '@mui/material'
import { Edit, Close } from '@mui/icons-material'
import { useProfile } from 'api/hooks/manageUserHook'
import ProfileContainer from 'components/organisms/ProfileContainer'
import ProfileField from 'components/molecules/ProfileField'
import { useStale } from 'commands/builders/hookBuilder'
import { useTrigger } from 'commands/builders/commonBuilder'

const yupConfig = yup.object({
    name: yup
        .string(),
    email: yup
        .string()
        .email('Mohon periksa email'),
    phone: yup
        .number('Mohon periksa telepon'),
})

const PrivateProfileTab = () => {
    const { mutate } = useProfile()
    const [user] = useStale('user')
    const [isEditMode, isEditModeTrigger] = useTrigger()

    const formikConfig = useFormik({
        initialValues: {
            name: user.name,
            email: user.email,
            phone: user.phone,
        },
        validationSchema: yupConfig,
        validateOnChange: false,
        onSubmit: () => {
            const { id, gender, picture_Url, ...currentUser } = user
            const isInputEqual = JSON.stringify(currentUser) === JSON.stringify(formikConfig.values)
            isEditModeTrigger()
            // Restrict from same value between new data
            if (isInputEqual) return
            mutate({
                id: id,
                ...formikConfig.values,
            })
        },
    })

    const nameConfig = {
        name: 'name',
        label: 'Nama Lengkap',
        value: formikConfig.values.name,
        onChange: formikConfig.handleChange,
        helperText: formikConfig.touched.name && formikConfig.errors.name,
    }

    const emailConfig = {
        name: 'email',
        label: 'Email',
        value: formikConfig.values.email,
        onChange: formikConfig.handleChange,
        helperText: formikConfig.touched.email && formikConfig.errors.email,
    }

    const phoneConfig = {
        name: 'phone',
        label: 'Telepon',
        value: formikConfig.values.phone,
        onChange: formikConfig.handleChange,
        helperText: formikConfig.touched.phone && formikConfig.errors.phone,
    }

    return (
        <ProfileContainer isEditMode={isEditMode} onSubmit={formikConfig.handleSubmit}>
            <ProfileField isEditMode={isEditMode} config={nameConfig} />
            <ProfileField isEditMode={isEditMode} config={emailConfig} />
            <ProfileField isEditMode={isEditMode} config={phoneConfig} />
            <Box>
                <Typography variant="h3" sx={{ fontSize: 14, fontWeight: 'medium' }}>
                    Jenis Kelamin
                </Typography>
                <Typography variant="body1" sx={{ fontSize: 16 }}>
                    {user.gender ? 'Wanita' : 'Pria'}
                </Typography>
            </Box>
            {
                <IconButton onClick={isEditModeTrigger} sx={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    padding: 3,
                }}>
                    {isEditMode ? <Close /> : <Edit />}
                </IconButton>
            }
        </ProfileContainer>
    )
}

export default PrivateProfileTab