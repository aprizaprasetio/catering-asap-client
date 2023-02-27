import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query"
import { useParams, useLocation } from "react-router-dom"
import { fetchOrderList, fetchOrderListOnProcces, fetchOrderListOnDelivery, fetchOrderListSuccessful, fetchOrderListWaiting, updateOrder, fetchListMenuOrder, fetchListSwitch } from "api/connections/ordersManagementRequest"
import { useEffect } from "react"

const useOrderList = () => {
    const { orderId } = useParams()
    const orderListQuery = useQuery({
        queryKey: ['orders'],
        queryFn: () => fetchOrderList(orderId),
        refetchOnMount: true,
        refetchOnWindowFocus: true,
    })
    return orderListQuery
}

const useUpdateOrder = id => {
    const updateOrderQuery = useMutation({
        mutationFn: () => updateOrder(id),
    })

    return updateOrderQuery
}

const useOrderListMenu = () => {
    const { orderId } = useParams()
    const orderListMenu = useQuery({
        queryKey: ['foodDrinkMenu'],
        queryFn: () => fetchListMenuOrder(orderId),
    })
    useEffect(() => {
        orderListMenu.refetch()
        return orderListMenu.remove
    }, [orderId])
    return orderListMenu
}

const useOrderSwitch = () => {
    const { pathname } = useLocation()

    const orderSwitch = useInfiniteQuery({
        queryKey: ['orderList'],
        queryFn: ({ pageParam = 1 }) => fetchListSwitch(pageParam, pathname),
        getNextPageParam: (current, pages) => {
            const isLimit = pages.find(current => current.length !== 10)
            if (isLimit) return
            return pages.length + 1
        },
        refetchOnMount: true,
        refetchOnWindowFocus: true,
    })

    useEffect(() => {
        orderSwitch.refetch()
        return orderSwitch.remove
    }, [pathname])

    return orderSwitch
}

export {
    useOrderList,
    // useOrderListWaiting,
    // useOrderListOnProcces,
    // useOrderListOnDelivery,
    // useOrderListSuccessful,
    useUpdateOrder,
    useOrderListMenu,
    useOrderSwitch,
}