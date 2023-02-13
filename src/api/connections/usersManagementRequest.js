import { axios } from 'api/initiates/queryInitiate'
import { authPath } from "api/initiates/pathInitiate"

const fetchUserList = async ({ pageParam = 1 }) => {
    const userList = await axios.get(authPath.root, {
        params: {
            PageNumber: pageParam,
            PageSize: 10,
        },
    })
    return userList.data.data
}

const deleteUser = async userId => {
    await axios.delete(authPath.userParam(userId))
}

export { fetchUserList, deleteUser }