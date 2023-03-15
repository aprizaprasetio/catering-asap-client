import React from 'react'
import ReactApexChart from 'react-apexcharts'
import { Box } from '@mui/material'
import { useDataGraph } from 'api/hooks/ordersManagementHook'
import { NorthWest } from '@mui/icons-material'

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
            // categories: ["2023-3-1", "2023-3-2", "2023-3-3", "2023-3-4", "2023-3-5", "2023-3-6", "2023-3-7", "2023-3-8", "2023-3-9", "2023-3-10", "2023-3-11", "2023-3-12"]
            categories: data?.dataOrderTime
        },
        tooltip: {
            x: {
                // format: 'dd/MM/yy',
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