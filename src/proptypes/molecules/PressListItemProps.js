import { element, string, func } from 'prop-types'

export default {
    onClick: func,
    href: string,
    icon: element.isRequired,
    content: string.isRequired,
}