import React from 'react'
import { TableCell, FormControl, TextField, Typography } from '@mui/material'
import { formatIDR } from 'commands/application/priceCommand'

const FoodDrinkTableCell = ({ open, config }) => {
    return (
        <TableCell width="fit-content" sx={{ textAlign: 'center' }} component="th" scope="row">
            {
                open ?
                    <FormControl>
                        <TextField
                            size='small'
                            autoComplete={config.name}
                            inputProps={{
                                sx: {
                                    display: 'flex',
                                    width: `${config.value.length}ch`,
                                    height: '100%',
                                },
                            }}
                            FormHelperTextProps={{
                                sx: {
                                    color: 'error.main',
                                }
                            }}
                            {...config}
                        />
                    </FormControl>
                    : <Typography width="100%">
                        {
                            (config.label === 'Harga') ?
                                formatIDR(config.value) : config.value
                        }
                    </Typography>
            }
        </TableCell>
    )
}

export default FoodDrinkTableCell