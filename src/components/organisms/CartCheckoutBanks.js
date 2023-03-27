import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Box, Typography, Select, MenuItem, Skeleton, Link } from '@mui/material'
import { useBankChoose, useBankList } from 'api/hooks/bankHook'

const HelperTextBank = (
    <Box>
        <Typography variant="h3" fontSize={16} fontWeight="bold" marginBottom={1}>
            Rekening Bank
        </Typography>
        <Typography fontSize={14}>
            Belum ada rekening bank yang terdaftar!
        </Typography>
        <Link component={RouterLink} to="/profile/bank" underline="none" variant="text" sx={{
            borderRadius: 4,
        }}>
            Daftarkan rekening bank
        </Link>
    </Box>
)

const CartCheckoutBanks = () => {
    const [choosenBank, setChoosenBank] = React.useState('')
    const { data: bankList, isFetchedAfterMount, remove } = useBankList()
    const { mutate: chooseMutate, isLoading } = useBankChoose()

    const chooseBankHandler = Event => chooseMutate(Event.target.value)

    const getChoosenBankId = () => (
        bankList?.data?.find(item => item.isChoosen)?.id
    )

    React.useEffect(() => {
        if (!bankList?.data.length) return
        setChoosenBank(getChoosenBankId())

        return remove
    }, [bankList])

    if ((!bankList?.data.length) && isFetchedAfterMount)
        return HelperTextBank

    return (
        <Box>
            {bankList ? (
                <Select
                    value={choosenBank}
                    onChange={chooseBankHandler}
                    disabled={isLoading}
                    fullWidth
                    componentProps={{
                        sx: {
                            padding: 1,
                            borderRadius: 4,
                        },
                    }}
                    sx={{
                        height: 60,
                        borderRadius: 4,
                    }}
                >
                    {bankList?.data?.map(item => (
                        <MenuItem key={item.id} value={item.id}>
                            <Typography fontFamily="monospace">
                                {item.bankNumber}
                            </Typography>
                            <Typography fontWeight="bold">
                                {item.bankName}
                            </Typography>
                        </MenuItem>
                    ))}
                </Select>
            ) : (
                <Skeleton
                    variant="rounded"
                    sx={{
                        width: '100%',
                        height: 60,
                        borderRadius: 4,
                    }}
                />
            )}
        </Box>
    )
}

export default CartCheckoutBanks