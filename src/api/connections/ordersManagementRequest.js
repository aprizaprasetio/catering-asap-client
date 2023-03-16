import { axios } from 'api/initiates/queryInitiate'

const fetchOrderList = async id => {
    const orderList = await axios.get('Orders', {
        params: {
            id: id
        }
    })
    return orderList.data
}

const updateOrder = async id => {
    const orderList = await axios.put('Orders/Update', {
        id: id,
        isForward: true,
    })
    return orderList.data
}

const fetchListMenuOrder = async id => {
    const orderList = await axios.get('FoodDrinkOrders/WithOrderId', {
        params: { id },
    })
    return orderList.data.data
}

const fetchListSwitch = async (page = 1, status, sortBy) => {
    const switchOrder = {
        '/orders': 0,
        '/orders/waiting': 1,
        '/orders/delivering': 2,
        '/orders/success': 3,
    }
    const orderList = await axios.get('Orders/Switch', {
        params: {
            Filter: switchOrder[status],
            SortBy: sortBy,
            PageNumber: page,
            PageSize: 10,
        },
    })
    return orderList.data.data
}

const fetchListUserGraph = async (page = 1) => {
    const userList = await axios.get('Orders/Graph', {
        params: {
            PageNumber: page,
            PageSize: 10
        }
    })
    return userList.data.data
}

const fetchDataGraph = async () => {
    const dataGraph = await axios.get('Orders/DataGraph')
    return dataGraph.data.data
}

const fetchOrderById = async id => {
    const dataOrder = await axios.get('/Orders/UserId',{
        params: {
            id: id
        }
    })
    return dataOrder.data.data
}

export {
    fetchOrderList,
    fetchListMenuOrder,
    fetchListSwitch,
    updateOrder,
    fetchListUserGraph,
    fetchDataGraph,
    fetchOrderById
}
