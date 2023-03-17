import React from 'react'
import { TableCell, Collapse, TextField, Typography, Box } from "@mui/material"

const FoodDrinkTableCollapsible = ({ openEdit, openCollapse, config }) => {
    return (
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
            <Collapse in={openCollapse} timeout="auto" unmountOnExit>
                {
                    openEdit ?
                        (<TextField size='small' margin='dense' multiline rows={2} fullWidth {...config} />)
                        :
                        <Box>
                            <Typography paddingTop={2} fontWeight="bold">Deskripsi</Typography>
                            <Typography paddingBottom={2} noWrap>{config.value}</Typography>
                        </Box>
                }
            </Collapse>
        </TableCell>
    )
}

export default FoodDrinkTableCollapsible