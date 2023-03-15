import axiosOriginal from 'axios'
import { QueryClient } from '@tanstack/react-query'
import { logout } from 'commands/application/authCommand'
import { authHeaderBuilder } from 'commands/builders/queryBuilder'

// Initiate your query client
const client = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnMount: false,
            refetchOnWindowFocus: false,
            onError: logout,
        },
    },
})

// Initiate api base url and auth headers
const axios = axiosOriginal.create({
    // baseURL: 'https://192.168.53.116:5000/api/',
    baseURL: 'https://localhost:5001/api/',
    headers: {
        Authorization: authHeaderBuilder(),
    },
})

export {
    client,
    axios,
}