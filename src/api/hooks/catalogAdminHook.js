import { useEffect } from 'react'
import { useQuery, useInfiniteQuery, useMutation } from '@tanstack/react-query'
import { fetchFoodDrinkMenuDetail, fetchPost } from 'api/connections/catalogUserRequest'
import { useNavigate, useParams } from 'react-router-dom'
import { useFoodDrinkList2 } from 'api/hooks/catalogUserHook'
import { fetchFoodDrinkCreate, fetchFoodDrinkDelete, fetchFoodDrinkUpdate, fetchFoodDrinkupdate } from 'api/connections/catalogAdminRequest'

const useFoodDrinkDetail = () => {
    const { menuId } = useParams()
    const foodDetail = useQuery({
        queryKey: ['foodDrinkDetail'],
        queryFn: () => fetchFoodDrinkMenuDetail(menuId),
    })

    useEffect(() => foodDetail.remove, [])

    return foodDetail
}

const UseFoodDrinkCreate = () => {
    const { refetch } = useFoodDrinkList2()

    const mutation = useMutation({
        mutationFn: fetchFoodDrinkCreate,
        onSuccess: refetch,
    })

    return mutation
}

const UseFoodDrinkDelete = () => {
    const { refetch } = useFoodDrinkList2()
    const mutation = useMutation({
        mutationFn: fetchFoodDrinkDelete,
        onSuccess: refetch,
    })
    return mutation
}

const UseFoodDrinkUpdate = () => {
    const { refetch } = useFoodDrinkList2()
    const mutation = useMutation({
        mutationFn: fetchFoodDrinkUpdate,
        onSuccess: refetch,
    })
    return mutation
}

export {
    useFoodDrinkDetail,
    UseFoodDrinkCreate,
    UseFoodDrinkDelete,
    UseFoodDrinkUpdate,
}