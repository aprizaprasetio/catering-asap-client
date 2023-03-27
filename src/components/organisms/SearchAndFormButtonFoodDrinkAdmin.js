import React from 'react'
import AdminFoodDrinkAddButton from 'components/molecules/AdminFoodDrinkAddButton'
import AdminFoodDrinkFormPopupDesktop from 'components/organisms/AdminFoodDrinkFormPopupDesktop'
import { Box } from '@mui/material'
import { useTrigger } from 'commands/builders/commonBuilder'
import PopUp from 'components/molecules/PopUp'
import SearchBarAdmin from 'components/molecules/SearchBarAdmin'
import AdminFoodDrinkDetailMobile from 'components/pages/AdminFoodDrinkDetailMobile'

const SearchAndFormButtonFoodDrinkAdmin = () => {
    const [openPopup, setOpenPopup] = useTrigger()
    return (
        <>
            <Box
                sx={{
                    display: {
                        lg: 'flex'
                    },
                    marginX: {
                        lg: 20
                    },
                }}>
                <SearchBarAdmin />
                <Box onClick={setOpenPopup}>
                    <AdminFoodDrinkAddButton />
                </Box>
            </Box>
            <AdminFoodDrinkFormPopupDesktop
                openPopup={openPopup} setOpenPopup={setOpenPopup} />
        </>
    )
}

export default SearchAndFormButtonFoodDrinkAdmin