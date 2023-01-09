import React from 'react'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

const BASE_URL = 'https://192.168.53.195:5001'

const fetchFoodDrinkList = () => axios.get(`${BASE_URL}/api/FoodDrinkMenus`).then(response => response.data.data)

const useFoodDrinkList = () => {
    const { data, status } = useQuery({
        queryKey: ['foodDrinkList'],
        queryFn: fetchFoodDrinkList,
    })

    return [data, status]
}

export {
    fetchFoodDrinkList,
    useFoodDrinkList,
}