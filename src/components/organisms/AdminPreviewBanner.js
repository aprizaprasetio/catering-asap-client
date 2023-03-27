import { BurstMode, Settings } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import { useTrigger } from 'commands/builders/commonBuilder'
import AdminBannerButtonAdd from 'components/molecules/AdminBannerButtonAdd'
import AdminBannerTable from 'components/molecules/AdminBannerTable'
import PopUp from 'components/molecules/PopUp'
import React from 'react'
import AdminFormBanner from './AdminFormBanner'
import FoodDrinkPromotion from './FoodDrinkPromotion'

const AdminPreviewBanner = () => {
    const [openPopup, setOpenPopup] = useTrigger()

    return (
        <>
            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                <BurstMode sx={{ fontSize: 30 }} />
                <Typography sx={{ fontWeight: 'medium', fontSize: 26 }}>Tampilan</Typography>
            </Box>
            <FoodDrinkPromotion />
            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                <Settings />
                <Typography sx={{ fontWeight: 'medium', fontSize: 26 }}>Settings Banner</Typography>
            </Box>
            <AdminBannerButtonAdd setOpenPopup={setOpenPopup} />
            <AdminBannerTable setOpenPopup={setOpenPopup} />

            <PopUp openPopup={openPopup} setOpenPopup={setOpenPopup}>
                <AdminFormBanner setOpenPopup={setOpenPopup} />
            </PopUp>
        </>
    )
}

export default AdminPreviewBanner