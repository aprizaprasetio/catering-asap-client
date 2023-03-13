import React from 'react'
import { useLocation, Navigate } from 'react-router-dom'
import { ManageAccounts, Key, CreditCard } from '@mui/icons-material'
import DynamicNavbar from 'components/organisms/DynamicNavbar'
import ManageUserContainer from 'components/organisms/ManageUserContainer'
import ManageTab from 'components/templates/ManageTab'
import PrivateProfileTab from 'components/organisms/PrivateProfileTab'
import PrivateBankTab from 'components/organisms/PrivateBankTab'
import PrivatePasswordTab from 'components/organisms/PrivatePasswordTab'
import { useStale } from 'commands/builders/hookBuilder'


const tabList = []
tabList.push({
    icon: ManageAccounts,
    href: '/profile',
    content: 'Biodata',
    component: PrivateProfileTab,
    isAdminVisible: true,
})
tabList.push({
    icon: Key,
    href: '/profile/change-password',
    content: 'Ubah Kata Sandi',
    component: PrivatePasswordTab,
    isAdminVisible: true,
})
tabList.push({
    icon: CreditCard,
    href: '/profile/bank',
    content: 'Rekening Bank',
    component: PrivateBankTab,
    isAdminVisible: false,
})

const UserManage = () => {
    const [user] = useStale('user')
    const { pathname } = useLocation()

    if (!tabList.find(tab => tab.href === pathname))
        return <Navigate to="/" />

    return (
        <>
            <DynamicNavbar>{tabList.find(item => item.href === pathname).content}</DynamicNavbar>
            <ManageUserContainer tabList={tabList}>
                {
                    (user.role === 'admin') ?
                        tabList.map(tab => (
                            tab.isAdminVisible && <ManageTab key={tab.href} url={tab.href} component={<tab.component />} />
                        )) :
                        tabList.map(tab => (
                            <ManageTab key={tab.href} url={tab.href} component={<tab.component />} />
                        ))
                }
            </ManageUserContainer>
        </>
    )
}

export default UserManage