import React from 'react'
import { Button, Paper, Icon, TextField, IconButton, InputAdornment, Table, TableBody, TableRow, TableCell, InputBase } from '@mui/material'
import { AddPhotoAlternate } from '@mui/icons-material'

const FoodDrinkFormRow = () => {
    return (
        <TableRow>
            <TableCell sx={{
                display: 'flex',
                gap: 2,
                alignItems: 'center',
            }}>
                <TextField placeholder="Nama" />
                <TextField
                    placeholder="Deskripsi"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <IconButton>
                                    <AddPhotoAlternate />
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                    fullWidth
                />

            </TableCell>
            <TableCell colSpan={2}>
                <TextField placeholder="Rp. xxx.xxx,xx" />
            </TableCell>
            <TableCell>
                <TextField inputProps={{
                    sx: { textAlign: 'center' },
                }} placeholder="xx" />
            </TableCell>
        </TableRow>
    )
}

export default FoodDrinkFormRow