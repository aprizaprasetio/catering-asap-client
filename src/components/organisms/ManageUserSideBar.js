import React from 'react'
import { Paper, List, Stack } from '@mui/material'
import { ManageAccounts, Key } from '@mui/icons-material'
import PressListItem from 'components/molecules/PressListItem'
import ListItemVertical from 'components/molecules/ListItemVertical'

const listStyle = {
    paddingY: 3,
    paddingX: 1,
    display: 'grid',
    gap: 1,
}

const tabList = []
tabList.push({
    icon: ManageAccounts,
    href: '/profile',
    content: 'Biodata'
})
tabList.push({
    icon: Key,
    href: '/profile/password',
    content: 'Kata Sandi'
})

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
                    {
                        tabList.map(item =>
                            <PressListItem
                                icon={<item.icon />}
                                href={item.href}
                                content={item.content}
                            />
                        )
                    }
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
                    {
                        tabList.map(item =>
                            <ListItemVertical icon={<item.icon />}>
                                {item.content}
                            </ListItemVertical>
                        )
                    }
                </List>
            </Paper>
        </>
    )
}

export default ManageUserSideBar