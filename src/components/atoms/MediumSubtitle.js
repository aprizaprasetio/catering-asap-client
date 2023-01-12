import React from 'react'
import { Typography } from '@mui/material'
import MediumSubtitleProps from 'proptypes/atoms/MediumSubtitleProps'

const MediumSubtitle = ({ content, children }) => <Typography variant="subtitle1" fontWeight="light">{content ?? children}</Typography>

MediumSubtitle.propTypes = MediumSubtitleProps

export default MediumSubtitle