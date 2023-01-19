import React from 'react'
import { Box } from '@mui/material'
import CenterLayout from 'components/templates/CenterLayout'
import SideNavbar from 'components/organisms/SideNavbar'
import BottomNavbar from 'components/organisms/BottomNavbar'
import NumberCard from 'components/organisms/NumberCard'
import AdminWelcome from 'components/organisms/AdminWelcome'
import { useStale } from 'commands/builders/hookBuilder'

const AdminHome = () => {
    const [user] = useStale('user')

    return (
        <>
            <SideNavbar />
            <BottomNavbar />
            <CenterLayout admin>
                <AdminWelcome
                    header={user?.name ?? 'No Name'}
                    message="Selamat datang"
                    body="Kelola data katering lewat website dimana pun anda berada." />
                <Box display="flex" gap={1}>
                    <NumberCard />
                    <NumberCard />
                </Box>
            </CenterLayout>
        </>
    )
}

export default AdminHome