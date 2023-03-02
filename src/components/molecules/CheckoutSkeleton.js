import React from 'react'
import { Stack, Skeleton, Divider } from '@mui/material'

const CheckoutSkeleton = () => {
    return (
        <>
            <Stack flex={3} spacing={3} divider={<Divider />}>
                <Skeleton width="100%" height={70} variant="rounded" />
                <Skeleton width="30%" height={80} variant="rounded" />
                <Stack spacing={1}>
                    <Skeleton width="50%" height={40} variant="rounded" />
                    <Skeleton width="70%" height={30} variant="rounded" />
                    <Skeleton width="75%" height={30} variant="rounded" />
                    <Skeleton width="60%" height={30} variant="rounded" />
                    <Skeleton width="70%" height={30} variant="rounded" />
                    <Skeleton width="90%" height={30} variant="rounded" />
                </Stack>
            </Stack>
            <Skeleton width={250} height={300} variant="rounded" />
        </>
    )
}

export default CheckoutSkeleton