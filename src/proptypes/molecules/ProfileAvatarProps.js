import { string, bool, object } from 'prop-types'

export default {
    image: string,
    isEditMode: bool.isRequired,
    config: object.isRequired,
}