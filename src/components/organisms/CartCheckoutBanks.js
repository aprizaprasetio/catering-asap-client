import React from 'react'
import { Box, Typography, ToggleButton, ToggleButtonGroup } from '@mui/material'
import { useBankChoose, useBankList } from 'api/hooks/bankHook'

const CartCheckoutBanks = () => {
    const banks = useBankList()
    const { mutate: chooseMutate, isLoading } = useBankChoose()

    const chooseBank = (Event, newValue) => {
        chooseMutate(newValue, {
            onSuccess: banks.refetch,
        })
    }

    const getChoosenBankId = () => (
        banks.data?.data?.find(item => item.isChoosen)?.id
    )

    React.useEffect(() => banks.remove, [])

    return (
        <Box>
            <Typography variant="h3" sx={{
                fontSize: 18,
                fontWeight: 'bold',
                marginBottom: 1,
            }}>
                Pilih Rekening Bank
            </Typography>
            <ToggleButtonGroup
                value={getChoosenBankId()}
                onChange={chooseBank}
                disabled={isLoading}
                exclusive
                sx={{
                    display: 'flex',
                }}
            >
                {banks?.data?.data?.map(item => (
                    <ToggleButton key={item.id} value={item.id} fullWidth sx={{
                        flex: 1,
                        borderRadius: 4,
                    }}>
                        <Box sx={{
                            display: 'gap',
                        }}>
                            <Typography fontFamily="monospace">
                                {item.bankNumber}
                            </Typography>
                            <Typography fontWeight="bold">
                                {item.bankName}
                            </Typography>
                        </Box>
                    </ToggleButton>
                ))}
            </ToggleButtonGroup>
        </Box>
    )
}

export default CartCheckoutBanks