import * as React from 'react'
import AdminNavbar from 'components/organisms/AdminNavbar'
import CenterLayout from 'components/templates/CenterLayout'
import FoodDrinkAdminDesktop from 'components/organisms/FoodDrinkAdminDesktop'
import FoodDrinkMobile from 'components/organisms/FoodDrinkMobile'
import SearchAndFormButtonFoodDrinkAdmin from 'components/organisms/SearchAndFormButtonFoodDrinkAdmin'
import FoodDrinkMenuTotal from 'components/organisms/FoodDrinkMenuTotal'
import DynamicMobileHeader from 'components/organisms/DynamicMobileHeader'

const AdminFoodDrink = () => {

    return (
        <>
            <AdminNavbar />
            <CenterLayout admin
                header={<DynamicMobileHeader title="Food and Drink Menu" />}>
                <FoodDrinkMenuTotal />
                <SearchAndFormButtonFoodDrinkAdmin />
                <FoodDrinkMobile />
                <FoodDrinkAdminDesktop />
            </CenterLayout>
        </>
    )
}
export default AdminFoodDrink
