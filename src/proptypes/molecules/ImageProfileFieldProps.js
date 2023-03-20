import { shape, string, func } from 'prop-types'

export default {
    config: shape({
        name: string.isRequired,
        id: string.isRequired,
        value: string,
        onChange: func.isRequired,
        type: string.isRequired,
        accept: string.isRequired,
    }).isRequired
}