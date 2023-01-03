import React from 'react'
import { FormControlLabel, Radio } from '@mui/material'
import PropTypes from 'prop-types'

const LabeledRadio = (props) => <FormControlLabel control={<Radio />} {...props} />

LabeledRadio.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
}

export default LabeledRadio