import React from 'react'
import VerifyOrderManagementsHeader from 'components/molecules/VerifyOrderManagementsHeader'
import AdminNavbar from 'components/organisms/AdminNavbar'
import CenterLayout from 'components/templates/CenterLayout'
import OrderItemDetail from 'components/organisms/OrderItem'
import OrderVerifyContainer from 'components/organisms/OrderVerifyContainer'
import DynamicNavbar from 'components/organisms/DynamicNavbar'
import { useParams } from 'react-router-dom'
import FormVerifyOrderDekstop from 'components/organisms/FormVerifyOrderDekstop'
import { useOrderList } from 'api/hooks/ordersManagementHook'

const OrderVerifyManagement = () => {
    const { data } = useOrderList()

    const display = {
        xs: 'block',
        md: 'none'
    }

    return (
        <>
            <AdminNavbar />
            <DynamicNavbar href={-1}>Verifikasi</DynamicNavbar>
            <CenterLayout admin>
                <OrderVerifyContainer mobile display={display} />
                <FormVerifyOrderDekstop {...data} result={data} />
            </CenterLayout>
        </>
    )
}

export default OrderVerifyManagement