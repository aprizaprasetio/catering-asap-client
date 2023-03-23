import { Delete, Edit } from '@mui/icons-material'
import { Box, Button, IconButton, TableCell, TableRow, Typography } from '@mui/material'
import { useDeleteBanner, useFetchBanner, useFetchBannerById } from 'api/hooks/bannerHook'
import { useTrigger } from 'commands/builders/commonBuilder'
import useBannerStore from 'factory/store/useBannerStore'
import React from 'react'
import { Link } from 'react-router-dom'
import AdminBannerImage from './AdminBannerImage'
import PopUp from './PopUp'

const AdminBannerRow = ({ id, subject, link, imagePath, setOpenPopup }) => {
    const { setIdBanner, idBanner } = useBannerStore()
    const query = useFetchBanner()
    const mutation = useDeleteBanner()
    const [openPopup, setPopup] = useTrigger()
    const deleteOnPopup = () => mutation.mutate(id, {
        onSuccess: () => query.refetch().then(setPopup)
    })

    // React.useEffect(() => {
    //     console.log(idBanner)
    // }, [idBanner])


    return (
        <>
            <TableRow
                key={id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell component="th">{id}</TableCell>
                <TableCell component={Link} to={link}>
                    <AdminBannerImage imagePath={imagePath} subject={subject} />
                </TableCell>
                <TableCell component={Link} to={link} align='center'>{link}</TableCell>
                <TableCell align='center'>
                    {/* <IconButton onClick={setOpenPopup}>
                        <Edit />
                    </IconButton> */}
                    <IconButton onClick={setPopup}>
                        <Delete />
                    </IconButton>
                </TableCell>
            </TableRow>

            <PopUp openPopup={openPopup} setOpenPopup={setPopup}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 3
                }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', gap: 2 }}>
                        <Typography sx={{ fontWeight: 'bold' }}>PERHATIAN!!!</Typography>
                        <Typography>Apakah anda yakin ingin menghapus iklan ini?</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 3 }}>
                        <Button sx={{ flex: 1 }} variant="contained" onClick={deleteOnPopup} >Iya</Button>
                        <Button sx={{ flex: 1 }} variant="outlined" color='error' onClick={setPopup}>Tidak</Button>
                    </Box>
                </Box>
            </PopUp>
        </>
    )
}

export default AdminBannerRow