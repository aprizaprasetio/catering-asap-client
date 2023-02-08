import React from 'react'
import FoodDrinkTableHeader from 'components/organisms/FoodDrinkTableHeader'
import FoodDrinkTableContainer from 'components/organisms/FoodDrinkTableContainer'
import FoodDrinkTableItem from 'components/organisms/FoodDrinkTableItem'
import AdminNavbar from 'components/organisms/AdminNavbar'
import CenterLayout from 'components/templates/CenterLayout'

const AdminFoodDrink = () => {
    return (
        <>
            <AdminNavbar />
            <CenterLayout admin>
                <FoodDrinkTableContainer header={<FoodDrinkTableHeader />}>
                    <FoodDrinkTableItem />
                    <FoodDrinkTableItem />
                    <FoodDrinkTableItem />
                    <FoodDrinkTableItem />
                    <FoodDrinkTableItem />
                    <FoodDrinkTableItem />
                    <FoodDrinkTableItem />
                    <FoodDrinkTableItem />
                    <FoodDrinkTableItem />
                    <FoodDrinkTableItem />
                </FoodDrinkTableContainer>
            </CenterLayout>
        </>
    )
}

export default AdminFoodDrink