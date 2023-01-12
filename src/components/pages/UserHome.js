import React from 'react'
import CenterLayout from 'components/templates/CenterLayout'
import FoodDrinkList from 'components/organisms/FoodDrinkList'
import FloatingNavbar from 'components/organisms/FloatingNavbar'

const UserHome = () => {
    return (
        <>
            <FloatingNavbar />
            <CenterLayout>
                <FoodDrinkList />
            </CenterLayout>
        </>
    )
}

export default UserHome