import DynamicNavbar from 'components/organisms/DynamicNavbar'
import ManageUserContainer from 'components/organisms/ManageUserContainer'
import UserStatusPesananDekstop from 'components/organisms/UserStatusPesananDekstop'
import ManageTab from 'components/templates/ManageTab'
import { HourglassBottom, Cached, LocalShipping, Schedule } from '@mui/icons-material'
import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'

const tabList = []
tabList.push({
    icon: HourglassBottom,
    href: '/statusorders',
    content: 'Menunggu Verifikasi',
    isAdminVisible: true,
})
tabList.push({
    icon: Cached,
    href: '/statusorders/onproccess',
    content: 'Di Proses',
    isAdminVisible: true,
})
tabList.push({
    icon: LocalShipping,
    href: '/statusorders/ondelivery',
    content: 'Dikirim',
    isAdminVisible: false,
})
tabList.push({
    icon: Schedule,
    href: '/statusorders/successful',
    content: 'Selesai',
    isAdminVisible: false,
})

const UserStatusPesanan = () => {
    const { pathname } = useLocation()
    if (!tabList.find(tab => tab.href === pathname))
        return <Navigate to="/" />

    return (
        <>
            <DynamicNavbar>{tabList.find(item => item.href === pathname).content}</DynamicNavbar>
            <ManageUserContainer tabList={tabList}>
                {
                    tabList.map(tab => (
                        <ManageTab key={tab.href} url={tab.href} component={<UserStatusPesananDekstop />} />
                    ))
                }
            </ManageUserContainer>
        </>
    )
}

export default UserStatusPesanan