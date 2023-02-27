import { client, axios } from 'api/initiates/queryInitiate'
import { dropToken } from 'commands/api/tokenCommand'

const logout = () => {
    // This function will remove token from fetch headers and local storage
    // Also remove query user data
    dropToken()
    client.setQueryData(['user'], null)
    axios.defaults.headers.common['Authorization'] = null
}

const isUser = () => client.getQueryData(['user'])?.role === 'user'

export {
    logout,
    isUser,
}