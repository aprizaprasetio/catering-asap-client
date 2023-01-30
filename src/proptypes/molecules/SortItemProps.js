import { func, string, bool } from 'prop-types'

export default {
    onClick: func.isRequired,
    sortBy: string.isRequired,
    isAsc: bool.isRequired,
    checked: string,
    onDelete: func,
}