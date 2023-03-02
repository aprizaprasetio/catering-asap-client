import React from 'react'
import { Box, Paper, Select, MenuItem, List, ListItem, Divider, Button, Card, CardContent, CardActions, Typography, Stack, TextField, ToggleButton, ToggleButtonGroup }
    from '@mui/material'
import { useNavigate } from 'react-router-dom'
import BankItem from 'components/organisms/BankItem'
import useCartStore from 'factory/store/useCartStore'
import { formatIDR } from 'commands/application/priceCommand'
import { storageBuilder, useInput } from 'commands/builders/commonBuilder'
import { useBankList } from 'api/hooks/bankHook'
import CartCheckoutBanks from './CartCheckoutBanks'

const CartCheckout = () => {
    const navigate = useNavigate()

    const banks = useBankList()
    const cartTotal = useCartStore(state => state.checkedTotal)
    const addressLocal = storageBuilder('USER_ADDRESS')
    // const [bank, bankHandler] = useInput()
    const [bank, setBank] = React.useState(null)

    const bankHandler = (Event, newValue) => {
        setBank(newValue)
    }

    const [address, addressHandler] = useInput(addressLocal.get())

    React.useEffect(() => addressLocal.set(address), [address])

    return (
        <Card sx={{
            padding: 0,
            boxShadow: 0,
        }}>
            <CardContent sx={{
                width: '100%',
                display: 'grid',
                gap: 3,
            }}>
                <CartCheckoutBanks />
                <Divider />
                <Box>
                    <Typography variant="h3" sx={{
                        fontSize: 18,
                        fontWeight: 'bold',
                        marginBottom: 1,
                    }}>
                        Alamat Tujuan
                    </Typography>
                    <TextField
                        value={address}
                        onChange={addressHandler}
                        size="small"
                        rows={5}
                        multiline
                        fullWidth
                        InputProps={{
                            sx: {
                                borderRadius: 6,
                            },
                        }}
                    />
                </Box>
                <Divider />
                <Box>
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Typography variant="h3" sx={{
                            fontSize: 18,
                            fontWeight: 'bold',
                        }}>
                            Total Harga
                        </Typography>
                        <Typography variant="body1" sx={{
                            fontSize: 16,
                            fontWeight: 'bold',
                        }}>
                            {formatIDR(cartTotal())}
                        </Typography>
                    </Stack>
                </Box>
            </CardContent>
            <CardActions>
                <Button
                    onClick={() => navigate('/cart/checkout')}
                    variant="contained"
                    fullWidth
                    disableElevation
                    sx={{
                        borderRadius: 6,
                    }}>
                    Lanjutkan
                </Button>
            </CardActions>
        </Card>
    )
}

export default CartCheckout