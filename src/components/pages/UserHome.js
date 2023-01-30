import React from 'react'
import CenterLayout from 'components/templates/CenterLayout'
import FoodDrinkList from 'components/organisms/FoodDrinkList'
import FoodDrinkPromotion from 'components/organisms/FoodDrinkPromotion'
import FloatingNavbar from 'components/organisms/FloatingNavbar'
import { useStale } from 'commands/builders/hookBuilder'

const UserHome = () => {
    const [search] = useStale('search')

    return (
        <>
            <FloatingNavbar />
            <CenterLayout>
                {!search?.keyword && <FoodDrinkPromotion />}
                <FoodDrinkList />
            </CenterLayout>
        </>
    )
}

export default UserHome