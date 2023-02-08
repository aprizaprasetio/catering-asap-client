import React from 'react'
import { Paper, Button, FormControlLabel, Checkbox } from '@mui/material'
import { Delete } from '@mui/icons-material'
import useCartStore from 'factory/store/useCartStore'

const CartHeader = () => {
    const carts = useCartStore()

    return (
        <Paper sx={{
            padding: 1,
            display: 'flex',
            justifyContent: 'space-between',
            boxShadow: 1,
            borderRadius: 3,
        }}>
            <Button
                size="small"
                color="error"
                startIcon={<Delete />}
                onClick={carts.removeChecked}
                sx={{
                    paddingX: 3,
                    borderRadius: 6,
                    visibility: carts.isNoCheck() ? 'hidden' : 'visible',
                }}
            >
                Hapus Terpilih
            </Button>
            <FormControlLabel
                label="Pilih Semua"
                labelPlacement="start"
                control={
                    <Checkbox
                        checked={carts.isCheckedAll()}
                        onChange={carts.checkboxTriggerAll}
                    />
                }
            />
        </Paper>
    )
}

export default CartHeader