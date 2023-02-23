import * as React from 'react'
import { Table, TableBody, Paper, TableContainer, TableHead, } from '@mui/material'


function FoodDrinkTableContainer({ children, header }) {
    return (


        <TableContainer component={Paper} sx={{
            borderRadius: 3,
            display: {
                xs: 'none',
                lg: 'block',
            }

        }} >
            <Table sx={{
                minWidth: 650
            }}>
                <TableHead sx={{
                    fontWeight: 'bold',
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