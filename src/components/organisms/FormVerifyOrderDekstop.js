import { Box, Card, Typography } from '@mui/material'
import React from 'react'
import FormItemOrderVerifyManagement from './FormItemOrderVerifyManagement'
import CardItemVerifyOrder from 'components/molecules/CardItemVerifyOrder'
import { grey } from '@mui/material/colors'
import FormOrderDataDekstop from './FormOrderDataDekstop'
import CardItemVerifyDekstop from 'components/molecules/CardItemVerifyDekstop'
import { formatIDR } from 'commands/application/priceCommand'
import FormOrderVerifyDekstopWrapper from './FormOrderVerifyDekstopWrapper'
import { useOrderListMenu, useOrderListWaiting } from 'api/hooks/ordersManagementHook'

const FormVerifyOrderDekstop = ({ result, totalPriceOrdered }) => {
    const orderListMenu = useOrderListMenu()
    const display = {
        xs: 'none',
        md: 'block',
    }

    return (
        <Box display={display}>
            <Card sx={{
                boxShadow: 5,
                display: 'flex',
                borderRadius: 3,
                position: 'relative',
                backgroundColor: grey[100]
            }}>
                <Card sx={{ 
                    // width: 600, 
                    padding: 4, 
                    borderRadius: 3 
                    }}>
                    <Typography sx={{ fontSize: 23, fontWeight: 'bold' }}>List Pesanan</Typography>
                    <Box sx={{ 
                        marginTop: 1, 
                        overflow: 'auto', 
                        height: 600
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
                        padding: 2 
                        }}>
                        <Box sx={{ marginLeft: 2, marginTop: 4 }}>
                            <Typography sx={{ fontSize: 24 }}>Total</Typography>
                            <Typography sx={{ fontWeight: 'bold', fontSize: 36 }}>{formatIDR(totalPriceOrdered)}</Typography>
                        </Box>
                    </Card>
                </Card>
                <FormOrderDataDekstop {...result} />
            </Card>
        </Box>
    )
}

export default FormVerifyOrderDekstop