import { arrayOf, shape, string, number } from 'prop-types'

export default {
    dataRow: arrayOf(shape({
        id: number.isRequired,
        name: string.isRequired,
        quantity: number.isRequired,
        price: number.isRequired,
        totalPrice: number.isRequired,
    })).isRequired,
}