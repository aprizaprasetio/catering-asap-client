import { useMutation } from '@tanstack/react-query'
import { client } from 'api/initiates/queryInitiate'
import { fetchEditUser, fetchEditPassword } from 'api/connections/manageUserRequest'

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

const useChangePassword = () => {
    // Initiate mutation for put requsest
    const mutation = useMutation({
        mutationFn: fetchEditPassword
    })
    return mutation
}

export {
    useProfile,
    useChangePassword,
}