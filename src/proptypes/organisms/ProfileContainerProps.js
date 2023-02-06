import { bool, func, node } from 'prop-types'

export default {
    isEditMode: bool.isRequired,
    onSubmit: func.isRequired,
    children: node.isRequired,
}