import React from 'react'
import CenterLayout from 'components/templates/CenterLayout'
import FoodDrinkList from 'components/organisms/FoodDrinkList'
import FoodDrinkPromotion from 'components/organisms/FoodDrinkPromotion'
import FloatingNavbar from 'components/organisms/FloatingNavbar'

const UserHome = () => {
    return (
        <>
            <FloatingNavbar />
            <CenterLayout>
                <FoodDrinkPromotion />
                <FoodDrinkList />
            </CenterLayout>
        </>
    )
}

export default UserHome