import { string, number, shape, func, bool } from 'prop-types'

export default {
    cartBody: shape({
        image: string.isRequired,
        title: string.isRequired,
        price: number.isRequired,
    }).isRequired,
    cartFooter: shape({
        quantity: number.isRequired,
        quantityClick: shape({
            add: func.isRequired,
            remove: func.isRequired,
        }).isRequired,
        removeClick: func.isRequired,
        isChecked: bool.isRequired,
        checkboxHandler: func.isRequired,
    }).isRequired,
}