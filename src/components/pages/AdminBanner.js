import AdminNavbar from 'components/organisms/AdminNavbar'
import AdminPreviewBanner from 'components/organisms/AdminPreviewBanner'
import DynamicMobileHeader from 'components/organisms/DynamicMobileHeader'
import CenterLayout from 'components/templates/CenterLayout'
import React from 'react'

const AdminBanner = () => {
    return (
        <>
            <AdminNavbar />
            <CenterLayout admin header={<DynamicMobileHeader title='Management Banner' />}>
                <AdminPreviewBanner />
            </CenterLayout>
        </>
    )
}

export default AdminBanner