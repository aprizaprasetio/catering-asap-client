import { string, number } from 'prop-types'

export default {
    image: string.isRequired,
    name: string.isRequired,
    email: string.isRequired,
    // phone: number.isRequired,
    phone: string.isRequired,
}