import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useQuery, useInfiniteQuery, useMutation } from '@tanstack/react-query'
import { useStale } from 'commands/builders/hookBuilder'
// import { fetchFoodDrinkList, fetchFoodDrinkList2, fetchFoodDrinkMenuDetail } from 'api/connections/catalogUserRequest'
import { fetchFoodDrinkList, fetchFoodDrinkList2, fetchOrder, fetchOrderUser, fetchFoodDrinkMenuDetail } from 'api/connections/catalogUserRequest'
import useCheckoutStore from 'factory/store/useCheckoutStore'

// This is the old hook, not compatible and do not use this hook
const useFoodDrinkList = () => {
    const { data, isSuccess, isLoading } = useQuery({
        queryKey: ['foodDrinkList'],
        queryFn: fetchFoodDrinkList,
        initialData: [],
    })

    return { data, isSuccess, isLoading }
}

const useFoodDrinkList2 = () => {
    const [search] = useStale('search')

    const foodDrinkQuery = useInfiniteQuery({
        queryKey: ['foodDrinkList'],
        queryFn: fetchFoodDrinkList2,
        getNextPageParam: (current, pages) => {
            // Fetching will stop if the last data founded less than 10
            // Because each fetch limited to 10, ofcourse that case must be stop
            const isLimit = pages.find(current => current.length !== 10)
            if (isLimit) return
            return pages.length + 1
        },
    })

    useEffect(() => {
        foodDrinkQuery?.refetch()
    }, [search])

    return foodDrinkQuery
}

const useFoodDrinkOrder = () => {
    const navigate = useNavigate()
    const { getCheckoutData } = useCheckoutStore()

    const mutation = useMutation({
        mutationFn: () => fetchOrder(getCheckoutData()),
        onSuccess: createdOrderId => navigate(`/orders/${createdOrderId}`),
    })

    return mutation
}

const useOrderUser = () => {
    const navigate = useNavigate()
    const { orderId } = useParams()

    const orderUser = useQuery({
        queryKey: ['orderUser'],
        queryFn: () => fetchOrderUser(orderId),
        onError: () => navigate('/'),
        retry: false,
    })

    useEffect(() => orderUser.remove, [])

    return orderUser
}

export {
    useFoodDrinkList,
    useFoodDrinkList2,
    useFoodDrinkOrder,
    useOrderUser,
}