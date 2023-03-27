import React from 'react'
import ReactApexChart from 'react-apexcharts'
import { Box } from '@mui/material'
import { useDataGraph } from 'api/hooks/ordersManagementHook'

const Graphic = ({ display, height }) => {
    const { data, isLoading } = useDataGraph()

    const series = [{
        name: 'Terjual',
        data: data?.dataTotalOrder
    }]


    const options = {
        chart: {
            height: height,
            type: 'area'
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            type: 'datetime',
            categories: data?.dataOrderTime
        },
        tooltip: {
            x: {
                // format: 'MM/yy/dd '
            },
        },
    }

    return (
        <Box display={display}>
            {
                data?.length !== 0 && <ReactApexChart options={options} series={series} type="area" />
            }
        </Box>
    )
}

export default Graphic