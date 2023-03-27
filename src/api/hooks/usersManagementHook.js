import React from 'react'
import { useInfiniteQuery, useMutation, useQuery } from '@tanstack/react-query'
import { fetchUserList, deleteUser, fetchUserById } from 'api/connections/usersManagementRequest'
import useUserStore from 'factory/store/useUserStore'
import { useParams } from 'react-router-dom'

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

    React.useEffect(() => {
        if (!keyword) return userListQuery.remove
        userListQuery.refetch()
        return userListQuery.remove
    }, [keyword])

    return userListQuery
}

const useUserData = () => {
    const { id } = useParams()
    const userData = useQuery({
        queryKey: ['userDetail'],
        queryFn: () => fetchUserById(id),
    })
    React.useEffect(() => {
        userData.refetch()
        return userData.remove
    }, [id])

    return userData

}

const useDeleteUser = () => {
    const mutation = useMutation({
        mutationKey: ['user'],
        mutationFn: deleteUser
    })

    return mutation
}


export { useUserList, useDeleteUser, useUserData }