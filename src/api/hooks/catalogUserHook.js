import { useQuery } from '@tanstack/react-query'
import { fetchFoodDrinkList } from 'api/connections/catalogUserRequest'

const useFoodDrinkList = () => {
    const { data, isSuccess, isLoading } = useQuery({
        queryKey: ['foodDrinkList'],
        queryFn: () => fetchFoodDrinkList(),
    }, {
        initialData: [],
    })

    return { data, isSuccess, isLoading }
}

export {
    useFoodDrinkList,
}