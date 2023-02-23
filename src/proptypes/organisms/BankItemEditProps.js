import { bool, func, number, oneOf, shape, string } from 'prop-types'

export default {
    open: bool.isRequired,
    openTrigger: func.isRequired,
    values: shape({
        bankName: string.isRequired,
        bankNumber: string.isRequired,
        name: string.isRequired,
    }).isRequired,
    type: oneOf(['edit', 'add']).isRequired,
}