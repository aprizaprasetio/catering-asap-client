import { useEffect } from 'react'
import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { fetchToken, fetchRegister } from 'api/connections/authRequest'
import { storeToken } from 'api/initiate'

const useLogin = () => {
    // Initite function to navigate the route
    const navigate = useNavigate()
    // Initiate mutation for post request
    const { data, isSuccess, isLoading, mutate } = useMutation({
        mutationFn: fetchToken,
    })
    // Storing web token when request is success
    useEffect(() => {
        if (isSuccess === false) return
        storeToken(data)
        navigate('/')
    }, [isSuccess])
    return { data, isSuccess, isLoading, mutate }
}

const useRegister = () => {
    // Initite function to navigate the route
    const navigate = useNavigate()
    // Initiate mutation for post request
    const { data, isSuccess, isLoading, mutate } = useMutation({
        mutationFn: fetchRegister,
    })
    return { data, isLoading, mutate }
}

export {
    useLogin,
    useRegister,
}