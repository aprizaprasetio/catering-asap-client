import React from 'react'
import { Card, CardContent, CardActions, Box, Grid } from '@mui/material'
import SmallHeading from '../atoms/SmallHeading'
import MediumSubtitle from '../atoms/MediumSubtitle'
import ButtonWithEvent from '../molecules/ButtonWithEvent'
import PropTypes from 'prop-types'

const BoxForm = ({ title, subtitle, buttonLabel, handleSubmit, helper, children }) => {
  const buttonConfig = {
    label: buttonLabel,
    type: 'submit',
  }

  const cardConfig = {
    component: 'form',
    onSubmit: handleSubmit,
    sx: {
      paddingX: {
        xs: 1,
        md: 4,
      },
      paddingY: 6,
      width: {
        md: 350,
      },
      display: 'grid',
      gap: 4,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 4,
      boxShadow: 6,
      boxSizing: 'border-box',
    },
  }

  const contentStyle = {
    display: 'grid',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
  }

  const footerStyle = {
    display: 'grid',
    alignItems: 'center',
    gap: 2,
  }

  return (
    <Card {...cardConfig}>
      <CardContent sx={contentStyle}>
        <Box component="header">
          <SmallHeading content={title} />
          <MediumSubtitle content={subtitle} />
        </Box>
        <Box display="grid" gap={2}>
          {children}
        </Box>
      </CardContent>
      <CardActions sx={footerStyle}>
        <ButtonWithEvent config={buttonConfig} />
        {helper}
      </CardActions>
    </Card>
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