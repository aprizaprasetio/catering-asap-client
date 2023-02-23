import * as React from 'react'
import FoodDrinkTableHeader from 'components/organisms/FoodDrinkTableHeader'
import FoodDrinkTableContainer from 'components/organisms/FoodDrinkTableContainer'
import AdminNavbar from 'components/organisms/AdminNavbar'
import CenterLayout from 'components/templates/CenterLayout'
import UserListMobileHeader from 'components/molecules/UserListMobileHeader'
import SearchBarAdmin from 'components/molecules/SearchBarAdmin'
import FoodDrinkListAdminMobile from 'components/organisms/FoodDrinkListAdminMobile'
import FoodDrinkAdminDesktop from 'components/organisms/FoodDrinkAdminDesktop'
import FoodDrinkMenuTotal from 'components/organisms/FoodDrinkMenuTotal'
import FoodDrinkMobile from 'components/organisms/FoodDrinkMobile'
import AdminFoodDrinkAddButton from 'components/molecules/AdminFoodDrinkAddButton'
import AdminFoodDrinkFormPopup from 'components/organisms/AdminFoodDrinkFormPopup'
import { Box } from '@mui/material'
import { useTrigger } from 'commands/builders/commonBuilder'
import PopUp from 'components/molecules/PopUp'

const AdminFoodDrink = ({ }) => {
    const headstyle = {
        name1: 'Food and Drink Menu',
        name2: 'Admin',
    }
    const [openPopup, setOpenPopup] = useTrigger()

    return (
        <>
            <AdminNavbar />
            <UserListMobileHeader  {...headstyle} />
            <CenterLayout admin >
                <FoodDrinkMenuTotal />
                <Box sx={{
                    display: {
                        lg: 'flex',
                        gap: 0,
                        padding: 0,
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
                <FoodDrinkMobile />
                <FoodDrinkAdminDesktop />
            </CenterLayout>
        </>
    )
}

export default AdminFoodDrink
