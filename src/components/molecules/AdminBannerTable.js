import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { useFetchBanner } from 'api/hooks/bannerHook'
import React from 'react'
import AdminBannerRow from './AdminBannerRow'

const AdminBannerTable = ({ setOpenPopup }) => {
    const { data } = useFetchBanner()

    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell>Subjek/Gambar</TableCell>
                            <TableCell align='center'>Link</TableCell>
                            <TableCell align='center'>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data?.map(row => <AdminBannerRow key={row.id} {...row} setOpenPopup={setOpenPopup} />)}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default AdminBannerTable