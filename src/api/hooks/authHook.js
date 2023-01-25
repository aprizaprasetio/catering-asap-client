import { useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { client } from 'api/initiates/queryInitiate'
import { fetchToken, fetchRegister } from 'api/connections/authRequest'
import { storeToken } from 'commands/api/tokenCommand'

const useLogin = () => {
    const navigate = useNavigate()
    // Initiate mutation for post request
    const mutation = useMutation({
        mutationKey: ['user'],
        mutationFn: fetchToken,
        onSuccess: res => {
            storeToken(res.token)
            client.setQueryData(['user'], res.data)
            navigate('/')
        }
    })
    return mutation
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
    useRegister,
}