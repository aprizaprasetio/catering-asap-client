import React from 'react'
import FloatingNavbar from 'components/organisms/FloatingNavbar'
import UserDetailFoodDrinkMenuDekstop from 'components/organisms/UserDetailFoodDrinkMenuDekstop'
import CenterLayout from 'components/templates/CenterLayout'

const UserFoodDrinkMenuDetail = () => {
    return (
        <>
            <FloatingNavbar />
            <CenterLayout>
                <UserDetailFoodDrinkMenuDekstop />
            </CenterLayout>
        </>
    )
}

export default UserFoodDrinkMenuDetail