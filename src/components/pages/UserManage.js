import React from 'react'
import { useLocation } from 'react-router-dom'
import { ManageAccounts, Key, CreditCard } from '@mui/icons-material'
import DynamicNavbar from 'components/organisms/DynamicNavbar'
import ManageUserContainer from 'components/organisms/ManageUserContainer'
import ManageTab from 'components/templates/ManageTab'
import PrivateProfileTab from 'components/organisms/PrivateProfileTab'
import PrivateBankTab from 'components/organisms/PrivateBankTab'
import PrivatePasswordTab from 'components/organisms/PrivatePasswordTab'

const tabList = []
tabList.push({
    icon: ManageAccounts,
    href: '/profile',
    content: 'Biodata',
    component: PrivateProfileTab,
})
tabList.push({
    icon: CreditCard,
    href: '/profile/bank',
    content: 'Rekening Bank',
    component: PrivateBankTab,
})
tabList.push({
    icon: Key,
    href: '/profile/change-password',
    content: 'Ubah Kata Sandi',
    component: PrivatePasswordTab,
})

const UserManage = () => {
    const { pathname } = useLocation()

    return (
        <>
            <DynamicNavbar>{tabList.find(item => item.href === pathname).content}</DynamicNavbar>
            <ManageUserContainer tabList={tabList}>
                {tabList.map(tab => (
                    <ManageTab url={tab.href} component={<tab.component />} />
                ))}
            </ManageUserContainer>
        </>
    )
}

export default UserManage