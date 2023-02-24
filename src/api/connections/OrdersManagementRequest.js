import { axios } from 'api/initiates/queryInitiate'

const fetchOrderList = async id => {
    const orderList = await axios.get('Orders', {
        params: {
            id: id
        }
    })
    return orderList.data
}

// const fetchOrderListWaiting = async ({ pageParam = 1 }) => {
//     const orderList = await axios.get('Orders/Waiting', {
//         params: {
//             PageNumber: pageParam,
//             PageSize: 10,
//         },
//     })
//     return orderList.data.data
// }

// const fetchOrderListOnProcces = async ({ pageParam = 1 }) => {
//     const orderList = await axios.get('Orders/OnProcces', {
//         params: {
//             PageNumber: pageParam,
//             PageSize: 10,
//         },
//     })
//     return orderList.data.data
// }
// const fetchOrderListOnDelivery = async ({ pageParam = 1 }) => {
//     const orderList = await axios.get('Orders/OnDelivery', {
//         params: {
//             PageNumber: pageParam,
//             PageSize: 10,
//         },
//     })
//     return orderList.data.data
// }
// const fetchOrderListSuccessful = async ({ pageParam = 1 }) => {
//     const orderList = await axios.get('Orders/Successful', {
//         params: {
//             PageNumber: pageParam,
//             PageSize: 10,
//         },
//     })
//     return orderList.data.data
// }

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

const fetchListSwitch = async (page = 1, status) => {
    const switchOrder = {
        '/admin/orders': 0,
        '/admin/orders/waiting': 1,
        '/admin/orders/delivering': 2,
        '/admin/orders/success': 3,
    }
    const orderList = await axios.get('Orders/Switch', {
        params: {
            SortBy: switchOrder[status],
            PageNumber: page,
            PageSize: 10,
        },
    })
    return orderList.data.data
}

export {
    fetchOrderList,
    // fetchOrderListWaiting,
    // fetchOrderListOnDelivery,
    // fetchOrderListOnProcces,
    // fetchOrderListSuccessful,
    fetchListMenuOrder,
    fetchListSwitch,
    updateOrder
}
