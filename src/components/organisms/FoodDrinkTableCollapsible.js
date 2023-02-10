import { Typography, Table, TableBody, TableRow, TableHead, TableCell, Box } from "@mui/material"
import React from 'react'

function FoodDrinkTableCollapsible() {
    return (
        <TableRow>
            <Box sx={{ margin: 1 }}>
                <Typography sx={{ fontWeight: 'bold', fontSize: 15 }} gutterBottom component="div">
                    Description
                </Typography>
                <Typography sx={{ fontSize: 12 }} gutterBottom component="div">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A, totam vitae veniam architecto nemo dolore ducimus ratione consequuntur, quaerat excepturi cum quos dignissimos ullam provident dolorum in. Quia, placeat voluptate.
                </Typography>

            </Box >
        </TableRow>


    )
}

export default FoodDrinkTableCollapsible