import React from 'react'
import UserListMobileHeader from 'components/molecules/UserListMobileHeader'
import BottomNavbar from 'components/organisms/BottomNavbar'
import UsersDashboardMobile from 'components/molecules/UsersDashboardMobile'
import CenterLayout from 'components/templates/CenterLayout'
import UserItemMobile from 'components/organisms/UserItemMobile'
import UsersWrapperMobile from 'components/organisms/UsersWrapperMobile'

const AdminUserList = () => {
    return (
        <>
            <UserListMobileHeader />
            <CenterLayout>
                <UsersDashboardMobile />
                <UsersWrapperMobile >
                    <UserItemMobile />
                    <UserItemMobile />
                    <UserItemMobile />
                    <UserItemMobile />
                    <UserItemMobile />
                    <UserItemMobile />
                </UsersWrapperMobile>
            </CenterLayout>
            <BottomNavbar />
        </>
    )
}

export default AdminUserList