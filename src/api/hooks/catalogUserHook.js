import { useEffect } from 'react'
import { useQuery, useInfiniteQuery } from '@tanstack/react-query'
import { useStale } from 'commands/builders/hookBuilder'
import { fetchFoodDrinkList, fetchFoodDrinkList2 } from 'api/connections/catalogUserRequest'

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
    const [keyword] = useStale('search')

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
    }, [keyword])

    return foodDrinkQuery
}

export {
    useFoodDrinkList,
    useFoodDrinkList2,
}