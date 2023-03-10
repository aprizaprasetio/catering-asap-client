import FoodDrinkCardMobile from 'components/molecules/FoodDrinkCardMobile'
import { useFoodDrinkList2 } from 'api/hooks/catalogUserHook'
import React from 'react'

const FoodDrinkListAdminMobile = () => {
    const { data, isFetching, isLoading, hasNextPage, fetchNextPage } = useFoodDrinkList2()
    React.useEffect(() => {
        const refetch = () => {
            const { innerHeight, pageYOffset } = window
            const isBottom = (innerHeight + pageYOffset) >= document.body.offsetHeight
            if (!isFetching && (isBottom && hasNextPage)) fetchNextPage()
        }
        window.addEventListener('scroll', refetch)
        return () => window.removeEventListener('scroll', refetch)
    }, [isFetching])

    return data?.pages?.map((group, index) => (
        <React.Fragment key={index}>
            {
                group?.map(item => <FoodDrinkCardMobile key={item.id}{...item} />)
            }
        </React.Fragment>)
    )
}


export default FoodDrinkListAdminMobile