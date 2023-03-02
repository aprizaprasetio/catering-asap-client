import React from 'react'
import { Container, Divider, Paper, Stack, Typography, Card, CardContent, CardActions, Button } from '@mui/material'
import DynamicNavbar from 'components/organisms/DynamicNavbar'
import CenterLayout from 'components/templates/CenterLayout'
import BankItem from 'components/organisms/BankItem'

const containerStyle = {
    display: 'flex',
    alignItems: {
        xs: 'normal',
        lg: 'center',
    },
    flexDirection: {
        xs: 'column',
        lg: 'row',
    },
    gap: 3,
}

const UserPayment = () => {
    return (
        <>
            <DynamicNavbar href={'/cart/checkout'}>Payment</DynamicNavbar>
            <CenterLayout>
                <Container sx={containerStyle}>
                    <Stack spacing={3} divider={<Divider />} flex={1}>
                        <Typography variant="h3" fontSize={16} fontWeight="bold">
                            Informasi Pembayaran
                        </Typography>
                        <BankItem
                            bankNumber="8120406923"
                            bankName="BCA"
                            name="APRIZA PRASETIO"
                        />
                    </Stack>
                    <Card sx={{
                        paddingY: 3,
                        borderRadius: 4,
                        boxShadow: 3,
                    }}>
                        <CardContent>

                        </CardContent>
                        <CardActions>
                            <Button variant="contained" fullWidth sx={{
                                borderRadius: 4,
                            }}>Bayar</Button>
                        </CardActions>
                    </Card>
                </Container>
            </CenterLayout>
        </>
    )
}

export default UserPayment