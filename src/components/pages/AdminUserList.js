import React from 'react'
import UserListMobileHeader from 'components/molecules/UserListMobileHeader'
import UsersDashboardMobile from 'components/molecules/UsersDashboardMobile'
import CenterLayout from 'components/templates/CenterLayout'
import AdminNavbar from 'components/organisms/AdminNavbar'
import UserListAdminMobile from 'components/organisms/UserListAdminMobile'
import UserListDekstop from 'components/organisms/UserListDekstop'
import DynamicMobileHeader from 'components/organisms/DynamicMobileHeader'
import SearchContainerAdminMobile from 'components/organisms/SearchContainerAdminMobile'

const AdminUserList = () => {
    return (
        <>
            <AdminNavbar />
            <CenterLayout admin header={<DynamicMobileHeader title="Daftar User" />}>
                <UserListDekstop />
                {/* <UsersDashboardMobile /> */}
                <SearchContainerAdminMobile />
                <UserListAdminMobile />
            </CenterLayout>
        </>
    )
}

export default AdminUserList