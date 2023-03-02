import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import moment from 'moment'
import { Typography, Box, TextField, Stack, Card, CardContent, CardActions, Button } from '@mui/material'
import { DateTimePicker } from '@mui/x-date-pickers'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { useCartCheckout } from 'api/hooks/cartHook'
import { formatIDR } from 'commands/application/priceCommand'

const CheckoutConfirmation = () => {
    const { data } = useCartCheckout()
    const [date, setDate] = React.useState(moment().add(1, 'day'))

    const navigate = useNavigate()

    const dateHandler = newValue => setDate(newValue)

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
                            value={date}
                            onChange={dateHandler}
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
                <Button onClick={() => navigate('/cart/payment')} variant="contained" fullWidth sx={{
                    borderRadius: 4,
                }}>
                    Konfirmasi
                </Button>
            </CardActions>
        </Card>
    )
}

export default CheckoutConfirmation