import React from 'react'
import { Typography } from '@mui/material'
import SmallHeadingProps from 'proptypes/atoms/SmallHeadingProps'

const SmallHeading = ({ content }) => <Typography variant="h1" fontSize={24} fontWeight="bold">{content}</Typography>

SmallHeading.propTypes = SmallHeadingProps

export default SmallHeading