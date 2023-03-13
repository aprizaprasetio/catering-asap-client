import React from 'react'
import { Divider, Stack, Typography, Box, Skeleton } from '@mui/material'
import DynamicNavbar from 'components/organisms/DynamicNavbar'
import CenterLayout from 'components/templates/CenterLayout'
import { formatIDR } from 'commands/application/priceCommand'
import OrderInvoiceTable from 'components/organisms/OrderInvoiceTable'
import StatusStepper from 'components/molecules/StatusStepper'
import { useOrderUser } from 'api/hooks/catalogUserHook'

const SkeletonOrder = (
  <>
    <Stack spacing={1}>
      <Skeleton width={100} height={25} variant="rounded" />
      <Skeleton height={60} variant="rounded" />
    </Stack>
    <Stack spacing={1}>
      <Skeleton width={120} height={25} variant="rounded" />
      <Skeleton width="70%" height={20} variant="rounded" />
      <Skeleton width="65%" height={20} variant="rounded" />
      <Skeleton width="55%" height={20} variant="rounded" />
      <Skeleton width="60%" height={20} variant="rounded" />
    </Stack>
    <Stack spacing={1}>
      <Skeleton width={120} height={25} variant="rounded" />
      <Skeleton width={150} height={25} variant="rounded" />
    </Stack>
    <Stack spacing={1}>
      <Skeleton width={150} height={25} variant="rounded" />
      <Skeleton width={180} height={25} variant="rounded" />
      <Skeleton width={300} height={25} variant="rounded" />
    </Stack>
  </>
)

const UserOrderDetail = () => {
  const { data, isFetchedAfterMount } = useOrderUser()

  return (
    <>
      <DynamicNavbar href={-1}>Pesanan</DynamicNavbar>
      <CenterLayout>
        <Stack spacing={3} divider={<Divider />}>
          {!isFetchedAfterMount ? SkeletonOrder : (
            <>
              <Box>
                <Typography variant="h3" fontSize={18} fontWeight="bold" marginBottom={3}>
                  Status
                </Typography>
                <StatusStepper currentStatus={data.status} />
              </Box>
              <Box>
                <Typography variant="h3" fontSize={18} fontWeight="bold">
                  Daftar Pesanan
                </Typography>
                <OrderInvoiceTable dataRow={data.orders} />
              </Box>
              <Box>
                <Typography variant="h3" fontSize={18} fontWeight="bold">
                  Daftar Pesanan
                </Typography>
                <OrderInvoiceTable dataRow={data.orders} />
              </Box>
              <Box>
                <Typography fontSize={16} fontWeight="bold">Total Pembayaran</Typography>
                <Typography variant="body1">{formatIDR(data.totalPriceOrdered)}</Typography>
              </Box>
              <Box>
                <Typography fontSize={16} fontWeight="bold">Rekening Bank</Typography>
                <Typography variant="body1" textTransform="uppercase" letterSpacing={3}>
                  {data.usedBank.bankName} {data.usedBank.bankNumber}<br />Atas Nama {data.usedBank.name}
                </Typography>
              </Box>
            </>
          )}
        </Stack>
      </CenterLayout>
    </>
  )
}

export default UserOrderDetail