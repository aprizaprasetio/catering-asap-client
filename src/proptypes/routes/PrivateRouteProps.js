import { element, oneOf } from 'prop-types'

export default {
    element: element.isRequired,
    role: oneOf(['admin', 'user']),
}