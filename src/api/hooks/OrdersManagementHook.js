import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query"
import { useParams, useLocation } from "react-router-dom"
import { fetchOrderList, fetchDataGraph, updateOrder, fetchListMenuOrder, fetchListSwitch, fetchListUserGraph, fetchOrderById, fetchListSwitchUser } from "api/connections/ordersManagementRequest"
import { useEffect } from "react"
import useSortAdmin from "factory/store/useSortAdmin"

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
    const { sortBy } = useSortAdmin()
    const { pathname } = useLocation()

    const orderSwitch = useInfiniteQuery({
        queryKey: ['orderList'],
        queryFn: ({ pageParam = 1 }) => fetchListSwitch(pageParam, pathname, sortBy),
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
    }, [pathname, sortBy])

    return orderSwitch
}

const useOrderListUserGraph = () => {
    const userList = useInfiniteQuery({
        queryKey: ['Graph'],
        queryFn: fetchListUserGraph,
        getNextPageParam: (current, pages) => {
            const isLimit = pages.find(current => current.length !== 5)
            if (isLimit) return
            return pages.length + 1
        },
        refetchOnMount: true,
    })
    return userList
}

const useDataGraph = () => {
    const dataGraph = useQuery({
        queryKey: ['dataGraph'],
        queryFn: fetchDataGraph
    })

    return dataGraph
}

const useDataOrderUser = () => {
    const { id } = useParams()
    const dataOrder = useQuery({
        queryKey: ['dataOrderUser'],
        queryFn: () => fetchOrderById(id)
    })
    useEffect(() => {
        dataOrder.refetch()
        return dataOrder.remove
    }, [id])

    return dataOrder
}

const useOrderSwitchUser = () => {
    const { pathname } = useLocation()

    const orderSwitch = useInfiniteQuery({
        queryKey: ['orderListUser'],
        queryFn: ({ pageParam = 1 }) => fetchListSwitchUser(pageParam, pathname),
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
    useUpdateOrder,
    useOrderListMenu,
    useOrderSwitch,
    useOrderListUserGraph,
    useDataGraph,
    useDataOrderUser,
    useOrderSwitchUser
}