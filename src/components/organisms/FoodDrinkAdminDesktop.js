import React from 'react'
import FoodDrinkListAdminDesktop from 'components/organisms/FoodDrinkListAdminDesktop'
import FoodDrinkTableContainer from './FoodDrinkTableContainer'
import FoodDrinkTableHeader from './FoodDrinkTableHeader'

const FoodDrinkAdminDesktop = () => {
    return (
        <FoodDrinkTableContainer header={<FoodDrinkTableHeader />}>
            <FoodDrinkListAdminDesktop />
        </FoodDrinkTableContainer>
    )
}
export default FoodDrinkAdminDesktop
