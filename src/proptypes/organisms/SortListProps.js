import { string, shape, func, bool } from 'prop-types'

export default {
    sortOptions: shape({
        checked: string,
        isAsc: bool.isRequired,
    }).isRequired,
    itemClick: func.isRequired,
    isVisible: bool.isRequired,
}