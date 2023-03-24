import { string, func, bool } from 'prop-types'

export default {
    isChoosen: bool,
    bankName: string.isRequired,
    bankNumber: string.isRequired,
    name: string.isRequired,
    onEdit: func,
    onRemove: func,
    onChoose: func,
}