import { TableHead, TableRow, TableCell } from '@mui/material'

function FoodDrinkTableHeader(props) {
    return (
        <TableHead>
            <TableRow>
                <TableCell sx={{ textAlign: 'center' }} align="left">No</TableCell>
                <TableCell sx={{ textAlign: 'center' }} align="justify">Name</TableCell>
                <TableCell sx={{ textAlign: 'center' }} align="justify">Description</TableCell>
                <TableCell sx={{ textAlign: 'center' }} align="left">Price</TableCell>
                <TableCell sx={{ textAlign: 'center' }} align="left">Min Order</TableCell>
                <TableCell sx={{ textAlign: 'center' }} align="center">Reaction</TableCell>
            </TableRow>
            {props.Header}
        </TableHead>
    )
}
export default FoodDrinkTableHeader