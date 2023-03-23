import { useTrigger } from 'commands/builders/commonBuilder'
import { useImage } from 'commands/builders/imageBuilder'
import { useFormik } from 'formik'
import * as yup from 'yup'
import React from 'react'
import Field from 'components/molecules/Field'
import { Box, Button, Card, CardContent } from '@mui/material'
import AdminBannerImageForm from 'components/molecules/AdminBannerImageForm'
import { useCreateBanner, useFetchBanner } from 'api/hooks/bannerHook'

const yupConfig = yup.object({
    imagePath: yup
        .string(),
    // .test('fileFormat', 'Hanya gambar', value => (
    //     value.includes('data:image/')
    // )),
    subject: yup
        .string()
        .required('Mohon pastikan subjek terisi'),
    link: yup
        .string()
        .required('Mohon pastikan link terisi'),
})

const AdminFormBanner = ({ setOpenPopup }) => {
    const { mutate: create } = useCreateBanner()
    const query = useFetchBanner()
    const [isEditMode, isEditModeTrigger] = useTrigger()
    const [image, imageHandler, { fileName, file }] = useImage()

    const formikConfig = useFormik({
        initialValues: {
            imagePath: '',
            subject: '',
            link: '',
        },
        validationSchema: yupConfig,
        validateOnChange: false,
        onSubmit: () => create(
            { ...formikConfig.values },
            { onSuccess: () => (query.refetch(), setOpenPopup()) }
        )
    })

    React.useEffect(() => {
        if (!image) return formikConfig.resetForm
        formikConfig.setFieldValue('imagePath', image.binary)
        return formikConfig.resetForm
    }, [image])

    const imagePath = {
        name: 'imagePath',
        id: 'imagePath',
        value: formikConfig.values.imagePath,
        onChange: imageHandler,
        type: 'file',
        accept: 'image/*',
    }

    const subject = {
        name: 'subject',
        label: 'Subject',
        value: formikConfig.values.subject,
        onChange: formikConfig.handleChange,
        helperText: formikConfig.touched.subject && formikConfig.errors.subject,
    }

    const link = {
        name: 'link',
        label: 'Link',
        value: formikConfig.values.link,
        onChange: formikConfig.handleChange,
        helperText: formikConfig.touched.link && formikConfig.errors.link
    }

    return (
        <>
            <Card component="form" onSubmit={formikConfig.handleSubmit} sx={{ boxShadow: 0 }}>
                <CardContent>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 5
                    }}>
                        <AdminBannerImageForm config={imagePath} />
                        <Box sx={{
                            display: 'flex',
                            gap: 3
                        }}>
                            <Field isEditMode={isEditMode} config={subject} />
                            <Field isEditMode={isEditMode} config={link} />
                        </Box>
                        <Box sx={{ display: 'flex', gap: 2, flexDirection: 'row-reverse' }}>
                            <Button type="submit" variant="contained">Simpan</Button>
                            <Button onClick={setOpenPopup} variant="outlined">Batal</Button>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </>
    )
}

export default AdminFormBanner