import { Navigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { client } from 'api/initiates/queryInitiate'
import { fetchToken, fetchRegister } from 'api/connections/authRequest'
import { storeToken } from 'commands/api/tokenCommand'

const useLogin = () => {
    // Initiate mutation for post request
    const { data, isSuccess, isError, isLoading, mutate } = useMutation({
        mutationKey: ['user'],
        mutationFn: fetchToken,
        onSuccess: res => {
            storeToken(res.token)
            client.setQueryData(['user'], res.data)
            return <Navigate to="/" />
        }
    })
    return { data, isSuccess, isError, isLoading, mutate }
}

const useRegister = () => {
    // Initiate mutation for post request
    const { data, isSuccess, isLoading, mutate } = useMutation({
        mutationFn: fetchRegister,
        onSuccess: () => <Navigate to="/login" />,
    })
    return { data, isSuccess, isLoading, mutate }
}

export {
    useLogin,
    useRegister,
}