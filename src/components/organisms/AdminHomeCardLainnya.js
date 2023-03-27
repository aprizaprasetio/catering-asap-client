import { BurstMode, More, Person, Widgets } from '@mui/icons-material'
import { Box, Button, Grid, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import React from 'react'
import { Link } from 'react-router-dom'

const AdminHomeCardLainnya = () => {
    return (
        <>
            <Grid item xs={7}>
                <Box sx={{
                    borderRadius: 3,
                    height: {
                        xs: 250,
                        md: 150
                    },
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-around',
                    boxShadow: 3
                }}>
                    <Box sx={{ display: 'flex', gap: 1, marginX: 1 }}>
                        <Widgets />
                        <Typography>Lainnya</Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        gap: 1,
                        flexDirection: {
                            xs: 'column',
                            md: 'row'
                        }
                    }}>
                        <Button
                            variant='outlined'
                            component={Link} to={'/banners'}
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 3,
                                marginX: 1,
                                paddingY: 1,
                                boxShadow: 1,
                                textDecoration: 'none',
                            }}>
                            <BurstMode sx={{ fontSize: 40 }} />
                            <Typography>Banner</Typography>
                        </Button>
                        <Button
                            variant='outlined'
                            component={Link} to={'/profile'}
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 3,
                                marginX: 1,
                                boxShadow: 1,
                            }}>
                            <Person sx={{ fontSize: 40 }} />
                            <Typography>Profile</Typography>
                        </Button>
                    </Box>
                </Box>
            </Grid>
        </>
    )
}

export default AdminHomeCardLainnya