import { TableHead, TableRow, TableCell, Box, Checkbox, Button } from '@mui/material'
import { Delete } from '@mui/icons-material'

function FoodDrinkTableHeader() {

    return (
        <TableHead>
            <TableRow>
                <TableCell />
                <TableCell>No</TableCell>
                <TableCell align='center'>Foto Profile</TableCell>
                <TableCell align="center">Nama</TableCell>
                <TableCell align="center">Harga</TableCell>
                <TableCell align="center">Min. Pemesanan</TableCell>
                <TableCell width={200} align='right' sx={{ textAlign: 'center' }} >Ulasan</TableCell>
                <TableCell align="right" sx={{ marginRight: 10 }}>
                    <Button
                        size="small"
                        color="error"
                        startIcon={<Delete />}
                        align='right'
                        sx={{
                            paddingX: 4,
                            borderRadius: 6,
                        }} >
                        Hapus Terpilih
                    </Button>
                    <Checkbox />
                </TableCell>

                {/* <TableCell widths */}
                {/* <TableCell /> */}
            </TableRow>
        </TableHead>
    )
}
export default FoodDrinkTableHeader