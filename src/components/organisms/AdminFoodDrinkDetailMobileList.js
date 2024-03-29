import React from 'react'
import { useFoodDrinkList2 } from 'api/hooks/catalogUserHook'
import AdminFoodDrinkDetailMobile from 'components/pages/AdminFoodDrinkDetailMobile'

const AdminFoodDrinkDetailMobileList = () => {
    const { data } = useFoodDrinkList2()

    return data?.pages?.map((group, index) => (
        <React.Fragment key={index}>
            {
                group?.map(item => <AdminFoodDrinkDetailMobile key={item.id} {...item} />)
            }
        </React.Fragment>
    ))
}
export default AdminFoodDrinkDetailMobileList
