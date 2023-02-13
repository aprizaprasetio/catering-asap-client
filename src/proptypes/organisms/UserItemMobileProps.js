import { shape, string, number } from 'prop-types'

export default {
    userBio: shape({
        image: string.isRequired,
        name: string.isRequired,
        email: string.isRequired,
        // phone: number.isRequired,
        phone: string.isRequired,
    }).isRequired,
    userContent: shape({
        orderTotalPrice: number.isRequired,
    }).isRequired,
}