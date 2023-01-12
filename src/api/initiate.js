import axiosOriginal from 'axios'
import { QueryClient } from '@tanstack/react-query'

// Initiate your query client
const client = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnMount: false,
            refetchOnWindowFocus: false,
        },
    },
})
// Initiate api base url
const axios = axiosOriginal.create({ baseURL: 'https://192.168.52.147:5001/api/' })
// All about web token
const getToken = () => localStorage.getItem('JWT_AUTHENTICATION')
const storeToken = token => localStorage.setItem('JWT_AUTHENTICATION', token)

export {
    client,
    axios,
    getToken,
    storeToken,
}