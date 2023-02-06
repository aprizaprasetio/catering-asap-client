import { useMutation } from '@tanstack/react-query'
import { client } from 'api/initiates/queryInitiate'
import { fetchEditUser } from 'api/connections/manageUserRequest'

const useProfile = () => {
    // Initiate mutation for put requsest
    const mutation = useMutation({
        mutationFn: fetchEditUser,
        onSuccess: res => {
            client.setQueryData(['user'], {
                ...client.getQueryData(['user']),
                ...res,
            })
        }
    })
    return mutation
}

export {
    useProfile,
}