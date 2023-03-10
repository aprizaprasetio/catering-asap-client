import React from 'react'
import { Collapse, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, } from '@mui/material'
import CenterLayout from 'components/templates/CenterLayout'
import AdminNavbar from 'components/organisms/AdminNavbar'
import { useStale } from 'commands/builders/hookBuilder'
import FoodDrinkFormRow from 'components/organisms/FoodDrinkFormRow'
import { useTrigger } from 'commands/builders/commonBuilder'

const AdminHome = () => {
    const [user] = useStale('user')
    const [open] = useTrigger()

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
            </CenterLayout>
        </>
    )
}

export default AdminHome