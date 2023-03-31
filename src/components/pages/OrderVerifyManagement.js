import React from 'react'
import VerifyOrderManagementsHeader from 'components/molecules/VerifyOrderManagementsHeader'
import AdminNavbar from 'components/organisms/AdminNavbar'
import CenterLayout from 'components/templates/CenterLayout'
import OrderItemDetail from 'components/organisms/OrderItem'
import OrderVerifyContainer from 'components/organisms/OrderVerifyContainer'
import DynamicNavbar from 'components/organisms/DynamicNavbar'
import FormVerifyOrderDekstop from 'components/organisms/FormVerifyOrderDekstop'

const OrderVerifyManagement = () => {
    const display = {
        xs: 'block',
        md: 'none'
    }

    return (
        <>
            <AdminNavbar />
            <DynamicNavbar href={-1} revert>Pesanan</DynamicNavbar>
            <CenterLayout admin>
                <OrderVerifyContainer mobile display={display} />
                <FormVerifyOrderDekstop />
            </CenterLayout>
        </>
    )
}

export default OrderVerifyManagement