import React from 'react'
import { Grid, Skeleton } from '@mui/material'
import CardItemManagementOrder from 'components/molecules/CardItemManagementOrder'
import OrderManagementWrapper from './OrderManagementWrapper'
import { useOrderListWaiting, useOrderSwitch } from 'api/hooks/ordersManagementHook'
import LoadingFull from 'components/atoms/LoadingFull'

const SkeletonItemOrder = (
    <Grid item xs={12} sm={6} lg={4} xl={3}>
        <Skeleton variant="rounded" width="100%" height={120} />
    </Grid>
)

const OrderManagementList2 = () => {
    const { data, isFetching, isLoading, hasNextPage, fetchNextPage } = useOrderSwitch()

    React.useEffect(() => {
        const refetch = () => {
            const { innerHeight, pageYOffset } = window
            const isBottom = (innerHeight + pageYOffset) >= document.body.offsetHeight
            if (!isFetching && (isBottom && hasNextPage)) fetchNextPage()
        }

        window.addEventListener('scroll', refetch)
        return () => window.removeEventListener('scroll', refetch)
    }, [isFetching])

    return (
        <OrderManagementWrapper>
            {isFetching ? [...Array(5)].map(() => SkeletonItemOrder) : (
                data?.pages?.map((orderItem, index) => (
                    <React.Fragment key={index} >
                        {
                            orderItem.map(item => <CardItemManagementOrder key={item.id} {...item} />)
                        }
                    </React.Fragment >
                ))
            )}
        </OrderManagementWrapper >
    )
}

export default OrderManagementList2