import { axios } from 'api/initiates/queryInitiate'
import { authPath } from 'api/initiates/pathInitiate'

const fetchEditUser = async edited => {
    await axios.put(authPath.root, edited)
    return edited
}

export {
    fetchEditUser
}