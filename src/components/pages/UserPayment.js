import React from 'react'
import { Navigate } from 'react-router-dom'
import { Container, Divider, Skeleton, Stack, Typography } from '@mui/material'
import DynamicNavbar from 'components/organisms/DynamicNavbar'
import CenterLayout from 'components/templates/CenterLayout'
import ImageUploadPanel from 'components/organisms/ImageUploadPanel'
import BankItem from 'components/organisms/BankItem'
import { useUsedBank } from 'api/hooks/bankHook'
import { useCartCheckout } from 'api/hooks/cartHook'

const containerStyle = {
    display: 'flex',
    flexDirection: {
        xs: 'column',
        md: 'row',
    },
    gap: 3,
}

const UserPayment = () => {
    const { data: cartData, isFetchedAfterMount: isCartFetched } = useCartCheckout()
    const { data: bankData, isFetchedAfterMount: isBankFetched } = useUsedBank()

    return (
        <>
            <DynamicNavbar href={'/cart/checkout'}>Payment</DynamicNavbar>
            <CenterLayout>
                <Container sx={containerStyle}>
                    <Stack spacing={3} divider={<Divider />} flex={{ xs: 0, md: 1 }}>
                        <Typography variant="h3" fontSize={16} fontWeight="bold">
                            Informasi Pembayaran
                        </Typography>
                        {(isCartFetched && isBankFetched) ? (
                            <>
                                {(!cartData.carts || !bankData) && <Navigate to="/" />}
                                <BankItem
                                    bankNumber={bankData?.bankNumber}
                                    bankName={bankData?.bankName}
                                    name={bankData?.bankName}
                                />
                            </>
                        ) : (
                            <Skeleton sx={{
                                width: '100%',
                                height: 150,
                                borderRadius: 4,
                            }} />
                        )}
                    </Stack>
                    <ImageUploadPanel />
                </Container>
            </CenterLayout>
        </>
    )
}

export default UserPayment