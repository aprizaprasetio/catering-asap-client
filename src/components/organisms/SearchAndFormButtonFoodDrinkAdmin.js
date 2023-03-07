import React from 'react'
import AdminFoodDrinkAddButton from 'components/molecules/AdminFoodDrinkAddButton'
import AdminFoodDrinkFormPopup from 'components/organisms/AdminFoodDrinkFormPopup'
import { Box, List } from '@mui/material'
import { useTrigger } from 'commands/builders/commonBuilder'
import PopUp from 'components/molecules/PopUp'
import SearchBarAdmin from 'components/molecules/SearchBarAdmin'

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
                    }
                }}>
                <SearchBarAdmin />
                <Box onClick={setOpenPopup}>
                    <AdminFoodDrinkAddButton />
                </Box>
            </Box>
            <PopUp openPopup={openPopup} setOpenPopup={setOpenPopup}>
                <AdminFoodDrinkFormPopup />
            </PopUp>
        </>
    )
}

export default SearchAndFormButtonFoodDrinkAdmin