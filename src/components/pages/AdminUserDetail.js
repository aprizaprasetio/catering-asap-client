import React from 'react'
import UserDetailAdmin from 'components/organisms/UserDetailAdmin'
import AdminNavbar from 'components/organisms/AdminNavbar'
import DynamicNavbar from 'components/organisms/DynamicNavbar'
import CenterLayout from 'components/templates/CenterLayout'
import UserItemMobilePopup from 'components/organisms/UserItemMobilePopup'
import { useUserData } from 'api/hooks/usersManagementHook'

const AdminUserDetail = () => {
    const { data } = useUserData()
    return (
        <>
            <AdminNavbar />
            <DynamicNavbar href={-1}>Detail</DynamicNavbar>
            <CenterLayout admin>
                <UserDetailAdmin />
                <UserItemMobilePopup userBio={data} userContent={data} />
            </CenterLayout>
        </>
    )
}

export default AdminUserDetail