import React from 'react'
import { Box } from '@mui/material'
import { Person } from '@mui/icons-material'
import { useStale } from 'commands/builders/hookBuilder'

const AvatarIcon = () => {
    const [user] = useStale('user')

    return user?.avatar ? (
        <Box
            component="img"
            src={user.avatar}
            sx={{
                width: 25,
                height: 25,
                objectFit: 'cover',
                borderRadius: '100%',
            }}
        />
    ) : <Person />
}

export default AvatarIcon