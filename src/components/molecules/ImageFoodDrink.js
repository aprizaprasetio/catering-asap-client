import React from 'react'
import { Box, Stack, Button } from '@mui/material'
import { Person } from '@mui/icons-material'
import ImageProfileFieldProps from 'proptypes/molecules/ImageProfileFieldProps'

const ImageFooDrink = ({ isEditMode, config }) => {
    const { value, ...imageConfig } = config

    return (
        <Stack spacing={1} sx={{
            width: 150,
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
                        objectFit: 'cover',
                    }}
                />
            ) : (
                <Box sx={{
                    backgroundColor: 'rgba(15, 14, 14, .3)',
                }}>
                    <Person sx={{
                        width: 150,
                        height: 150,
                        objectFit: 'cover',
                    }} />
                </Box>
            )}

            <Box
                component="input"
                display="none"
                {...imageConfig}
            />
            <label htmlFor="image" style={{
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

ImageFooDrink.propTypes = ImageProfileFieldProps

export default ImageFooDrink