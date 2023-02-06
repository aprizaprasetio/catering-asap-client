import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useQuery, useMutation } from '@tanstack/react-query'
import { client } from 'api/initiates/queryInitiate'
import { fetchUserByToken, fetchToken, fetchRegister } from 'api/connections/authRequest'
import { getToken, storeToken } from 'commands/api/tokenCommand'
import { logout } from 'commands/user/authCommand'

const useLogin = () => {
    // Initiate mutation for post request
    const mutation = useMutation({
        mutationKey: ['user'],
        mutationFn: fetchToken,
        onSuccess: res => {
            storeToken(res.token)
            client.setQueryData(['user'], res.data)
        }
    })
    return mutation
}

const useLoginOnLoad = () => {
    // An automatic login
    // If user has token, mutation will request user data by token
    const mutation = useMutation({
        mutationFn: async () => {
            if (!getToken()) return null
            return await fetchUserByToken(getToken())
        },
        onSuccess: res => {
            if (!res?.data) return logout()
            client.setQueryData(['user'], res.data)
        },
        onError: logout,
    })

    // Initiate user query state with mutate property for his function
    useQuery({
        queryKey: ['user'],
        queryFn: mutation?.mutate,
        initialData: null,
    })

    useEffect(mutation?.mutate, [])
}

const useRegister = () => {
    const navigate = useNavigate()
    // Initiate mutation for post request
    const mutation = useMutation({
        mutationFn: fetchRegister,
        onSuccess: () => navigate('/login')
    })
    return mutation
}

export {
    useLogin,
    useLoginOnLoad,
    useRegister,
}