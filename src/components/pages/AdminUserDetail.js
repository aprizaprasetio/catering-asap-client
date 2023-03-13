import React from 'react'
import UserDetailAdmin from 'components/organisms/UserDetailAdmin'
import AdminNavbar from 'components/organisms/AdminNavbar'
import DynamicNavbar from 'components/organisms/DynamicNavbar'
import CenterLayout from 'components/templates/CenterLayout'

const AdminUserDetail = () => {
    return (
        <>
            <AdminNavbar />
            <DynamicNavbar href={-1}>Detail</DynamicNavbar>
            <CenterLayout admin>
                <UserDetailAdmin />
            </CenterLayout>
        </>
    )
}

export default AdminUserDetail