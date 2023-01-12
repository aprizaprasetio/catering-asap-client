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
        onSuccess: () => {
            storeToken(data)
            navigate('/')
        },
    })
    return { data, isSuccess, isLoading, mutate }
}

const useRegister = () => {
    // Initite function to navigate the route
    const navigate = useNavigate()
    // Initiate mutation for post request
    const { data, isSuccess, isLoading, mutate } = useMutation({
        mutationFn: fetchRegister,
        onSuccess: () => {
            navigate('/login')
        },
    })
    return { data, isSuccess, isLoading, mutate }
}

export {
    useLogin,
    useRegister,
}