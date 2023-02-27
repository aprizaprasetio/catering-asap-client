import React from 'react'
import CardItemManagementOrder from 'components/molecules/CardItemManagementOrder'
import OrderManagementWrapper from './OrderManagementWrapper'
import { useOrderListWaiting } from 'api/hooks/ordersManagementHook'

const OrderManagementList = () => {
    const { data, isFetching, isLoading, hasNextPage, fetchNextPage } = useOrderListWaiting()

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
    )
}

export default OrderManagementList