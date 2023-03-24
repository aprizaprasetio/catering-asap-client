import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { Dialog, DialogTitle, TextField, DialogContent, DialogActions, Button, Select, MenuItem, Autocomplete }
    from '@mui/material'
import BankItemEditProps from 'proptypes/organisms/BankItemEditProps'
import { useBankAdd, useBankEdit } from 'api/hooks/bankHook'

const yupConfig = yup.object({
    bankName: yup
        .string()
        .required('Mohon isi nama bank'),
    bankNumber: yup
        .number()
        .required('Mohon isi nomor rekening'),
    name: yup
        .string()
        .required('Mohon isi nama pemilik rekening')
})

const mostUsedBanks = [
    'BRI', 'BNI', 'BCA', 'MANDIRI', 'DKI', 'BSI', 'MUAMALAT'
]

const BankItemEdit = ({ open, openTrigger, values, type }) => {
    const { mutate: addMutate } = useBankAdd()
    const { mutate: editMutate } = useBankEdit()

    const formikConfig = useFormik({
        initialValues: {
            bankName: values.bankName,
            bankNumber: values.bankNumber,
            name: values.name,
        },
        validationSchema: yupConfig,
        validateOnChange: false,
        onSubmit: () => {
            openTrigger()
            if (type === 'add')
                return addMutate(formikConfig.values)
            editMutate({
                id: values.id,
                ...formikConfig.values,
            })
        },
    })

    React.useEffect(() => {
        formikConfig.setFieldValue('bankName', values.bankName)
        formikConfig.setFieldValue('bankNumber', values.bankNumber)
        formikConfig.setFieldValue('name', values.name)
    }, [values])

    const bankNameConfig = {
        name: 'bankName',
        label: 'Nama Bank',
        inputValue: formikConfig.values.bankName.toUpperCase(),
        onInputChange: (Event, newValue) => formikConfig.setFieldValue('bankName', newValue.toUpperCase()),
        onChange: (Event, newValue) => formikConfig.setFieldValue('bankName', newValue.toUpperCase()),
    }
    const bankNumberConfig = {
        name: 'bankNumber',
        label: 'No. Rekening',
        value: formikConfig.values.bankNumber,
        onChange: Event => {
            if (isNaN(Event.target.value)) return
            formikConfig.handleChange(Event)
        },
        helperText: formikConfig.touched.bankNumber && formikConfig.errors.bankNumber,
    }
    const nameConfig = {
        name: 'name',
        label: 'Atas Nama',
        value: formikConfig.values.name.toUpperCase(),
        onChange: formikConfig.handleChange,
        helperText: formikConfig.touched.name && formikConfig.errors.name,
    }

    return (
        <Dialog
            component="form"
            onSubmit={formikConfig.handleSubmit}
            open={open}
            onClose={openTrigger}
            PaperProps={{
                sx: {
                    borderRadius: 6,
                }
            }}
        >
            <DialogTitle>
                {(type === 'edit') ? 'Ubah Bank' : 'Tambah Bank'}
            </DialogTitle>
            <DialogContent
                sx={{
                    padding: '30px !important',
                    paddingTop: '10px !important',
                    display: 'grid',
                    gap: 2,
                }}
            >
                <Autocomplete
                    options={mostUsedBanks}
                    freeSolo
                    disableClearable
                    {...bankNameConfig}
                    renderInput={params => (
                        <TextField
                            label={bankNameConfig.label}
                            helperText={formikConfig.touched.bankName && formikConfig.errors.bankName}
                            {...params}
                        />
                    )}
                />
                <TextField
                    {...bankNumberConfig}
                    fullWidth
                />
                <TextField
                    {...nameConfig}
                    fullWidth
                />
            </DialogContent>
            <DialogActions>
                <Button
                    variant="contained"
                    type="submit"
                    fullWidth
                    sx={{
                        borderRadius: 4,
                    }}
                >
                    {(type === 'edit') ? 'Ubah' : 'Simpan'}
                </Button>
            </DialogActions>
        </Dialog >
    )
}

BankItemEdit.propTypes = BankItemEditProps

export default BankItemEdit