import React from 'react'
import { Box, Stack, Button } from '@mui/material'
import { Person, Fastfood } from '@mui/icons-material'
import ImageProfileFieldProps from 'proptypes/molecules/ImageProfileFieldProps'

const ImageFooDrinkForm = ({ isEditMode, config }) => {
    const { value, ...imageConfig } = config

    return (
        <Stack spacing={1} sx={{
            // width: 80,
            position: 'relative',
            borderRadius: 10,
            boxSizing: 'border-box',
            overflow: 20,
        }}>
            {value ? (
                <Box
                    component="img"
                    src={value}
                    sx={{
                        height: 150,
                        width: 150,
                        objectFit: 'cover',
                        borderRadius: 5,
                    }}
                />
            ) : (
                <Box sx={{
                    display: 'flex',
                    width: 150,
                    height: 150,
                    backgroundColor: 'rgba(15, 14, 14, .3)',
                    borderRadius: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Fastfood sx={{
                        width: 70,
                        height: 70,
                        objectFit: 'cover',
                    }} />
                </Box>
            )}

            <Box
                component="input"
                display="none"
                {...imageConfig}
            />
            <label htmlFor="imageUrl" style={{
                position: 'absolute',
                bottom: 0,
                width: '100%',
            }}>
                <Button
                    variant="contained"
                    component="span"
                    fullWidth
                    sx={{
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20,
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
export default ImageFooDrinkForm