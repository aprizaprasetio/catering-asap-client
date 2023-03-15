import { QueryObserver } from '@tanstack/react-query'
import { getToken } from 'commands/api/tokenCommand'
import { client } from 'api/initiates/queryInitiate'

const observerBuilder = queryKey => {
    // Create new instance from QueryObserver
    const observer = new QueryObserver(client, {
        queryKey: [queryKey],
    })
    return observer
}

const authHeaderBuilder = () => getToken() ? `Bearer ${getToken()}` : null

export {
    observerBuilder,
    authHeaderBuilder,
}