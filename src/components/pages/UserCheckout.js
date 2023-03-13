import React from 'react'
import { Container, Divider, Stack } from '@mui/material'
import DynamicNavbar from 'components/organisms/DynamicNavbar'
import CenterLayout from 'components/templates/CenterLayout'
import CheckoutConfirmation from 'components/organisms/CheckoutConfirmation'
import CheckoutTable from 'components/organisms/CheckoutTable'
import CheckoutAddress from 'components/molecules/CheckoutAddress'
import CheckoutBank from 'components/molecules/CheckoutBank'
import CheckoutSkeleton from 'components/molecules/CheckoutSkeleton'
import { useCartCheckout } from 'api/hooks/cartHook'

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

const UserCheckout = () => {
    const { isFetchedAfterMount } = useCartCheckout()

    return (
        <>
            <DynamicNavbar href={'/cart'}>Checkout</DynamicNavbar>
            <CenterLayout>
                <Container sx={containerStyle}>
                    {
                        !isFetchedAfterMount ? <CheckoutSkeleton /> : (
                            <>
                                <Stack spacing={3} divider={<Divider />} flex={1}>
                                    <CheckoutAddress />
                                    <CheckoutBank />
                                    <CheckoutTable />
                                </Stack>
                                <CheckoutConfirmation />
                            </>
                        )
                    }
                </Container>
            </CenterLayout>
        </>
    )
}

export default UserCheckout