import { shape, string, func } from 'prop-types'

export default {
    config: shape({
        name: string.isRequired,
        label: string.isRequired,
        value: string.isRequired,
        onChange: func.isRequired,
    }),
}