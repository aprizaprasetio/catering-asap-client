import React from 'react'
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import { formatIDR } from 'commands/application/priceCommand'
import { useOrderListMenu } from 'api/hooks/ordersManagementHook'
import { grey } from '@mui/material/colors'

const CardItemVerifyOrder = () => {
    const { data, isFetching, isLoading, hasNextPage, fetchNextPage } = useOrderListMenu()

    return (
        <Card sx={{
            borderRadius: 5,
            padding: 2
        }}>
            <Typography sx={{ fontWeight: 'bold', paddingBottom: 1 }}>List Makanan</Typography>
            {
                data?.map((listItem, index) => {
                    return (
                        <React.Fragment key={index}>
                            {
                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'space-around',
                                }}>
                                    <Typography sx={{ fontSize: 12, width: 100 }}>{listItem.foodDrinkName}</Typography>
                                    <Typography sx={{ fontSize: 12 }}>{formatIDR(listItem.price)}</Typography>
                                    <Typography sx={{ fontSize: 12 }}>{listItem.quantity}pcs</Typography>
                                </Box>
                            }
                        </React.Fragment>
                    )
                })
            }

        </Card>
    )
}

export default CardItemVerifyOrder