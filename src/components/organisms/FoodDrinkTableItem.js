import {
    TableRow, TableCell,
    List, Stack, Collapse, Grid, Button, IconButton

} from '@mui/material'
import * as React from 'react';
import { MoodRounded, SentimentNeutralRounded, MoodBadRounded } from '@mui/icons-material'
import ReactListItem from 'components/molecules/ReactListItem'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import FoodDrinkTableCollapsible from './FoodDrinkTableCollapsible';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


function FoodDrinkTableItem() {
    const nilai = {
        like: 99,
        ok: 99,
        dislike: 99,
    }

    const Buttonstyle = {
        sx: {
            color: 'eror'
        }
    }

    const [open, setOpen] = React.useState(false)

    return (
        <React.Fragment>

            <TableRow >
                <TableCell width={1} sx={{ '& > *': { borderBottom: 'unset' } }}>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}

                    </IconButton>
                </TableCell>

                <TableCell width={1} sx={{ textAlign: 'center' }} component="th" scope="row">1</TableCell>
                <TableCell width={250} sx={{ textAlign: 'center' }} component="th" scope="row" align="center">
                    Sambal Matah
                </TableCell>
                <TableCell widht={10} sx={{ textAlign: 'center' }} component="th" scope="row" align="center">
                    60.000
                </TableCell>
                <TableCell widht={2} sx={{ textAlign: 'center' }} component="th" scope="row" align="center">
                    20
                </TableCell>
                <TableCell width={200} align='center' component="th" scope="row">
                    <List component={Stack} direction="row" disablePadding>
                        <ReactListItem icon={<MoodRounded />} content={nilai.like} />
                        <ReactListItem icon={<SentimentNeutralRounded />} content={nilai.ok} />
                        <ReactListItem icon={<MoodBadRounded />} content={nilai.dislike} />
                    </List>
                </TableCell>
                <TableCell widht={200} sx={{ alignItems: 'center' }} component="th" scope="row" align="right">
                    <List component={Stack} direction="row" disablePadding>
                        <IconButton>
                            <EditIcon />
                        </IconButton>
                        <IconButton color='error'>
                            <DeleteIcon />
                        </IconButton>
                    </List>
                </TableCell>
            </TableRow>
            <TableRow >
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <FoodDrinkTableCollapsible />
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    )
}
export default FoodDrinkTableItem