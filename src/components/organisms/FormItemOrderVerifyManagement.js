import React from 'react'
import { Box, Typography, Button, CardMedia, Card } from '@mui/material'
import { useTrigger } from 'commands/builders/commonBuilder'
import PopUp from 'components/molecules/PopUp'
import { useNavigate } from 'react-router-dom'
import { useUpdateOrder } from 'api/hooks/ordersManagementHook'

const FormItemOrderVerifyManagement = ({ id, orderTime, mealDate, address, name, bankName, bankNumber, paymentUrl, status, refetch, display }) => {
    const [openPopup, setOpenPopup] = useTrigger()
    const navigate = useNavigate()
    const { mutate } = useUpdateOrder(id)
    const content = [
        {
            afterHref: '/admin/orders/waiting',
            buttonText: 'Konfirmasi',
        },
        {
            afterHref: '/admin/orders/onDelivery',
            buttonText: 'Kirim',
        },
        {
            afterHref: '/admin/orders/successful',
            buttonText: 'Selesai',
        },
    ]

    return (
        <>
            <Box sx={{
                borderRadius: 5,
                boxShadow: 5,
                boxSizing: 'border-box',
                marginX: 3,
            }}
                display={display}>
                <Box sx={{
                    margin: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 3
                }}>
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
                        <Typography sx={{ fontWeight: 'bold' }}>Alamat Pengiriman</Typography>
                        <Typography>{address}</Typography>
                    </Box>
                    <Box>
                        <Typography sx={{ fontWeight: 'bold' }}>Bank</Typography>
                        <Typography>NAMA : {name}</Typography>
                        <Typography>BANK : {bankName}</Typography>
                        <Typography>NO.REKENING : {bankNumber}</Typography>
                    </Box>
                    <Box>
                        <Typography sx={{ fontWeight: 'bold' }}>Screenshoot</Typography>
                        <Box onClick={setOpenPopup} sx={{
                            display: 'flex',
                            gap: 3,
                            cursor: 'pointer',
                        }}>
                            <CardMedia
                                component={'img'}
                                sx={{ width: 120, height: 120, borderRadius: 3, boxShadow: 3, marginY: 1 }}
                                image='data:image/jpeg;base64,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'
                                alt='Zonk'
                            />
                            <Box>
                                <Button variant='contained' sx={{ marginTop: 5 }}>Lihat Gambar</Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>

            {<Button sx={{ marginX: 3, borderRadius: 3, paddingY: 1 }} variant="contained" onClick={() => {
                mutate({}, { onSuccess: refetch })
                navigate(content[status].afterHref)
            }} >{content[status]?.buttonText}</Button>}

            <PopUp openPopup={openPopup} setOpenPopup={setOpenPopup}>
                <CardMedia
                    component={'img'}
                    sx={{ width: '100%', borderRadius: 3 }}
                    image='data:image/jpeg;base64,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'
                    alt='Zonk'
                />
            </PopUp>
        </>
    )
}

export default FormItemOrderVerifyManagement