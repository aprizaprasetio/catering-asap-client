import { QueryObserver } from '@tanstack/react-query'
import { client } from 'api/initiates/queryInitiate'

const observerBuilder = queryKey => {
    // Create new instance from QueryObserver
    const observer = new QueryObserver(client, {
        queryKey: [queryKey],
    })
    return observer
}

export {
    observerBuilder,
}