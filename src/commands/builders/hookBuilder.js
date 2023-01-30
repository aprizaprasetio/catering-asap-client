import { useEffect } from 'react'
import { observerBuilder } from 'commands/builders/queryBuilder'
import { client } from 'api/initiates/queryInitiate'
import { useQuery } from '@tanstack/react-query'

const useStale = queryKey => {
    const { data: stale } = useQuery({
        queryKey: [queryKey],
        queryFn: () => client.getQueryData([queryKey]),
        initialData: client.getQueryData([queryKey]),
    })
    const setStale = value => client.setQueryData([queryKey], value)
    // Getter and setter query state (stale)
    return [stale, setStale]
}

const useSubscribe = queryKey => {
    const [stale] = useStale(queryKey)
    const observer = observerBuilder(queryKey)
    useEffect(() => {
        // Subscribe the query key, so that the value will updated every time
        // Do not forget set the query key data using useQuery or setQueryData
        const unsubscribe = observer.subscribe()
        // Basically useEffect return is for cleaning the function, that mean to stop
        return unsubscribe
    })

    return stale
}

export {
    useSubscribe,
    useStale,
}