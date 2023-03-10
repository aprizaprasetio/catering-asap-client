import { axios, client } from 'api/initiates/queryInitiate'
import { foodDrinkPath } from 'api/initiates/pathInitiate'

// This is the old function, not compatible and do not use this function
const fetchFoodDrinkList = async () => {
    console.info(axios.get(foodDrinkPath.menu, {
        PageNumber: 1,
        PageSize: 15,
    }))
    const foodDrinkList = await axios.get(foodDrinkPath.menu, {
        PageNumber: 1,
        PageSize: 15,
    })
    return foodDrinkList.data.data
}

// Requesting a bunch of food and drink menu with pageparam
const fetchFoodDrinkList2 = async ({ pageParam = 1 }) => {
    const foodDrinkList = await axios.get(foodDrinkPath.menu, {
        params: {
            Keyword: client.getQueryData(['search']).keyword,
            SortBy: client.getQueryData(['search']).sortBy,
            IsAsc: client.getQueryData(['search']).isAsc,
            PageNumber: pageParam,
            PageSize: 10,
        },
    })
    return foodDrinkList.data.data
}

const fetchOrder = async checkoutData => {
    const order = await axios.post('Orders', checkoutData)
    return order.data.data
}

const fetchOrderUser = async orderId => {
    const order = await axios.get('Orders/User', {
        params: { orderId },
    })

    return order.data.data
}

export {
    fetchFoodDrinkList,
    fetchFoodDrinkList2,
    fetchOrder,
    fetchOrderUser,
}