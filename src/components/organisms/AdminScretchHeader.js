import React from 'react'
import { Box, Typography, Paper, List, Button } from '@mui/material'
import PressListItem2 from 'components/molecules/PressListItem2'
import { Add, Close } from '@mui/icons-material'

const AdminScretchHeader = ({ addStatus, addTrigger }) => {
    return (
        <Box
            sx={{
                width: '100%',
                height: 176,
                backgroundColor: 'primary.dark',
                position: 'relative',
            }}
        >
            <Box sx={{
                paddingX: 5,
                paddingTop: 3,
            }}>
                <Typography
                    sx={{
                        fontSize: 40,
                        fontWeight: 'bold',
                        color: 'white'
                    }}
                    variant="h1"
                >
                    Welcome to color
                </Typography>
                <Typography sx={{
                    fontSize: 32,
                    color: 'white',
                    fontWeight: 'bold'
                }}
                    variant="subtitle1">Nama Lu</Typography>
                <Box component={Paper} elevation={1} padding={3} sx={{ borderRadius: 4 }}>
                    {
                        addStatus ?
                            <Button variant="outlined" sx={{ borderRadius: 6, width: 150 }} onClick={addTrigger}>
                                <Close />Batal
                            </Button>
                            :
                            <Button variant="contained" sx={{ borderRadius: 6, width: 150 }} onClick={addTrigger}>
                                <Add />Tambah
                            </Button>
                    }

                </Box>
            </Box>
        </Box>
    )
}

export default AdminScretchHeader