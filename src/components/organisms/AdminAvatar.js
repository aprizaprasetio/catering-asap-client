import React from 'react'
import { Grid, Typography, Card, CardMedia, CardContent, CardActions, Avatar, List, ListItem } from '@mui/material'
import { Person, Logout } from '@mui/icons-material'
import { useStale } from 'commands/builders/hookBuilder'
import PressListItem from 'components/molecules/PressListItem'
import { logout } from 'commands/application/authCommand'

const AdminAvatar = () => {
    const [user] = useStale('user')

    return (
        <Grid item xs={3}>
            <Card sx={{
                borderRadius: 4,
            }}>
                <CardMedia
                    component="img"
                    image="https://picsum.photos/600.webp"
                    sx={{
                        height: 200,
                    }}
                />
                <CardContent sx={{
                    position: 'flex',
                    display: 'flex',
                    gap: 1,
                    flexDirection: {
                        xs: 'column',
                        sm: 'row',
                    },
                    alignItems: 'center',
                }}>
                    <Avatar sx={{
                        width: 60,
                        height: 60,
                    }}>
                        <Person />
                    </Avatar>
                    <Typography variant="h3" sx={{ fontSize: 20 }}>{user.name}</Typography>
                </CardContent>
                <CardActions>
                    <List sx={{
                        width: '100%',
                    }}>
                        <PressListItem
                            href="profile"
                            icon={<Person />}
                            content="Profil"
                        />
                        <PressListItem
                            onClick={logout}
                            icon={<Logout />}
                            content="Keluar"
                        />
                    </List>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default AdminAvatar