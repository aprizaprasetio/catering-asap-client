import { arrayOf, shape, string, element } from 'prop-types'

export default {
    navbarData: arrayOf(
        shape({
            icon: element.isRequired,
            content: string.isRequired,
            href: string.isRequired,
        })
    ).isRequired,
}