import React from 'react'
import { Box, Button, IconButton, Paper, Collapse, Icon, InputAdornment, TextField, Typography, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, InputBase } from '@mui/material'
import CenterLayout from 'components/templates/CenterLayout'
import AdminNavbar from 'components/organisms/AdminNavbar'
import NumberCard from 'components/organisms/NumberCard'
import AdminWelcome from 'components/organisms/AdminWelcome'
import { useStale } from 'commands/builders/hookBuilder'

// Test Development
import AdminScretchHeader from 'components/organisms/AdminScretchHeader'
import FoodDrinkFormRow from 'components/organisms/FoodDrinkFormRow'
import { useTrigger } from 'commands/builders/commonBuilder'
import DynamicNavbar from 'components/organisms/DynamicNavbar'

const AdminHome = () => {
    const [user] = useStale('user')
    const [open, openTrigger] = useTrigger()

    return (
        <>
            <AdminNavbar />
            <CenterLayout admin>
                <TableContainer sx={{ marginTop: 5, boxShadow: 2, }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    Makanan & Minuman
                                </TableCell>
                                <TableCell width={200}>
                                    Harga
                                </TableCell>
                                <TableCell width={100}>
                                    Minimal Pemesanan
                                </TableCell>
                                <TableCell>
                                    Tanggapan
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <Collapse in={open} sx={{ width: '100%' }}>
                                <FoodDrinkFormRow />
                            </Collapse>
                            <TableRow>
                                <TableCell>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, minus.
                                </TableCell>
                                <TableCell>
                                    Rp. xxx.xxx,xx
                                </TableCell>
                                <TableCell>
                                    XX
                                </TableCell>
                                <TableCell>
                                    xxXXxx
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                {/* <AdminWelcome
                    header={user?.name ?? 'No Name'}
                    message="Selamat datang"
                    body="Kelola data katering lewat website dimana pun anda berada." />
                <Box display="flex" gap={1}>
                    <NumberCard />
                    <NumberCard />
                </Box> */}
            </CenterLayout>
        </>
    )
}

export default AdminHome