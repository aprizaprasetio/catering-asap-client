import React from 'react'
import OrderItem from './OrderItem'
import FormItemOrderVerifyManagement from './FormItemOrderVerifyManagement'
import { useOrderList } from 'api/hooks/OrdersManagementHook'
import { Box } from '@mui/material'

const OrderVerifyContainer = ({ display, mobile}) => {
    const { data, isFetching, isLoading, status, refetch } = useOrderList()

    return (
        <Box display={display}>
            <Box>
                {
                   mobile && <OrderItem {...data}/>
                }
            </Box>
            <FormItemOrderVerifyManagement refetch={refetch} {...data} />
        </Box>
    )
}

export default OrderVerifyContainer