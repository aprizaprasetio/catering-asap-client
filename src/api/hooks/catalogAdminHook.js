import { useEffect } from 'react'
import { useQuery, useInfiniteQuery, useMutation } from '@tanstack/react-query'
import { client } from 'api/initiates/queryInitiate'
import { fetchFoodDrinkMenuDetail, fetchPost } from 'api/connections/catalogUserRequest'
import { useNavigate, useParams } from 'react-router-dom'
import { useFoodDrinkList2 } from 'api/hooks/catalogUserHook'
import { fetchFoodDrinkCount, fetchFoodDrinkCreate, fetchFoodDrinkDelete, fetchFoodDrinkQuantity, fetchFoodDrinkUpdate }
    from 'api/connections/catalogAdminRequest'


const useFoodDrinkDetail = () => {
    const { fooddrinkid } = useParams()
    const foodDetail = useQuery({
        queryKey: ['foodDrinkDetail'],
        queryFn: () => fetchFoodDrinkMenuDetail(fooddrinkid),
    })

    useEffect(() => foodDetail.remove, [])

    return foodDetail
}

const useFoodDrinkCreate = () => {
    // const { refetch } = useFoodDrinkList2()
    const mutation = useMutation({
        mutationFn: fetchFoodDrinkCreate,
        onSuccess: () => client.refetchQueries({ queryKey: ['foodDrinkList'] }),
    })

    return mutation
}

const useFoodDrinkDelete = () => {
    // const { refetch } = useFoodDrinkList2()
    const mutation = useMutation({
        mutationFn: fetchFoodDrinkDelete,
        onSuccess: () => client.refetchQueries({ queryKey: ['foodDrinkList'] }),
    })
    return mutation
}

const useFoodDrinkUpdate = () => {
    // const { refetch } = useFoodDrinkList2()
    const mutation = useMutation({
        mutationFn: fetchFoodDrinkUpdate,
        onSuccess: () => client.refetchQueries({ queryKey: ['foodDrinkList'] }),
    })
    return mutation
}

const useFoodDrinkQuantity = () => {

    const query = useQuery({
        queryKey: ['foodDrinkQuantity'],
        queryFn: fetchFoodDrinkQuantity,
        refetchInterval: 20000,
    })

    return query
}

export {
    useFoodDrinkDetail,
    useFoodDrinkCreate,
    useFoodDrinkDelete,
    useFoodDrinkUpdate,
    useFoodDrinkQuantity,
}