import React from 'react'
import { Grid, Typography, Card, CardMedia, CardContent, CardActions, Avatar, List, ListItem } from '@mui/material'
import { Person, Logout } from '@mui/icons-material'
import { useStale } from 'commands/builders/hookBuilder'
import PressListItem from 'components/molecules/PressListItem'
import { logout } from 'commands/application/authCommand'
import { Box } from '@mui/system'

const AdminAvatar = () => {
    const [user] = useStale('user')

    return (
        <Grid item xs={3}>
            <Card sx={{
                borderRadius: 4,
            }}>
                <CardContent sx={{
                    position: 'flex',
                    display: 'flex',
                    gap: 3,
                    flexDirection: {
                        xs: 'column',
                        sm: 'row',
                    },
                    alignItems: 'center',
                }}>
                    {
                        user.avatar == null ? <Person sx={{ fontSize: 100 }} /> :
                            <Avatar
                                alt="Remy Sharp"
                                src={user.avatar}
                                sx={{ width: 100, height: 100 }}
                            />
                    }

                    <Box>
                        <Typography sx={{ fontSize: 26, fontWeight: 'medium' }}>{user.name}</Typography>
                        <Typography sx={{ fontSize: 16 }}>Admin</Typography>
                    </Box>
                </CardContent>
                <CardActions>
                    <List sx={{
                        width: '100%',
                    }}>
                        <PressListItem
                            onClick={logout}
                            icon={<Logout />}
                            content="Keluar"
                        />
                    </List>
                </CardActions>
                <Box sx={{
                    marginX: 3,
                    marginBottom: 2,
                    display: 'flex',
                    gap: {
                        xs: 2,
                        md: 6
                    },
                    flexDirection: {
                        xs: 'column',
                        md: 'row'
                    }
                }}>
                    <Box>
                        <Typography sx={{ fontWeight: 'medium' }}>Jenis Kelamin</Typography>
                        <Typography>{user.gender == 0 ? 'Pria' : 'Wanita'}</Typography>
                    </Box>
                    <Box>
                        <Typography sx={{ fontWeight: 'medium' }}>Email</Typography>
                        <Typography>{user.email == "" ? '-' : user.email}</Typography>
                    </Box>
                </Box>
                <Box sx={{
                    marginX: 3,
                    marginBottom: 2
                }}>
                    <Typography sx={{ fontWeight: 'medium' }}>Telepon</Typography>
                    <Typography>{user.phone == "" ? '-' : user.phone}</Typography>
                </Box>
            </Card>
        </Grid>
    )
}

export default AdminAvatar