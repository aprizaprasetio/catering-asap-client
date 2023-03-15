import { Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import React from 'react'

const AdminFoodDrinkAddButton = () => {
    return (
        <Button
            sx={{
                display: 'flex',
                marginLeft: {
                    lg: '20%',
                    sx: 'auto'
                }
            }}
            variant="contained" endIcon={< AddIcon />}>
            Tambah
        </Button>
    )
}

export default AdminFoodDrinkAddButton