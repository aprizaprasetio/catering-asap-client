import React from 'react'
import { Box, Avatar, Typography } from '@mui/material'
import Field from 'components/molecules/Field'
import ProfileAvatarProps from 'proptypes/molecules/ProfileAvatarProps'

const ProfileAvatar = ({ image, isEditMode, config }) => {
    return (
        <Box sx={{
            display: 'grid',
            gap: 1,
            justifyContent: 'center',
            justifyItems: 'center',
        }}>
            <Avatar src={image || undefined} sx={{
                width: 100,
                height: 100,
            }}>
                {image ? null : <Person />}
            </Avatar>
            {
                isEditMode ?
                    <Field config={config} />
                    :
                    <Typography variant="body1" sx={{
                        fontSize: 18,
                        fontWeight: 'bold',
                    }}>
                        {config.value}
                    </Typography>
            }
        </Box>
    )
}

ProfileAvatar.propTypes = ProfileAvatarProps

export default ProfileAvatar