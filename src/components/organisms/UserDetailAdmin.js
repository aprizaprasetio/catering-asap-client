import React from 'react'
import { PaymentsOutlined, ShoppingBagOutlined } from '@mui/icons-material'
import { Avatar, Paper, Typography, Skeleton, Stack } from '@mui/material'
import { Box } from '@mui/material'
import { formatIDR } from 'commands/application/priceCommand'
import { useUserData } from 'api/hooks/usersManagementHook'
import CardItemUserDetail from 'components/molecules/CardItemUserDetail'
import OrderManagementWrapper from './OrderManagementWrapper'
import { useDataOrderUser } from 'api/hooks/ordersManagementHook'
import CardItemBankUserDetialAdmin from 'components/molecules/CardItemBankUserDetialAdmin'
import CardItemDoubleBankUserDetailAdmin from 'components/molecules/CardItemDoubleBankUserDetailAdmin'

const SmallSkeleton = (
    <Stack spacing={1}>
        <Skeleton variant="text" width={100} />
        <Skeleton variant="text" width={40} />
    </Stack>
)

const UserDetailAdmin = () => {
    const { data, isFetching } = useUserData()
    const query = useDataOrderUser()
    const display = {
        xs: 'none',
        md: 'block'
    }
    const theme = {
        md: 14,
        lg: 20
    }

    const profileResponsive = {
        md: 120,
        lg: 160
    }
    const fontSizeResponsive = {
        md: 12,
        lg: 16
    }
    const gapResponsive = {
        md: 1,
        lg: 3
    }

    return (
        <Box sx={{ display: display }}>
            <Box sx={{
                display: 'flex',
                boxShadow: 3,
                borderRadius: 3,
                height: 650,
                overflow: 'auto'
            }}>
                <Box sx={{
                    display: 'flex',
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    boxShadow: 3,
                }}>
                    {isFetching ? (
                        <Skeleton width={150} height={150} variant="circular" sx={{ marginBottom: 1 }} />
                    ) : (
                        <Avatar
                            alt="Remy Sharp"
                            src={data?.avatar}
                            sx={{
                                width: profileResponsive,
                                height: profileResponsive,
                            }}
                        />
                    )}

                    {!isFetching && (
                        <>
                            <Typography sx={{ fontWeight: 'bold', fontSize: theme }}>{data?.name}</Typography>
                            <Typography>{data?.gender ? 'Wanita' : 'Pria'}</Typography>
                        </>
                    )}
                    {isFetching ? SmallSkeleton : (
                        <Box sx={{
                            // marginY: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Typography>{data?.email}</Typography>
                            <Typography>{data?.phone}</Typography>
                        </Box>
                    )}
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                        {
                            data?.bankAccounts.length == 2
                                ? <CardItemDoubleBankUserDetailAdmin {...data} />
                                : data?.bankAccounts.map(item => <CardItemBankUserDetialAdmin key={item.id} {...item} />)
                        }
                    </Box>
                </Box>
                <Box sx={{ backgroundColor: '#E9EEFF', flex: 2, paddingX: 10, paddingY: 3, gap: 3, display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ fontWeight: 'bold', fontSize: 20 }}>History Pesanan</Typography>
                    <Box sx={{ display: 'flex', gap: 3 }}>
                        <Paper sx={{ display: 'flex', gap: gapResponsive, paddingY: 3, flex: 1, borderRadius: 3 }}>
                            <ShoppingBagOutlined sx={{ fontSize: 56, marginLeft: gapResponsive }} />
                            {isFetching ? SmallSkeleton : (
                                <Box>
                                    <Typography sx={{ fontWeight: 'bold', fontSize: fontSizeResponsive }}>Total Pesanan</Typography>
                                    <Typography sx={{ fontSize: theme, fontWeight: 'bold' }}>{query?.data?.totalOrdered}</Typography>
                                </Box>
                            )}
                        </Paper>
                        <Paper sx={{ display: 'flex', gap: 4, paddingY: 3, flex: 2, borderRadius: 3 }}>
                            <PaymentsOutlined sx={{ fontSize: 56, marginLeft: 3 }} />
                            {isFetching ? SmallSkeleton : (
                                <Box>
                                    <Typography sx={{ fontWeight: 'bold', fontSize: fontSizeResponsive }}>Total Harga Pesanan</Typography>
                                    <Typography sx={{ fontSize: theme, fontWeight: 'bold' }}>{formatIDR(query?.data?.totalPriceOrdered)}</Typography>
                                </Box>
                            )}
                        </Paper>
                    </Box>
                    <Box sx={{ height: 600, overflow: 'auto', borderRadius: 3, }}>
                        <OrderManagementWrapper>
                            {
                                query?.data?.listData?.map(listItem => <CardItemUserDetail key={listItem.id} {...listItem} />)
                            }
                        </OrderManagementWrapper>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default UserDetailAdmin