import React from 'react'
import { Card, CardContent, CardActions, Box, Grid } from '@mui/material'
import BoxFormProps from 'proptypes/organisms/BoxFormProps'
import SmallHeading from 'components/atoms/SmallHeading'
import MediumSubtitle from 'components/atoms/MediumSubtitle'
import ButtonWithEvent from 'components/molecules/ButtonWithEvent'

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
        sm: 350,
      },
      margin: {
        xs: 0.66,
        sm: 'auto',
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

BoxForm.propTypes = BoxFormProps

export default BoxForm