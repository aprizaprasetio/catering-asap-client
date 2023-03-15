import React from 'react'
import CardItemManagementOrder from 'components/molecules/CardItemManagementOrder'
import OrderManagementWrapper from './OrderManagementWrapper'
import { useOrderListWaiting, useOrderSwitch } from 'api/hooks/ordersManagementHook'
import LoadingFull from 'components/atoms/LoadingFull'

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
        <>
            <OrderManagementWrapper>
                {
                    data?.pages?.map((orderItem, index) => {
                        return (
                            <React.Fragment key={index}>
                                {
                                    orderItem.map(item => <CardItemManagementOrder key={item.id} {...item} />)
                                }
                            </React.Fragment>
                        )
                    })
                }
            </OrderManagementWrapper>
            {(isFetching || isLoading) && <LoadingFull />}
        </>
    )
}

export default OrderManagementList2