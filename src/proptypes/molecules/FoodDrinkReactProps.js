import { objectOf, number } from 'prop-types'

export default {
    values: objectOf(number).isRequired,
}