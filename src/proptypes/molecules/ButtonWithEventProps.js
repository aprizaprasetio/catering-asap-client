import { objectOf, oneOfType, string, bool } from 'prop-types'

export default {
    config: objectOf(
        oneOfType([string, bool])
    ),
}