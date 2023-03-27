import React from 'react'
import { Box, Card, CardContent, CardActions, IconButton, Typography, Button, Chip } from '@mui/material'
import { Edit, Delete, Check } from '@mui/icons-material'
import BankItemProps from 'proptypes/organisms/BankItemProps'

const BankItem = ({ bankName, bankNumber, isChoosen, name, onChoose, onEdit, onRemove }) => {
    return (
        <Card sx={{
            flex: 2,
            borderRadius: 4,
            boxShadow: 3,
        }}>
            <CardContent sx={{
                display: 'flex',
                flexDirection: {
                    xs: 'column',
                    md: 'row',
                },
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
                {isChoosen ? (
                    <Chip
                        icon={<Check />}
                        label="Digunakan"
                        color="success"
                        sx={{
                            textTransform: 'uppercase',
                            fontWeight: 'medium',
                        }}
                    />
                ) : onChoose && (
                    <Button
                        onClick={onChoose}
                        variant="outlined"
                        color="success"
                        size="small"
                        sx={{
                            height: 'fit-content',
                            borderRadius: 6,
                        }}>
                        Gunakan
                    </Button>
                )}
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