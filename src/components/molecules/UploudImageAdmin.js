import React from 'react'
import { Button, CardMedia, IconButton } from '@mui/material'


const UploudImageAdmin = () => {
    return (
        <>
            <Button component="label">
                <CardMedia
                    sx={{
                        marginY: 1,
                        borderRadius: 2
                    }}
                    component="img"
                    height="150"
                    image="https://picsum.photos/600.webp"
                />
                <input hidden accept="image/*" multiple type="file" />
            </Button>



        </>
    )
}

export default UploudImageAdmin
