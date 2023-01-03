import React from 'react'
import { Box, Grid } from '@mui/material'
import SmallHeading from '../atoms/SmallHeading'
import MediumSubtitle from '../atoms/MediumSubtitle'
import ButtonWithEvent from '../molecules/ButtonWithEvent'
import PropTypes from 'prop-types'

const BoxForm = ({ title, subtitle, buttonLabel, handleSubmit, helper, children }) => {
  const buttonConfig = {
    label: buttonLabel,
    type: 'submit',
    fullWidth: true,
  }

  const boxStyle = {
    maxWidth: 400,
    minWidth: 270,
    paddingX: 4,
    paddingY: 6,
    border: 1,
    borderColor: 'primary.main',
    borderRadius: 4,
    boxShadow: 1,
  }

  return (
    <Box component="article" display="grid" justifyContent="center" gap={4} sx={boxStyle}>
      <Grid container direction="column">
        <SmallHeading content={title} />
        <MediumSubtitle content={subtitle} />
      </Grid>
      <form onSubmit={handleSubmit}>
        <Box display="grid" gap={6}>
          <Box display="grid" gap={2} sx={{ maxWidth: 300 }}>
            {children}
          </Box>
          <Box display="grid" justifyItems="center" gap={1}>
            <ButtonWithEvent config={buttonConfig} />
            {helper}
          </Box>
        </Box>
      </form >
    </Box >
  )
}

BoxForm.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  helper: PropTypes.element,
  children: PropTypes.node.isRequired,
}

export default BoxForm