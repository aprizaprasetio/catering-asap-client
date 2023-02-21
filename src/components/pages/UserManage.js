import React from 'react'
import { useLocation } from 'react-router-dom'
import { ManageAccounts, Key } from '@mui/icons-material'
import DynamicNavbar from 'components/organisms/DynamicNavbar'
import ManageUserContainer from 'components/organisms/ManageUserContainer'
import ManageTab from 'components/templates/ManageTab'
import PrivateProfileTab from 'components/organisms/PrivateProfileTab'
import PrivatePasswordTab from 'components/organisms/PrivatePasswordTab'

const tabList = []
tabList.push({
    icon: ManageAccounts,
    href: '/profile',
    content: 'Biodata'
})
tabList.push({
    icon: Key,
    href: '/profile/change-password',
    content: 'Ubah Kata Sandi'
})

const UserManage = () => {
    const { pathname } = useLocation()

    return (
        <>
            <DynamicNavbar>{tabList.find(item => item.href === pathname).content}</DynamicNavbar>
            <ManageUserContainer tabList={tabList}>
                <ManageTab url="/profile" component={<PrivateProfileTab />} />
                <ManageTab url="/profile/change-password" component={<PrivatePasswordTab />} />
            </ManageUserContainer>
        </>
    )
}

export default UserManage