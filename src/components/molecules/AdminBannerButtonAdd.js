import { AddBox } from '@mui/icons-material'
import { Box, Button } from '@mui/material'
import React from 'react'

const AdminBannerButtonAdd = ({ setOpenPopup }) => {
    return (
        <>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row-reverse'
            }}>
                <Button onClick={setOpenPopup} variant="contained" startIcon={<AddBox />} sx={{ width: 200 }}>Tambah</Button>
            </Box>
        </>
    )
}

export default AdminBannerButtonAdd