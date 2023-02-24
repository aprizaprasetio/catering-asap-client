import React from 'react'
import ReactApexChart from 'react-apexcharts'
import { Box } from '@mui/material'

const Graphic = ({display, height}) => {
    const series = [{
        name: 'keuntungan',
        data: [31, 40, 28, 51, 42, 109, 100]
    }, {
        name: 'kerugian',
        data: [11, 32, 45, 32, 34, 52, 41]
    }]

    const options = {
        chart: {
            height: {height},
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
            categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
        },
        tooltip: {
            x: {
                format: 'dd/MM/yy HH:mm'
            },
        },
    }

    return (
        <Box display={display}>
            <ReactApexChart options={options} series={series} type="area" height={280} />
        </Box>
    )
}

export default Graphic