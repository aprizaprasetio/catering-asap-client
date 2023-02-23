import { useEffect } from 'react'
import { useQuery, useInfiniteQuery } from '@tanstack/react-query'
import { fetchFoodDrinkMenuDetail } from 'api/connections/catalogUserRequest'
import { useParams } from 'react-router-dom'

const useFoodDrinkDetail = () => {
    const { menuId } = useParams()
    const foodDetail = useQuery({
        queryKey: ['foodDrinkDetail'],
        queryFn: () => fetchFoodDrinkMenuDetail(menuId),
    })

    useEffect(() => foodDetail.remove, [])

    return foodDetail
}
export {
    useFoodDrinkDetail,
}