import React from 'react'
import {
    Box, Paper, Stack,
    List, CardMedia, CardContent,
    Typography, Button, TextField
    , IconButton
}
    from '@mui/material'
import { MoodBadRounded, MoodRounded, SentimentNeutralRounded } from '@mui/icons-material'
import { red, blue } from '@mui/material/colors'
import DynamicNavbar from 'components/organisms/DynamicNavbar'
import CenterLayout from 'components/templates/CenterLayout'
import { useTrigger } from 'commands/builders/commonBuilder'
import EditIcon from '@mui/icons-material/Edit'
import { useFoodDrinkDetail } from 'api/hooks/catalogAdminHook'
import { useEffect } from 'react'
import LoadingFull from 'components/atoms/LoadingFull'
import { useNavigate } from 'react-router-dom'
import { UseFoodDrinkDelete } from 'api/hooks/catalogAdminHook'

const AdminFoodDrinkDetailMobile = () => {
    const { data, isFetchedAfterMount } = useFoodDrinkDetail()
    const [isEditMode, isEditModeTrigger] = useTrigger()

    const nilai = {
        like: 99,
        ok: 99,
        dislike: 99,
    }
    const navigate = useNavigate()
    const { mutate: deleteHandler } = UseFoodDrinkDelete()

    return (
        <>

            <DynamicNavbar>{data?.name}</DynamicNavbar>
            <CenterLayout>
                <Box
                    component={Paper}

                    sx={{
                        width: '100%',
                        paddingX: 1,
                        // borderRadius: 4,
                        boxShadow: 0,

                    }}>
                    {
                        isEditMode ?
                            (
                                <>
                                    <CardMedia
                                        sx={{
                                            marginY: 1,
                                            borderRadius: 2
                                        }}
                                        component="img"
                                        height="194"
                                        image="https://picsum.photos/600.webp"
                                        alt="Paella dish"

                                    />
                                    <IconButton variant="contained" component="label" sx={{
                                        marginTop: -48,
                                        marginLeft: 2,
                                        width: 10,
                                    }}>
                                        <EditIcon />
                                        <input hidden accept="image/*" multiple type="file" />
                                    </IconButton>
                                </>

                            ) : (

                                <CardMedia
                                    sx={{
                                        marginY: 1,
                                        borderRadius: 2
                                    }}
                                    component="img"
                                    height="194"
                                    image="https://picsum.photos/600.webp"
                                    alt="Paella dish"

                                />

                            )
                    }

                    <CardContent>
                        {
                            isEditMode ? (
                                <TextField size='small' label='Nama Makanan' margin='dense' fullWidth />
                            ) : (
                                <Typography variant='subtitle1' fontWeight={500}>
                                    {data?.name}
                                </Typography>
                            )
                        }
                        {
                            isEditMode ?
                                (<TextField size='small' label='Harga' margin='dense' fullWidth />) : (
                                    <Typography variant='subtitle1' fontWeight={1}>
                                        {data?.price}
                                    </Typography>
                                )
                        }
                        {
                            isEditMode ?
                                (<TextField size='small' label='Deskripsi' margin='dense' multiline rows={5} fullWidth />) : (
                                    <Typography variant="body2" color="text.secondary">
                                        {data?.description}
                                    </Typography>
                                )
                        }

                        <List component={Stack} direction="row" width={'50%'} >
                            <MoodRounded content={nilai.like} />
                            <SentimentNeutralRounded content={nilai.ok} />
                            <MoodBadRounded content={nilai.dislike} />
                        </List>
                    </CardContent>
                </Box>
                <List component={Stack} direction='column' gap={1} >
                    <Button
                        onClick={isEditModeTrigger}
                        variant='contained'
                        sx={{
                            borderRadius: 2,
                            backgroundColor: blue[300],
                            color: 'succes'
                        }}>
                        {isEditMode ? 'Simpan' : 'Ubah'}
                    </Button>
                    <Button onClick={() => navigate('/admin/menus')} sx={{
                        borderRadius: 2,
                        // border: 2,
                        // borderColor: grey[300],
                        // backgroundColor: blue[300],
                        color: red[400],
                    }}>Hapus </Button>
                </List>
            </CenterLayout>
        </>
    )
}
export default AdminFoodDrinkDetailMobile
