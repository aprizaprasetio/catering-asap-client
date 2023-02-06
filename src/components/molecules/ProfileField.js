import React from 'react'
import { Box, Typography } from '@mui/material'
import Field from 'components/molecules/Field'
import ProfileFieldProps from 'proptypes/molecules/ProfileFieldProps'

const ProfileField = ({ isEditMode, config }) => {
    return (
        isEditMode ?
            <Field config={config} />
            :
            (<Box>
                <Typography variant="h3" sx={{ fontSize: 14, fontWeight: 'medium' }}>
                    {config.label}
                </Typography>
                <Typography variant="body1" sx={{ fontSize: 16 }}>
                    {config.value}
                </Typography>
            </Box>)
    )
}

ProfileField.propTypes = ProfileFieldProps

export default ProfileField