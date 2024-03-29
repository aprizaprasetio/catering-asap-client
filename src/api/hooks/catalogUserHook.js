import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useQuery, useInfiniteQuery, useMutation } from '@tanstack/react-query'
import { useStale } from 'commands/builders/hookBuilder'
import { fetchFoodDrinkList, fetchFoodDrinkDetail, fetchFoodDrinkList2, fetchOrder, fetchOrderUser } from 'api/connections/catalogUserRequest'
import useCheckoutStore from 'factory/store/useCheckoutStore'
import useFoodDrinkStore from 'factory/store/UseFoodDrinkStore'
import useFilterListMenuUserStore from 'factory/store/useFilterListMenuUserStore'

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
    const setTotalFoodDrink = useFoodDrinkStore(state => state.setTotalFoodDrink)
    const { filterBy } = useFilterListMenuUserStore()
    const [search] = useStale('search')

    const foodDrinkQuery = useInfiniteQuery({
        queryKey: ['foodDrinkList'],
        queryFn: async ({ pageParam = 1 }) => {
            const fetch = await fetchFoodDrinkList2(pageParam, filterBy)
            setTotalFoodDrink(fetch.totalCount)
            return fetch.data
        },
        getNextPageParam: (current, pages) => {
            // Fetching will stop if the last data founded less than 10
            // Because each fetch limited to 10, ofcourse that case must be stop
            const isLimit = pages.find(current => current.length !== 10)
            if (isLimit) return
            return pages.length + 1
        },
    })

    useEffect(() => {
        if (foodDrinkQuery.isFetching) return
        foodDrinkQuery?.refetch()
    }, [search, filterBy])

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

const useFoodDrinkDetail = () => {
    const { fooddrinkid } = useParams()
    const foodDrinkDetail = useQuery({
        queryKey: ['detailMenu'],
        queryFn: () => fetchFoodDrinkDetail(fooddrinkid),
    })

    useEffect(() => {
        foodDrinkDetail.refetch()
    }, [fooddrinkid, foodDrinkDetail.data])

    return foodDrinkDetail
}

export {
    useFoodDrinkList,
    useFoodDrinkList2,
    useFoodDrinkOrder,
    useOrderUser,
    useFoodDrinkDetail
}