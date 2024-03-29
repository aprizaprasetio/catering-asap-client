import { shape, string, func, number, oneOfType } from 'prop-types'

export default {
    config: shape({
        name: string.isRequired,
        label: string.isRequired,
        value: oneOfType([string, number]).isRequired,
        onChange: func.isRequired,
        helperText: string,
    }),
}