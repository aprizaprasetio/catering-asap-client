import { axios, client } from 'api/initiates/queryInitiate'
import useUserStore from 'factory/store/useUserStore'
import { authPath } from 'api/initiates/pathInitiate'

const fetchUserList = async (pageParam, keyword) => {
    const userList = await axios.get(authPath.root, {
        params: {
            Keyword: keyword,
            PageNumber: pageParam,
            PageSize: 10,
        },
    })
    return userList.data
}

const deleteUser = async userId => {
    await axios.delete(authPath.userParam(userId))
}

export { fetchUserList, deleteUser }