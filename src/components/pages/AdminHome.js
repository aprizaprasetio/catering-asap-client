import React from 'react'
import { Box } from '@mui/material'
import CenterLayout from 'components/templates/CenterLayout'
import AdminNavbar from 'components/organisms/AdminNavbar'
import NumberCard from 'components/organisms/NumberCard'
import AdminWelcome from 'components/organisms/AdminWelcome'
import { useStale } from 'commands/builders/hookBuilder'

const AdminHome = () => {
    const [user] = useStale('user')

    return (
        <>
            <AdminNavbar />
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