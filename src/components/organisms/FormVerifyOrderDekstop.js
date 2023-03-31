import React from 'react'
import { Box, Typography, Grid, Skeleton, Stack } from '@mui/material'
import FormOrderDataDekstop from './FormOrderDataDekstop'
import CardItemVerifyDekstop from 'components/molecules/CardItemVerifyDekstop'
import { formatIDR } from 'commands/application/priceCommand'
import FormOrderVerifyDekstopWrapper from './FormOrderVerifyDekstopWrapper'
import { useOrderList, useOrderListMenu } from 'api/hooks/ordersManagementHook'

const FormVerifyOrderDekstop = ({ }) => {
    const orderListMenu = useOrderListMenu()
    const { data, isFetching } = useOrderList()

    const display = {
        xs: 'none',
        md: 'flex',
    }

    const SkeletonBox = (
        <Grid item xs={12}>
            <Skeleton
                variant="rounded"
                height={120}
            />
        </Grid>
    )

    return (
        <Box display={display} alignItems="flex-start" gap={3}>
            <Stack spacing={3} flex={3} padding={3} boxShadow={3} borderRadius={4}>
                <Box>
                    <Typography fontSize={16} fontWeight="bold" paddingBottom={3}>Daftar Pesanan</Typography>
                    <FormOrderVerifyDekstopWrapper>
                        {isFetching ? (
                            [...Array(3)].map((item, index) => <React.Fragment key={index}>{SkeletonBox}</React.Fragment>)
                        ) : (
                            orderListMenu.data?.map(item => <CardItemVerifyDekstop key={item.id} {...item} />)
                        )}
                    </FormOrderVerifyDekstopWrapper>
                </Box>
                <Stack spacing={1} direction="row" alignItems="center">
                    <Typography fontSize={16} fontWeight="bold">Total Pembayaran</Typography>
                    {isFetching ? (
                        <Skeleton variant="text" width={300} sx={{ fontSize: 28 }} />
                    ) : (
                        <Typography fontSize={26} fontWeight="bold">{formatIDR(data?.totalPriceOrdered)}</Typography>
                    )}
                </Stack>
            </Stack>
            <Box flex={1} display="flex" boxShadow={3} borderRadius={4}>
                <FormOrderDataDekstop {...data} />
            </Box>
        </Box>
    )
}

export default FormVerifyOrderDekstop