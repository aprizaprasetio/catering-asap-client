import { useInfiniteQuery, useMutation } from '@tanstack/react-query'
import { fetchUserList, deleteUser } from 'api/connections/usersManagementRequest'

const useUserList = () => {
    const userListQuery = useInfiniteQuery({
        queryKey: ['users'],
        queryFn: fetchUserList,
        getNextPageParam: (current, pages) => {
            const isLimit = pages.find(current => current.length !== 10)
            if(isLimit) return
            return pages.length + 1
        },
    })

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