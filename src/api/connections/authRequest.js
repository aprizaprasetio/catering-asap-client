import { axios } from 'api/initiate'
import { authPath } from 'api/path'

// Requesting a single user data by id as a primary key
const fetchUser = async id => {
    const user = await axios.get(authPath.userParam(id))
    return user.data.userDtos
}

// Requesting a new token when the user logged
const fetchToken = async user => {
    const token = await axios.post(authPath.token, user)
    return token.data
}

// Requesting the server to create a new user
const fetchRegister = async user => {
    // Object that convert string male or female to number 0 or 1
    const genderEnum = {
        male: 0,
        female: 1,
    }
    // Modifying string gender to enum 0 or 1
    user.gender = genderEnum[user.gender]
    const createdUser = await axios.post(authPath.register, user)
    return createdUser.data
}

export {
    fetchUser,
    fetchToken,
    fetchRegister,
}