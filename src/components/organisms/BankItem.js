import React from 'react'
import { Box, Card, CardContent, CardActions, IconButton, Typography, InputBase } from '@mui/material'
import { CreditCard, Edit, Delete } from '@mui/icons-material'
import BankItemProps from 'proptypes/organisms/BankItemProps'

const BankItem = ({ bankName, bankNumber, name, onEdit, onRemove }) => {
    return (
        <Card sx={{
            borderRadius: 4,
            boxShadow: 3,
        }}>
            <CardContent sx={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: 10,
            }}>
                <Box>
                    <Typography
                        variant="h4"
                        sx={{
                            fontSize: 20,
                            fontFamily: 'monospace',
                            letterSpacing: 6,
                        }}
                    >
                        {bankName}
                    </Typography>
                    <Box>
                        <Typography
                            variant="body1"
                            sx={{
                                fontSize: 30,
                                fontFamily: 'monospace',
                            }}
                        >
                            {bankNumber}
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                fontSize: 20,
                                fontWeight: 'bold',
                                textTransform: 'uppercase',
                            }}
                        >
                            {name}
                        </Typography>
                    </Box>
                </Box>
                <CreditCard sx={{
                    display: {
                        xs: 'none',
                        lg: 'block',
                    },
                    opacity: .33,
                    fontSize: 100,
                }} />
            </CardContent >
            {onEdit && (
                <CardActions sx={{
                    display: 'flex',
                    justifyContent: 'end',
                }}>
                    <IconButton color="primary" onClick={onEdit}>
                        <Edit />
                    </IconButton>
                    <IconButton color="error" onClick={onRemove}>
                        <Delete />
                    </IconButton>
                </CardActions>
            )}
        </Card>
    )
}

BankItem.propTypes = BankItemProps

export default BankItem