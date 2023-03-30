import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Stack, Typography, CardMedia, Button, Card, CardContent, Skeleton, Chip, Paper }
    from '@mui/material'
import { grey } from '@mui/material/colors'
import { CreditCard } from '@mui/icons-material'
import { useTrigger } from 'commands/builders/commonBuilder'
import PopUp from 'components/molecules/PopUp'
import { useUpdateOrder, useOrderSwitch } from 'api/hooks/ordersManagementHook'
import OrderAdminAdvanceTool from './OrderAdminAdvanceTool'
import StatusStepper from 'components/molecules/StatusStepper'
import { useImageByPath } from 'api/hooks/imageHook'

const SkeletonList = (
    <Box sx={{
        margin: 3,
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
    }}>
        {[...Array(5)].map((item, index) => (
            <Box key={index}>
                <Skeleton
                    variant="text"
                    width={150}
                    sx={{
                        fontSize: 18
                    }}
                />
                <Skeleton
                    variant="text"
                    width={250}
                    sx={{
                        fontSize: 18
                    }}
                />
            </Box>
        ))}
        {[...Array(2)].map((item, index) => (
            <Box key={index}>
                <Skeleton
                    variant="text"
                    width={150}
                    sx={{
                        fontSize: 18
                    }}
                />
                <Skeleton
                    variant="rounded"
                    width="100%"
                    height={120}
                />
            </Box>
        ))}
    </Box>
)

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
            buttonText: 'Buka Grafik',
        },
    ]

    return (
        <>
            {!name ? SkeletonList : (
                <Stack spacing={3} padding={3}>
                    <Box>
                        <Typography sx={{ fontWeight: 'bold' }}>No. Pesanan <Chip label={id} /></Typography>
                    </Box>
                    <Stack spacing={3} maxHeight={300} overflow="auto" >
                        <Box>
                            <Typography sx={{ fontWeight: 'bold' }}>
                                Status
                            </Typography>
                            <StatusStepper currentStatus={status} />
                        </Box>
                        <Box>
                            <Typography sx={{ fontWeight: 'bold' }}>Nama Pemesan</Typography>
                            <Typography>{name}</Typography>
                        </Box>
                        <Box>
                            <Typography sx={{ fontWeight: 'bold' }}>Tg. Pesanan Dibuat</Typography>
                            <Typography>{orderTime}</Typography>
                        </Box>
                        <Box>
                            <Typography sx={{ fontWeight: 'bold' }}>Tg. Santap</Typography>
                            <Typography>{mealDate}</Typography>
                        </Box>
                        <Box>
                            <Typography sx={{ fontWeight: 'bold' }}>Alamat</Typography>
                            <Typography>{address}</Typography>
                        </Box>
                    </Stack>
                    <Stack spacing={3}>
                        <Card sx={{ borderRadius: 4, }}>
                            <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Box>
                                    <Typography sx={{ fontFamily: 'monospace', fontWeight: 'bold', fontSize: 16 }}>{bankName}</Typography>
                                    <Typography sx={{ fontWeight: 'bold', fontSize: 24, fontFamily: 'monospace' }}>{name}</Typography>
                                    <Typography sx={{ backgroundColor: grey[100], borderRadius: 3, paddingX: 1 }} variant='subtitle1' color='GrayText'>{bankNumber}</Typography>
                                </Box>
                                <CreditCard sx={{ fontSize: 100, opacity: .1 }} />
                            </CardContent>
                        </Card>
                        <Box>
                            <Typography sx={{ fontWeight: 'bold', marginBottom: 1, }}>Bukti Pembayaran</Typography>
                            <Paper sx={{
                                position: 'relative',
                                overflow: 'auto',
                                boxShadow: 1,
                                borderRadius: 4,
                            }}>
                                <Box
                                    component="img"
                                    src={queryImage?.data}
                                    width="100%"
                                    height={160}
                                    sx={{
                                        objectFit: 'cover',
                                        objectPosition: 'top center',
                                    }}
                                />
                                <Button
                                    onClick={setOpenPopup}
                                    variant="contained"
                                    fullWidth
                                    sx={{
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        backgroundColor: 'rgba(15, 14, 14, .5)',
                                        textAlign: 'center',
                                        '&:hover': {
                                            backgroundColor: 'rgba(15, 14, 14, 1)',
                                        },
                                    }}>
                                    Lihat Gambar
                                </Button>
                            </Paper>
                        </Box>
                        <Box display="flex" gap={1}>
                            <OrderAdminAdvanceTool id={id} status={status} />
                            {<Button
                                variant="contained"
                                disabled={!content[status]?.buttonText}
                                onClick={() => {
                                    if (status >= 3)
                                        return navigate('/graphs')

                                    mutate({}, {
                                        onSuccess: () => navigate(content[status].afterHref)
                                            .then(() => query.refetch())
                                    })
                                }}
                                sx={{
                                    flex: 2,
                                    borderRadius: 4,
                                }}
                            >
                                {content[status]?.buttonText ?? 'Ditolak'}</Button>}
                        </Box>
                    </Stack>
                </Stack>
            )
            }

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