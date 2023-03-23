import React from 'react'
import { Grid } from '@mui/material'
import { useStale } from 'commands/builders/hookBuilder'
import CenterLayout from 'components/templates/CenterLayout'
import AdminNavbar from 'components/organisms/AdminNavbar'
import NumberCard from 'components/organisms/NumberCard'
import AdminWelcome from 'components/organisms/AdminWelcome'
import AdminAvatar from 'components/organisms/AdminAvatar'
import AdminHomeCardLainnya from 'components/organisms/AdminHomeCardLainnya'

const AdminHome = () => {
    const [user] = useStale('user')

    return (
        <>
            <AdminNavbar />
            <CenterLayout admin>
                <Grid
                    container
                    spacing={1}
                    columns={{
                        xs: 5,
                        sm: 6,
                        md: 7,
                        lg: 10,
                        xl: 12,
                    }}
                >
                    <AdminWelcome
                        header={user?.name ?? 'No Name'}
                        message="Selamat datang"
                        body="Kelola data katering lewat website dimana pun anda berada." />
                    <AdminAvatar />
                    <AdminHomeCardLainnya />
                </Grid>
            </CenterLayout>
        </>
    )
}

export default AdminHome