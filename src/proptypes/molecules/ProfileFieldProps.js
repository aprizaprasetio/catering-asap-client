import { bool, shape, string, func, number, oneOfType } from 'prop-types'

export default {
    isEditMode: bool.isRequired,
    config: shape({
        name: string.isRequired,
        label: string.isRequired,
        value: oneOfType([string, number]).isRequired,
        helperText: string,
        onChange: func.isRequired,
    }).isRequired,
}