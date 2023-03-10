import * as React from 'react'
import AdminNavbar from 'components/organisms/AdminNavbar'
import CenterLayout from 'components/templates/CenterLayout'
import UserListMobileHeader from 'components/molecules/UserListMobileHeader'
import FoodDrinkAdminDesktop from 'components/organisms/FoodDrinkAdminDesktop'
import FoodDrinkMobile from 'components/organisms/FoodDrinkMobile'
import SearchAndFormButtonFoodDrinkAdmin from 'components/organisms/SearchAndFormButtonFoodDrinkAdmin'
import FoodDrinkMenuTotal from 'components/organisms/FoodDrinkMenuTotal'

const AdminFoodDrink = () => {
    const headstyle = {
        name1: 'Food and Drink Menu',
        name2: 'Admin',
    }
    return (
        <>
            <AdminNavbar />
            <UserListMobileHeader  {...headstyle} />
            <CenterLayout admin >
                <FoodDrinkMenuTotal />
                <SearchAndFormButtonFoodDrinkAdmin />
                <FoodDrinkMobile />
                <FoodDrinkAdminDesktop />
            </CenterLayout>
        </>
    )
}
export default AdminFoodDrink
