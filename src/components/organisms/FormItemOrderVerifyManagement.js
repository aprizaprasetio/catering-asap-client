import React from 'react'
import { Box, Typography, Button, CardMedia, Card } from '@mui/material'
import { useTrigger } from 'commands/builders/commonBuilder'
import PopUp from 'components/molecules/PopUp'
import { useNavigate } from 'react-router-dom'
import { useUpdateOrder } from 'api/hooks/ordersManagementHook'
import { useImageByPath } from 'api/hooks/imageHook'
import { useOrderSwitch } from 'api/hooks/ordersManagementHook'

const FormItemOrderVerifyManagement = ({ id, orderTime, mealDate, address, name, bankName, bankNumber, paymentUrl, status, refetch, display }) => {
    const [openPopup, setOpenPopup] = useTrigger()
    const navigate = useNavigate()
    const { mutate } = useUpdateOrder(id)
    const queryImage = useImageByPath(paymentUrl)
    const query = useOrderSwitch()
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
        {
            afterHref: '/admin/orders/success',
            buttonText: 'Simpan ke Grafik',
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
                                image={queryImage?.data}
                                alt='Zonk'
                            />
                            <Box>
                                <Button variant='contained' sx={{ marginTop: 5 }}>Lihat Gambar</Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>

            {<Button sx={{ marginX: 3, borderRadius: 3, paddingY: 1, width: '92%' }} variant="contained" onClick={() => {
                mutate({}, { onSuccess: () => navigate(content[status].afterHref).then(() => query.refetch()) })
            }} >{content[status]?.buttonText}</Button>}

            <PopUp openPopup={openPopup} setOpenPopup={setOpenPopup}>
                <CardMedia
                    component={'img'}
                    sx={{ width: '100%', borderRadius: 3 }}
                    image={queryImage?.data}
                    alt='Zonk'
                />
            </PopUp>
        </>
    )
}

export default FormItemOrderVerifyManagement