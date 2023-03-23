import { Box, Button, CardMedia, Stack } from '@mui/material'
import React from 'react'

const AdminBannerImageForm = ({ config }) => {
    const { value, ...imagePath } = config

    return (
        <Stack spacing={1} sx={{
            position: 'relative',
            borderRadius: 6,
            boxSizing: 'border-box',
            overflow: 'auto',
        }}>
            {value ? (
                <CardMedia
                    component={'img'}
                    sx={{
                        height: 100,
                    }}
                    image={value}
                    alt='Zonk' />
            ) : (
                <CardMedia
                    component={'img'}
                    sx={{
                        backgroundColor: 'rgba(15, 14, 14, .3)',
                        height: 100,
                    }} />
            )}
            <Box
                component="input"
                display="none"
                {...imagePath}
            />
            <label htmlFor="imagePath" style={{
                position: 'absolute',
                bottom: 0,
                width: '100%',
            }}>
                <Button
                    variant="contained"
                    component="span"
                    fullWidth
                    sx={{
                        borderRadius: 0,
                        backgroundColor: 'rgba(15, 14, 14, .5)',
                        textAlign: 'center',
                        '&:hover': {
                            backgroundColor: 'rgba(15, 14, 14, 1)',
                        },
                    }}>
                    Unggah Foto
                </Button>
            </label>
        </Stack>
    )
}

export default AdminBannerImageForm