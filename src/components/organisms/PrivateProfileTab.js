import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { Box, Typography, IconButton, Stack, Button } from '@mui/material'
import { Edit, Close, Person } from '@mui/icons-material'
import ProfileField from 'components/molecules/ProfileField'
import ImageProfileField from 'components/molecules/ImageProfileField'
import ProfileContainer from 'components/organisms/ProfileContainer'
import { useStale } from 'commands/builders/hookBuilder'
import { useTrigger } from 'commands/builders/commonBuilder'
import { useImage } from 'commands/builders/imageBuilder'
import { useProfile } from 'api/hooks/manageUserHook'

const yupConfig = yup.object({
    avatar: yup
        .string()
        .test('fileFormat', 'Hanya gambar', value => (
            value.includes('data:image/')
        )),
    name: yup
        .string()
        .required('Mohon pastikan nama terisi'),
    email: yup
        .string()
        .email('Mohon periksa email')
        .required('Mohon pastikan email terisi'),
    phone: yup
        .string()
        .test('phoneNumberFormat', 'Isikan nomor telepon dengan benar', value => {
            if (value === undefined) return true

            return !isNaN(value)
        }),
})

const PrivateProfileTab = () => {
    const { mutate } = useProfile()
    const [user] = useStale('user')
    const [isEditMode, isEditModeTrigger] = useTrigger()
    const [image, imageHandler, { fileError, fileName, file }] = useImage()

    const formikConfig = useFormik({
        initialValues: {
            avatar: user.avatar,
            name: user.name,
            email: user.email,
            phone: user.phone,
        },
        validationSchema: yupConfig,
        validateOnChange: false,
        onSubmit: () => {
            const oldUser = {
                avatar: user.avatar,
                name: user.name,
                email: user.email,
                phone: user.phone,
            }
            const isInputEqual = JSON.stringify(oldUser) === JSON.stringify(formikConfig.values)
            isEditModeTrigger()
            // Restrict from same value between new data
            if (isInputEqual) return

            const profileForm = new FormData()

            // Conditional field input
            if (formikConfig.values.avatar !== user.avatar)
                profileForm.append('Avatar', file, fileName)
            if (formikConfig.values.phone)
                profileForm.append('Phone', formikConfig.values.phone)

            profileForm.append('Name', formikConfig.values.name)
            profileForm.append('Email', formikConfig.values.email)

            mutate(profileForm)
        },
    })

    React.useEffect(() => {
        if (!image) return formikConfig.resetForm
        formikConfig.setFieldValue('avatar', image.binary)
        return formikConfig.resetForm
    }, [image])

    const avatarConfig = {
        name: 'avatar',
        id: 'avatar',
        value: formikConfig.values.avatar,
        onChange: imageHandler,
        helperText: fileError,
        type: 'file',
        accept: 'image/*',
    }

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
        onChange: Event => {
            if (isNaN(Event.target.value)) return
            formikConfig.handleChange(Event)
            console.info(Event.target.value)
        },
        helperText: formikConfig.touched.phone && formikConfig.errors.phone,
    }

    return (
        <ProfileContainer isEditMode={isEditMode} onSubmit={formikConfig.handleSubmit}>
            <ImageProfileField isEditMode={isEditMode} config={avatarConfig} />
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
                <IconButton onClick={() => (isEditModeTrigger(), formikConfig.resetForm())} sx={{
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