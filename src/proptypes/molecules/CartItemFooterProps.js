import { number, shape, func, bool } from 'prop-types'

export default {
    cartId: number.isRequired,
    minOrder: number.isRequired,
    quantity: number.isRequired,
    quantityClick: shape({
        add: func.isRequired,
        remove: func.isRequired,
    }).isRequired,
    removeClick: func.isRequired,
    isChecked: bool.isRequired,
    checkboxHandler: func.isRequired,
}