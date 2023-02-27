import React from 'react'
import OrderItem from './OrderItem'
import FormItemOrderVerifyManagement from './FormItemOrderVerifyManagement'
import { useOrderList } from 'api/hooks/ordersManagementHook'
import { Box } from '@mui/material'

const OrderVerifyContainer = ({ display, mobile }) => {
    const { data, isFetching, isLoading, status, refetch } = useOrderList()

    return (
        <Box display={display}>
            <Box>
                {
                    mobile && <OrderItem />
                }
            </Box>
            <FormItemOrderVerifyManagement refetch={refetch} {...data} />
        </Box>
    )
}

export default OrderVerifyContainer