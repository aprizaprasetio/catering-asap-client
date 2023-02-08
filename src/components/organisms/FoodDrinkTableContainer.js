import * as React from 'react'
import { Table, TableBody, Paper, TableContainer, TableHead } from '@mui/material'


function FoodDrinkTableContainer({ children, header }) {
    return (
        <TableContainer component={Paper} sx={{
            borderRadius: 3,
        }} >
            <Table sx={{
                minWidth: 650
            }}>

                <TableHead sx={{
                    fontWeight: 'bold',
                    // backgroundColor: theme.palette.primary.dark,
                    // color: theme.palette.getContrastText(theme.palette.primary.dark)
                }}>
                </TableHead>
                {header}
                <TableBody>
                    {children}
                </TableBody>
            </Table>
        </TableContainer>
    )
}


export default FoodDrinkTableContainer