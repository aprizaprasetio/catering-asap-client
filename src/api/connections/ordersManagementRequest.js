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
    const order = await axios.put('Orders/Update', { id, isForward: true })

    return order.data
}

const updateOrderControl = async ({ id, status }) => {
    const order = await axios.put('Orders/StatusControl', { id, status })

    return order.data
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
        '/orders/rejected': 4,
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

const fetchDataGraph = async filter => {
    const dataGraph = await axios.get('Orders/DataGraph', {
        params: { Filter: filter }
    })
    return dataGraph.data.data
}

const fetchOrderById = async id => {
    const dataOrder = await axios.get('/Orders/UserId', {
        params: {
            id: id
        }
    })
    return dataOrder.data.data
}

const fetchListSwitchUser = async (page = 1, status) => {
    const switchOrder = {
        '/statusorders': 0,
        '/statusorders/onproccess': 1,
        '/statusorders/ondelivery': 2,
        '/statusorders/successful': 3,
    }
    const orderList = await axios.get('/Orders/Switch/User', {
        params: {
            Filter: switchOrder[status],
            PageNumber: page,
            PageSize: 10,
        },
    })
    return orderList.data.data
}

export {
    fetchOrderList,
    fetchListMenuOrder,
    fetchListSwitch,
    updateOrder,
    updateOrderControl,
    fetchListUserGraph,
    fetchDataGraph,
    fetchOrderById,
    fetchListSwitchUser
}
