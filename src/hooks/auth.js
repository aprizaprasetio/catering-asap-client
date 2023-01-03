import React from 'react'
import axios from 'axios'

const BASE_URL = 'http://localhost:8000'

const getJwt = () => localStorage.getItem('JWT_AUTHENTICATION')

const storeJwt = token => localStorage.setItem('JWT_AUTHENTICATION', token)

const requestUser = async (email, password) => {
    // Backend Example
    const accounts = await axios.get(`${BASE_URL}/accounts`).then(response => response.data)
    const myAccount = accounts.find(account => {
        const isEmailExist = account.email === email
        const isPasswordExist = account.password === password
        return isEmailExist && isPasswordExist
    })

    if (!myAccount) return null
    return myAccount
}

export {
    getJwt,
    storeJwt,
    requestUser,
}