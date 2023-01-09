import React from 'react'
import axios from 'axios'

const BASE_URL_DUMMY = 'http://192.168.52.119:8000'
const BASE_URL = 'https://192.168.53.195:5001'

const getJwt = () => localStorage.getItem('JWT_AUTHENTICATION')

const storeJwt = token => localStorage.setItem('JWT_AUTHENTICATION', token)

const fetchUser = async (email, password) => {
    // Backend Example
    const userList = await axios.get(`${BASE_URL_DUMMY}/accounts`).then(response => response.data)
    const data = userList.find(account => {
        const isExist = (account.email === email) && (account.password === password)
        return isExist
    })

    if (!data) return null
    return data
}

const fetchRegister = async (email, password, gender) => {
    const genderEnum = {
        male: 0,
        female: 1,
    }
    const user = {
        email,
        password,
        gender: genderEnum[gender],
    }
    const data = await axios.post(`${BASE_URL}/api/Users`, user).then(response => response.data)
    return data
}

export {
    getJwt,
    storeJwt,
    fetchUser,
}