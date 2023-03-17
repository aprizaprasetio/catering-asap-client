import React from 'react'
import { Box, FormControl, List, Stack, TextField, Typography } from '@mui/material'
import { formatIDR } from 'commands/application/priceCommand'
import { Block } from '@mui/icons-material'

const TextBoxFormMobileFoodDrink = ({ open, config }) => {
    return (
        <>
            <FormControl>
                {
                    open ?
                        <TextField
                            autoComplete={config.name}
                            // name='name'
                            size='small'
                            // label='Nama Makanan'
                            margin='dense' fullWidth
                            FormHelperTextProps={{
                                sx: {
                                    color: 'error.main',
                                },
                            }}
                            {...config}
                        />
                        :
                        <Typography variant='subtitle1' sx={{ display: 'block' }} fontWeight={500}>
                            {
                                (config.label === 'Harga') ?
                                    formatIDR(config.value) : config.value

                            }
                        </Typography>
                }
            </FormControl>
        </>
    )
}

export default TextBoxFormMobileFoodDrink