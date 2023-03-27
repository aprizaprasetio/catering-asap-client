import React from 'react'
import { Typography, Card, CardHeader, CardMedia, CardContent, CardActions, Button, Box }
    from '@mui/material'
import { Image } from '@mui/icons-material'
import { useImage } from 'commands/builders/imageBuilder'
import { useFoodDrinkOrder } from 'api/hooks/catalogUserHook'
import { useUsedBank } from 'api/hooks/bankHook'
import useCheckoutStore from 'factory/store/useCheckoutStore'

const ImageUploadPanel = () => {
    const setImage = useCheckoutStore(state => state.setImage)
    const [image, imageHandler, { fileError }] = useImage(setImage)
    const { data: usedBank } = useUsedBank()
    const { mutate } = useFoodDrinkOrder()

    return (
        <Card sx={{
            flex: 1,
            paddingX: 3,
            paddingBottom: 3,
            borderRadius: 4,
            boxShadow: 3,
        }}>
            <CardHeader
                title="Bukti Pembayaran"
                titleTypographyProps={{
                    sx: {
                        fontSize: 16,
                        fontWeight: 'bold',
                    },
                }}
            />
            <CardMedia
                component="img"
                image={image?.binary}
                sx={{
                    maxHeight: {
                        xs: 400,
                        lg: 300,
                    },
                    objectFit: 'cover',
                    borderRadius: 6,
                }}
            />
            {fileError && (
                <CardContent>
                    <Typography variant="caption" color="red">
                        {fileError}
                    </Typography>
                </CardContent>
            )}
            <CardActions sx={{
                display: 'grid',
                gap: 1,
            }}>
                <Box component="input"
                    id="select-image"
                    accept="image/*"
                    type="file"
                    onChange={imageHandler}
                    display="none"
                />
                <label htmlFor="select-image">
                    {image?.fileName && (
                        <Typography
                            fontSize={14}
                            fontStyle="italic"
                            fontWeight="light"
                            sx={{
                                display: 'flex',
                                justifyItems: 'center',
                                gap: 1,
                            }}
                        >
                            <Image /> {image?.fileName}
                        </Typography>
                    )}
                    <Button
                        variant="outlined"
                        component="span"
                        fullWidth
                        sx={{
                            borderRadius: 4,
                        }}>
                        Unggah Bukti Pembayaran
                    </Button>
                </label>
                <Button
                    onClick={mutate}
                    variant="contained"
                    disabled={!image?.binary || !usedBank}
                    fullWidth
                    sx={{
                        borderRadius: 4,
                    }}
                >
                    Bayar
                </Button>
            </CardActions>
        </Card>
    )
}

export default ImageUploadPanel