import { QueryObserver } from '@tanstack/react-query'
import { client } from 'api/initiates/queryInitiate'

const observeUser = new QueryObserver(client, { queryKey: 'user' })

export {
    observeUser
}