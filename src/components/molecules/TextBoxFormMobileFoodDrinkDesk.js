import React from 'react'
import { FormControl, TextField, Typography } from '@mui/material'
import { formatIDR } from 'commands/application/priceCommand'

const TextBoxFormMobileFoodDrinkDesk = ({ open, config }) => {
    return (
        <FormControl>
            <>
                {
                    open ?
                        <TextField
                            autoComplete={config.name}
                            name='description'
                            // label='Nama Makanan'
                            margin='dense'
                            multiline
                            rows={5}
                            fullWidth
                            FormHelperTextProps={{
                                sx: {
                                    color: 'error.main',
                                },
                            }}
                            {...config}
                        />
                        :
                        <Typography variant="body2" fontWeight={500} color="text.secondary" >
                            {
                                (config.label === 'Harga') ?
                                    formatIDR(config.value) : config.value

                            }
                        </Typography>
                }

            </>
        </FormControl>
    )
}

export default TextBoxFormMobileFoodDrinkDesk