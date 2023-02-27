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
            </CenterLayout>
        </>
    )
}

export default AdminOrderManagement