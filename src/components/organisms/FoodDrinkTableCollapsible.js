import { Typography, Table, TableBody, TableRow, TableHead, TableCell, Box } from "@mui/material"
import React from 'react'

function FoodDrinkTableCollapsible({ Deskripsi }) {
    return (
        <TableRow>
            <Box sx={{ margin: 1 }}>
                <Typography sx={{ fontWeight: 'bold', fontSize: 15 }} gutterBottom component="div">
                    Description
                </Typography>
                <Typography sx={{ fontSize: 12 }} gutterBottom component="div">
                    {Deskripsi}
                </Typography>

            </Box >
        </TableRow>


    )
}

export default FoodDrinkTableCollapsible