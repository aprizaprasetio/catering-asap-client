import React from 'react'
import { Card, CardContent, CardActions, Button } from '@mui/material'
import ProfileContainerProps from 'proptypes/organisms/ProfileContainerProps'

const ProfileContainer = ({ isEditMode, onSubmit, children }) => {
    return (
        <Card
            onSubmit={onSubmit}
            component="form"
            sx={{
                paddingY: 3,
                position: 'relative',
                borderRadius: 3,
                boxShadow: 6,
            }}>
            <CardContent sx={{
                display: 'grid',
                gap: 3,
            }}>
                {children}
            </CardContent>
            {
                isEditMode &&
                <CardActions>
                    <Button variant="contained" type="submit">Ubah</Button>
                </CardActions>
            }
        </Card >
    )
}

ProfileContainer.propTypes = ProfileContainerProps

export default ProfileContainer