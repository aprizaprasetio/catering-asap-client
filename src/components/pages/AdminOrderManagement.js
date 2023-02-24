import React from 'react'
import AdminNavbar from 'components/organisms/AdminNavbar'
import CenterLayout from 'components/templates/CenterLayout'
import DynamicMobileHeader from 'components/organisms/DynamicMobileHeader'
import OrderManagementList2 from 'components/organisms/OrderManagementList2'

const AdminOrderManagement = () => {
    return (
        <>
            <AdminNavbar />
            <CenterLayout admin header={<DynamicMobileHeader title='Management Orders' isMenuVisible />}>
            <OrderManagementList2 />
                {/* <ManageTab url="/admin/orders" component={<>
                    <OrderManagementList />
                </>} />
                <ManageTab url="/admin/orders/waiting" component={<>
                    <OrderManagementOnProcces />
                </>} />
                <ManageTab url="/admin/orders/delivering" component={<>
                    <OrderManagementOnDelivery />
                </>} />
                <ManageTab url="/admin/orders/success" component={<>
                    <OrderManagementSuccessful />
                </>} /> */}
            </CenterLayout>
        </>
    )
}

export default AdminOrderManagement