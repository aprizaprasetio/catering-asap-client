import React from 'react'
import { useNavigate } from 'react-router-dom'
import moment from 'moment'
import { Typography, Box, TextField, Stack, Card, CardContent, CardActions, Button } from '@mui/material'
import { DateTimePicker } from '@mui/x-date-pickers'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { formatIDR } from 'commands/application/priceCommand'
import useCheckoutStore from 'factory/store/useCheckoutStore'
import { useCartCheckout } from 'api/hooks/cartHook'

const CheckoutConfirmation = () => {
    const navigate = useNavigate()
    const { data } = useCartCheckout()
    const { mealDate, setMealDate } = useCheckoutStore()

    return (
        <Card sx={{
            position: 'sticky !important',
            paddingY: 3,
            borderRadius: 4,
            boxShadow: 3,
            top: 0,
        }}>
            <CardContent>
                <Box marginBottom={3}>
                    <Typography variant="h3" fontSize={14} fontWeight="bold" marginBottom={2}>
                        Tentukan Waktu Santap
                    </Typography>
                    <LocalizationProvider dateAdapter={AdapterMoment}>
                        <DateTimePicker
                            zone
                            label="Waktu Santap"
                            value={mealDate}
                            onChange={setMealDate}
                            renderInput={params => <TextField {...params} fullWidth />}
                            minDate={moment().add(1, 'day')}
                            maxDate={moment().add(1, 'year')}
                            ampm={false}
                        />
                    </LocalizationProvider>
                </Box>
                <Stack justifyContent="space-between">
                    <Typography variant="h3" fontSize={14} fontWeight="bold">
                        Total Pembayaran
                    </Typography>
                    <Typography variant="body1" fontSize={20} fontWeight="bold">
                        {formatIDR(data.totalPrice)}
                    </Typography>
                </Stack>
            </CardContent>
            <CardActions>
                <Button
                    onClick={() => navigate('/cart/payment')}
                    variant="contained"
                    disabled={!data.usedBank}
                    fullWidth
                    sx={{
                        borderRadius: 4,
                    }}
                >
                    Konfirmasi
                </Button>
            </CardActions>
        </Card>
    )
}

export default CheckoutConfirmation