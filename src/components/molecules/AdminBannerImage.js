import { Box, Button, CardMedia, Stack } from '@mui/material'
import React from 'react'

const AdminBannerImage = ({ imagePath, subject }) => {
    return (
        <>
            <Stack spacing={1} sx={{
                position: 'relative',
                borderRadius: 6,
                boxSizing: 'border-box',
                overflow: 'auto',
            }}>
                <Box sx={{
                    backgroundColor: 'rgba(15, 14, 14, .3)',
                    display: 'flex',
                    flex: 1
                }}>
                    <CardMedia
                        component={'img'}
                        sx={{
                            height: 100,
                        }}
                        image={imagePath}
                        alt='Zonk' />
                </Box>
                <Box
                    component="input"
                    display="none"
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
                        {subject}
                    </Button>
                </label>
            </Stack>
        </>
    )
}

export default AdminBannerImage