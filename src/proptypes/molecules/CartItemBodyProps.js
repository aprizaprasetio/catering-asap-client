import { string, number } from 'prop-types'

export default {
    image: string.isRequired,
    title: string.isRequired,
    price: number.isRequired,
    minOrder: number.isRequired,
}