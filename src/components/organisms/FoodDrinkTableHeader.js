import { TableHead, TableRow, TableCell, Box } from '@mui/material'

function FoodDrinkTableHeader() {
    return (
        <TableHead>
            <TableRow>
                <TableCell />
                <TableCell>Number</TableCell>
                <TableCell widht={50} align="center">Name</TableCell>
                <TableCell width={50} align="center">Price</TableCell>
                <TableCell width={200} align="center">Minimum Order</TableCell>
                <TableCell widht={200} align='center' sx={{ textAlign: 'center' }} >Reaction</TableCell>
                <TableCell />

            </TableRow>
        </TableHead>
    )
}
export default FoodDrinkTableHeader