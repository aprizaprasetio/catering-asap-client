import { Box, Card, Typography } from '@mui/material'
import React from 'react'
import FormItemOrderVerifyManagement from './FormItemOrderVerifyManagement'
import CardItemVerifyOrder from 'components/molecules/CardItemVerifyOrder'
import { grey } from '@mui/material/colors'
import FormOrderDataDekstop from './FormOrderDataDekstop'
import CardItemVerifyDekstop from 'components/molecules/CardItemVerifyDekstop'
import { formatIDR } from 'commands/application/priceCommand'
import FormOrderVerifyDekstopWrapper from './FormOrderVerifyDekstopWrapper'
import { useOrderList, useOrderListMenu, useOrderListWaiting } from 'api/hooks/ordersManagementHook'

const FormVerifyOrderDekstop = ({ }) => {
    const orderListMenu = useOrderListMenu()
    const { data } = useOrderList()

    const display = {
        xs: 'none',
        md: 'block',
    }

    return (
        <Box display={display}>
            <Box sx={{
                display: 'flex',
                boxShadow: 5,
                borderRadius: 3,
            }}>
                <Card sx={{
                    display: 'flex',
                    borderRadius: 3,
                    position: 'relative',
                    flex: 2,
                }}>
                    <Card sx={{
                        padding: 4,
                        borderRadius: 3,
                        flex: 1
                    }}>
                        <Typography sx={{ fontSize: 18, fontWeight: 'bold' }}>List Pesanan</Typography>
                        <Box sx={{
                            marginTop: 1,
                            overflow: 'auto',
                            height: 600,
                        }}>
                            <FormOrderVerifyDekstopWrapper>
                                {
                                    orderListMenu.data?.map(item => <CardItemVerifyDekstop key={item.id} {...item} />)
                                }
                            </FormOrderVerifyDekstopWrapper>
                        </Box>
                        <Card sx={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            boxShadow: 0,
                            height: 200,
                            padding: 2,
                        }}>
                            <Box sx={{ marginLeft: 2, marginTop: 4, }}>
                                <Typography sx={{ fontSize: 18 }}>Total</Typography>
                                <Typography sx={{ fontWeight: 'bold', fontSize: 28 }}>{formatIDR(data?.totalPriceOrdered)}</Typography>
                            </Box>
                        </Card>
                    </Card>
                </Card>
                <Box sx={{
                    display: 'flex',
                    flex: 1
                }}>
                    <FormOrderDataDekstop {...data} />
                </Box>
            </Box>
        </Box>
    )
}

export default FormVerifyOrderDekstop