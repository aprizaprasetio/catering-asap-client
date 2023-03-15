import { string, func } from 'prop-types'

export default {
    bankName: string.isRequired,
    bankNumber: string.isRequired,
    name: string.isRequired,
    onEdit: func,
    onRemove: func,
}