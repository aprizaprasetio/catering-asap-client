import React from 'react'
import CenterLayout from '../templates/CenterLayout'
import FoodDrinkList from '../organisms/FoodDrinkList'
import FloatingNavbar from '../organisms/FloatingNavbar'

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