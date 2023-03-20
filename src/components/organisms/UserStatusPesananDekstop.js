import { useOrderSwitchUser } from 'api/hooks/ordersManagementHook'
import LoadingFull from 'components/atoms/LoadingFull'
import CardItemOrdersUser from 'components/molecules/CardItemOrdersUser'
import React from 'react'
import OrderManagementWrapper from './OrderManagementWrapper'
import UserStatusOrderEmpty from './UserStatusOrderEmpty'

const UserStatusPesananDekstop = () => {
    const { data, isFetching, isLoading, hasNextPage, fetchNextPage } = useOrderSwitchUser()

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
                    data?.pages == 0 ? <UserStatusOrderEmpty /> :
                        data?.pages?.map((orderItem, index) => {
                            return (
                                <React.Fragment key={index}>
                                    {
                                        orderItem.map(item => <CardItemOrdersUser key={item.id} {...item} />)
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

export default UserStatusPesananDekstop