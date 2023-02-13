import * as React from 'react'
import FoodDrinkTableHeader from 'components/organisms/FoodDrinkTableHeader'
import FoodDrinkTableContainer from 'components/organisms/FoodDrinkTableContainer'
import AdminNavbar from 'components/organisms/AdminNavbar'
import CenterLayout from 'components/templates/CenterLayout'
import UserListMobileHeader from 'components/molecules/UserListMobileHeader'
import FoodDrinkListAdmin from 'components/organisms/FoodDrinkListAdmin'

const AdminFoodDrink = () => {
    const headstyle = {
        name1: 'Food and Drink Menu',
        name2: 'Admin',
    }

    return (
        <>
            <AdminNavbar />
            <UserListMobileHeader {...headstyle} />
            <CenterLayout admin >
                <FoodDrinkTableContainer header={<FoodDrinkTableHeader />}>
                    <FoodDrinkListAdmin />
                </FoodDrinkTableContainer>
            </CenterLayout>
        </>
    )
}

export default AdminFoodDrink
