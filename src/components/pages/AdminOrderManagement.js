import React from 'react'
import AdminNavbar from 'components/organisms/AdminNavbar'
import CenterLayout from 'components/templates/CenterLayout'
import DynamicMobileHeader from 'components/organisms/DynamicMobileHeader'
import OrderManagementList2 from 'components/organisms/OrderManagementList2'
import SortingAdmin from 'components/molecules/SortingAdmin'
import { useLocation } from 'react-router-dom'


const AdminOrderManagement = () => {
    const { pathname } = useLocation()
    const display = (display) => {
        if (pathname !== '/orders/success')
            return 'none'
    }

    return (
        <>
            <AdminNavbar />
            <CenterLayout admin header={<DynamicMobileHeader title='Management Orders' isMenuVisible />}>
                <SortingAdmin display={display} />
                <OrderManagementList2 />
            </CenterLayout>
        </>
    )
}

export default AdminOrderManagement