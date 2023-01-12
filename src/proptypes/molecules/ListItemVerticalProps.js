import { string, element, node } from 'prop-types'

export default {
    href: string.isRequired,
    icon: element.isRequired,
    children: node.isRequired,
}