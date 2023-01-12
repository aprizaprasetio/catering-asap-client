import React from 'react'
import { FormControlLabel, Radio } from '@mui/material'
import LabeledRadioProps from 'proptypes/molecules/LabeledRadioProps'

const LabeledRadio = (props) => <FormControlLabel control={<Radio />} {...props} />

LabeledRadio.propTypes = LabeledRadioProps

export default LabeledRadio