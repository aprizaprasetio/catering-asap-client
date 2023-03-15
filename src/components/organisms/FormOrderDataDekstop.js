import React from 'react'
import { Box, Typography, CardMedia, Button, Card, CardContent } from '@mui/material'
import { useTrigger } from 'commands/builders/commonBuilder'
import PopUp from 'components/molecules/PopUp'
import { CreditCard } from '@mui/icons-material'
import { grey } from '@mui/material/colors'
import { useNavigate } from 'react-router-dom'
import { useUpdateOrder, useOrderSwitch } from 'api/hooks/ordersManagementHook'
import { useImageByPath } from 'api/hooks/imageHook'

const FormOrderDataDekstop = ({ id, name, orderTime, mealDate, address, bankName, bankNumber, paymentUrl, image, refetch, status }) => {
    const [openPopup, setOpenPopup] = useTrigger()
    const queryImage = useImageByPath(paymentUrl)
    const navigate = useNavigate()
    const { mutate } = useUpdateOrder(id)
    const query = useOrderSwitch()
    const content = [
        {
            afterHref: '/orders/waiting',
            buttonText: 'Konfirmasi',
        },
        {
            afterHref: '/orders/delivering',
            buttonText: 'Kirim',
        },
        {
            afterHref: '/orders/success',
            buttonText: 'Selesai',
        },
        {
            afterHref: '/graphs',
            buttonText: 'Simpan Ke Grafik',
        },
    ]

    return (
        <>
            <Box sx={{
                margin: 3,
                display: 'flex',
                flexDirection: 'column',
                gap: 3,
            }}>
                <Box>
                    <Typography sx={{ fontWeight: 'bold' }}>Nama</Typography>
                    <Typography>{name}</Typography>
                </Box>
                <Box>
                    <Typography sx={{ fontWeight: 'bold' }}>No.Pesanan</Typography>
                    <Typography>{id}</Typography>
                </Box>
                <Box>
                    <Typography sx={{ fontWeight: 'bold' }}>Tgl Ordered</Typography>
                    <Typography>{orderTime}</Typography>
                </Box>
                <Box>
                    <Typography sx={{ fontWeight: 'bold' }}>Estimasi Pengiriman</Typography>
                    <Typography>{mealDate}</Typography>
                </Box>
                <Box>
                    <Typography sx={{ fontWeight: 'bold' }}>Alamat</Typography>
                    <Typography>{address}</Typography>
                </Box>
                <Box>
                    <Card sx={{ paddingX: 3, borderRadius: 3, }}>
                        <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Box>
                                <Typography sx={{ fontFamily: 'monospace', fontWeight: 'bold', fontSize: 16 }}>{bankName}</Typography>
                                <Typography sx={{ fontWeight: 'bold', fontSize: 24, fontFamily: 'monospace' }}>{name}</Typography>
                                <Typography sx={{ backgroundColor: grey[100], borderRadius: 3, paddingX: 1 }} variant='subtitle1' color='GrayText'>{bankNumber}</Typography>
                            </Box>
                            <CreditCard sx={{ fontSize: 100 }} />
                        </CardContent>
                    </Card>
                </Box>
                <Box>
                    <Typography sx={{ fontWeight: 'bold' }}>Screenshoot</Typography>
                    <Card sx={{
                        display: 'flex',
                        gap: 3,
                        cursor: 'pointer',
                        width: 350,
                        borderRadius: 3,
                        paddingX: 1,
                        marginTop: 2
                    }}
                        onClick={setOpenPopup}>
                        {queryImage.isLoading ? <h1>Loading ...</h1> : (
                            <CardMedia
                                component={'img'}
                                sx={{
                                    width: 160,
                                    height: 160,
                                    borderRadius: 3,
                                    boxShadow: 3,
                                    marginY: 1
                                }}
                                image={queryImage?.data}
                                alt='Zonk'
                            />
                        )}
                        <Box>
                            <Button variant='contained' sx={{ marginTop: 8 }}>Lihat Gambar</Button>
                        </Box>
                    </Card>
                </Box>
                {<Button sx={{ marginX: 3, borderRadius: 3, paddingY: 1 }} variant="contained" onClick={() => {
                    mutate({}, { onSuccess: () => navigate(content[status].afterHref).then(() => query.refetch()) })
                }} >{content[status]?.buttonText}</Button>}
            </Box>

            <PopUp openPopup={openPopup} setOpenPopup={setOpenPopup}>
                <CardMedia
                    component={'img'}
                    sx={{
                        borderRadius: 3
                    }}
                    image={queryImage?.data}
                    alt='Zonk'
                />
            </PopUp>
        </>
    )
}

export default FormOrderDataDekstop