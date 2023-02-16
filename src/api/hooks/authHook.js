import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useQuery, useMutation } from '@tanstack/react-query'
import { axios, client } from 'api/initiates/queryInitiate'
import { fetchUserByToken, fetchToken, fetchRegister } from 'api/connections/authRequest'
import { authHeaderBuilder } from 'commands/builders/queryBuilder'
import { getToken, storeToken } from 'commands/api/tokenCommand'
import { logout } from 'commands/application/authCommand'
import useCartStore from 'factory/store/useCartStore'

const useLogin = () => {
    const setQuantity = useCartStore(state => state.setQuantity)
    // Initiate mutation for post request
    const mutation = useMutation({
        mutationKey: ['user'],
        mutationFn: fetchToken,
        onSuccess: res => {
            storeToken(res.token)
            axios.defaults.headers.Authorization = authHeaderBuilder()
            client.setQueryData(['user'], res.data)
        }
    })
    return mutation
}

const useLoginOnLoad = () => {
    const setQuantity = useCartStore(state => state.setQuantity)
    // An automatic login
    // If user has token, mutation will request user data by token
    const mutation = useMutation({
        mutationFn: async () => {
            if (!getToken()) return null
            return await fetchUserByToken()
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