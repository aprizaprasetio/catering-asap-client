import { useInfiniteQuery, useMutation } from '@tanstack/react-query'
import { fetchUserList, deleteUser } from 'api/connections/usersManagementRequest'
import useUserStore from 'factory/store/useUserStore'
import { useEffect } from 'react'

const useUserList = () => {
    const { keyword, setTotalUser } = useUserStore()
    const userListQuery = useInfiniteQuery({
        queryKey: ['users'],
        queryFn: async ({ pageParam = 1 }) => {
            const fetch = await fetchUserList(pageParam, keyword)
            setTotalUser(fetch.totalCount)
            return fetch.data
        },
        getNextPageParam: (current, pages) => {
            const isLimit = pages.find(current => current.length !== 10)
            if (isLimit) return
            return pages.length + 1
        },
    })

    useEffect(() => {
        userListQuery.refetch()
        return userListQuery.remove
    }, [keyword])

    return userListQuery
}

const useDeleteUser = () => {
    const mutation = useMutation({
        mutationKey: ['user'],
        mutationFn: deleteUser
    })

    return mutation
}


export { useUserList, useDeleteUser }