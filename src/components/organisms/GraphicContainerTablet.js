import React from 'react'
import CardItemGraphicTablet from 'components/molecules/CardItemGraphicTablet'
import Graphic from 'components/molecules/Graphic'
import { Box, Card, Typography } from '@mui/material'
import CardItemUserGraphic from 'components/molecules/CardItemUserGraphic'
import GraphicWrapper from './GraphicWrapper'
import { useOrderListUserGraph } from 'api/hooks/ordersManagementHook'
import AdminGraphFilterMonth from 'components/molecules/AdminGraphFilterMonth'

const GraphicContainerTablet = () => {
    const { data } = useOrderListUserGraph()
    const display = {
        xs: 'none',
        md: 'block',
    }

    return (
        <Box display={display}>
            <CardItemGraphicTablet />
            <Box sx={{
                display: 'flex',
                gap: 3,
                marginTop: 3,
            }}>
                <Card sx={{
                    flex: 1,
                    boxShadow: 5,
                    borderRadius: 3,
                    padding: 3
                }}>
                    <Box sx={{ width: 200}}>
                        <AdminGraphFilterMonth />
                    </Box>
                    <Graphic height={100} />
                </Card>
                <Card sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    maxWidth: 400,
                    borderRadius: 3,
                    padding: 3,
                    boxShadow: 5,
                }}>
                    <Typography sx={{ fontWeight: 'bold', marginBottom: 2 }}>History Penjualan</Typography>
                    <Box sx={{
                        overflow: 'auto',
                        padding: 1,
                        height: 520,
                    }}>
                        <GraphicWrapper>
                            {
                                data?.pages?.map((listItem, index) => {
                                    return (
                                        <React.Fragment key={index}>
                                            {
                                                listItem.map(item => <CardItemUserGraphic key={item.id} {...item} />)
                                            }
                                        </React.Fragment>
                                    )
                                })
                            }
                        </GraphicWrapper>
                    </Box>
                </Card>
            </Box>
        </Box>
    )
}

export default GraphicContainerTablet