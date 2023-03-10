import React from 'react'
import CardItemGraphic from 'components/molecules/CardItemGraphic'
import { Box, Typography } from '@mui/material'
import CardItemUserGraphic from 'components/molecules/CardItemUserGraphic'
import GraphicWrapper from './GraphicWrapper'
import Graphic from 'components/molecules/Graphic'
import { useOrderListUserGraph } from 'api/hooks/ordersManagementHook'

const GraphicContainer = () => {
    const { data, isFetching, isLoading, hasNextPage, fetchNextPage } = useOrderListUserGraph()

    const display = {
        xs: 'block',
        md: 'none',
    }
    return (
        <Box display={display}>
            <Graphic height={350} />
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 3
            }}>
                <Box sx={{
                    display: 'flex',
                    gap: 1
                }}
                >
                    <CardItemGraphic />
                </Box>
                <Typography variant='subtitle1' sx={{ fontWeight: 500 }}>History Penjualan:</Typography>
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
        </Box>
    )
}

export default GraphicContainer