import React from 'react'
import FoodDrinkTableHeader from 'components/organisms/FoodDrinkTableHeader'
import FoodDrinkTableContainer from 'components/organisms/FoodDrinkTableContainer'
import FoodDrinkTableItem from 'components/organisms/FoodDrinkTableItem'
import SideNavbar from 'components/organisms/SideNavbar'
import CenterLayout from 'components/templates/CenterLayout'


const AdminFoodDrink = () => {
    return (
        <>
            <SideNavbar />
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