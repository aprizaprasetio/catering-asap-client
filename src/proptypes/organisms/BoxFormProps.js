import { string, func, element, node } from 'prop-types'

export default {
    title: string.isRequired,
    subtitle: string.isRequired,
    buttonLabel: string.isRequired,
    handleSubmit: func.isRequired,
    helper: element,
    children: node.isRequired,
}