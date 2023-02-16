import React from 'react'
import { Paper, Button, FormControlLabel, Checkbox } from '@mui/material'
import { Delete } from '@mui/icons-material'
import useCartStore from 'factory/store/useCartStore'
import { useCheckboxAllCart, useRemoveCartMultiple } from 'api/hooks/cartHook'

const CartHeader = () => {
    const carts = useCartStore()
    const checkAll = useCheckboxAllCart(carts.checkboxTriggerAll)
    const removeChecked = useRemoveCartMultiple(carts.removeChecked)

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
                onClick={removeChecked}
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
                        onChange={checkAll}
                    />
                }
            />
        </Paper>
    )
}

export default CartHeader