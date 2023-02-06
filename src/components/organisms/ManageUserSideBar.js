import React from 'react'
import { Paper, List, Stack } from '@mui/material'
import { ManageAccounts, Key } from '@mui/icons-material'
import PressListItem from 'components/molecules/PressListItem'
import ListItemVertical from 'components/molecules/ListItemVertical'
import PressIconLink from 'components/atoms/PressIconLink'

const listStyle = {
    paddingY: 3,
    paddingX: 1,
    display: 'grid',
    gap: 1,
}

const ManageUserSideBar = () => {
    return (
        <>
            <Paper sx={{
                height: 'calc(100vh - 64px)',
                boxShadow: 4,
                padding: 0,
                display: {
                    xs: 'none',
                    md: 'block',
                },
            }}>
                <List sx={listStyle}>
                    <PressListItem icon={<ManageAccounts />} content="Biodata" />
                    <PressListItem icon={<Key />} content="Ubah Kata Sandi" />
                </List>
            </Paper>
            <Paper sx={{
                display: {
                    xs: 'block',
                    md: 'none',
                },
                paddingX: 1,
                boxShadow: 3,
            }}>
                <List component={Stack} direction="row">
                    <ListItemVertical icon={<ManageAccounts />}>
                        Biodata
                    </ListItemVertical>
                    <ListItemVertical icon={<Key />}>
                        Kata Sandi
                    </ListItemVertical>
                </List>
            </Paper>
        </>
    )
}

export default ManageUserSideBar