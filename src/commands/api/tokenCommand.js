// All about web token
const getToken = () => localStorage.getItem('JWT_AUTHENTICATION') ?? ''
const storeToken = token => localStorage.setItem('JWT_AUTHENTICATION', token)
const dropToken = () => localStorage.removeItem('JWT_AUTHENTICATION')

export {
    getToken,
    storeToken,
    dropToken,
}