import React from 'react'
import { Box, Stack, Button } from '@mui/material'
import { Person } from '@mui/icons-material'
import ImageProfileFieldProps from 'proptypes/molecules/ImageProfileFieldProps'

const ImageProfileField = ({ isEditMode, config }) => {
    const { value, ...avatarConfig } = config

    return (
        <Stack spacing={1} sx={{
            width: 150,
            position: 'relative',
            borderRadius: 6,
            boxSizing: 'border-box',
            overflow: 'auto',
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
                {...avatarConfig}
            />
            <label htmlFor="avatar" style={{
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
                        display: isEditMode ? 'block' : 'none',
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

ImageProfileField.propTypes = ImageProfileFieldProps

export default ImageProfileField