import React from 'react'
import { Card, CardContent, Button, Typography } from '@mui/material'
import { AddBox, AccountBalance } from '@mui/icons-material'

const BankAddButton = ({ onClick }) => {
    return (
        <Card sx={{
            position: 'relative',
            borderRadius: 4,
            boxShadow: 3,
        }}
            component={Button}
            onClick={onClick}
        >
            <CardContent sx={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: 10,
                opacity: .66,
            }}>
                <Typography
                    variant="h4"
                    sx={{
                        fontSize: 20,
                        fontWeight: 'bold',
                    }}
                >
                    Tambah Bank
                </Typography>
                <AccountBalance sx={{
                    display: {
                        xs: 'none',
                        lg: 'block',
                    },
                    position: 'absolute',
                    left: 10,
                    bottom: 50,
                    opacity: .2,
                    fontSize: 100,
                }} />
                <AddBox sx={{
                    fontSize: 40,
                }} />
            </CardContent >
        </Card>
    )
}

export default BankAddButton