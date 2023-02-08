import { TableRow, TableCell, Table, makeStyles, Grid, List, Stack } from '@mui/material'
import { display, grid } from '@mui/system'
import { MoodRounded, SentimentNeutralRounded, MoodBadRounded } from '@mui/icons-material'
import ReactListItem from 'components/molecules/ReactListItem'


function FoodDrinkTableItem() {
    const nilai = {
        like: 99,
        ok: 99,
        dislike: 99,
    }

    const addStyle = {
        spacing: 0,
        widht: 400
    }

    return (
        <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell width={80} sx={{ textAlign: 'center' }} align='justify' component='th' scope='row'>
                123
            </TableCell>
            <TableCell width={150} sx={{ textAlign: 'center' }} align='justify' component='th' scope='row' >Sambal Matah.</TableCell>
            <TableCell width={400} align='justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eveniet magni incidunt repellendus sapiente impedit at deserunt qui dicta quidem.</TableCell>
            <TableCell widht={10} sx={{ textAlign: 'center' }} align='justify'>60.000</TableCell>
            <TableCell widht={10} sx={{ textAlign: 'center' }} align='left'>20</TableCell>
            <TableCell>
                <List component={Stack} direction="row" disablePadding>
                    <ReactListItem icon={<MoodRounded />} content={nilai.like} />
                    <ReactListItem icon={<SentimentNeutralRounded />} content={nilai.ok} />
                    <ReactListItem icon={<MoodBadRounded />} content={nilai.dislike} />
                </List>
            </TableCell>
        </TableRow>
    )
}

export default FoodDrinkTableItem