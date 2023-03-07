import { Box, Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import React from 'react'
import { blue, grey } from '@mui/material/colors';

const AdminFoodDrinkAddButton = () => {
    return (
        <Button
            // onClick={console.log(alert('hai'))}
            sx={{
                display: 'flex',
                marginLeft: {
                    lg: '25%',
                    sx: 'auto'
                }
            }}
            variant="contained" endIcon={< AddIcon />}>
            Tambah
        </Button>
    )
}

export default AdminFoodDrinkAddButton