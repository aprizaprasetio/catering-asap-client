import React from 'react'
import { Avatar, Icon, Typography } from '@mui/material'
import { deepOrange } from '@mui/material/colors'
import { Box } from '@mui/system'
import { Male, Female, Man } from '@mui/icons-material'
import UserItemBioMobileProps from 'proptypes/organisms/UserItemBioMobileProps'

const UserItemBioMobile = ({ image, name, email, phone }) => {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
        }}>
            <Avatar
                sx={{
                    // bgcolor: deepOrange[500],
                    width: 32,
                    height: 32,
                    fontSize: 8,
                    top: 3,
                    left: 6,
                }}
                alt="Remy Sharp"
                src={image}
            >
                B
            </Avatar>
            <Box sx={{
                paddingTop: 1,
                marginLeft: 2
            }}>
                <Typography sx={{
                    fontSize: 12,
                    fontWeight: 'bold'
                }}
                    variant="h3">{name}</Typography>
                <Typography sx={{
                    fontSize: 9,
                    fontWeight: 600
                }}
                    variant="h3">{phone}</Typography>
            </Box>
            <Icon><Female fontSize='small'/></Icon>
        </Box>
    )
}

UserItemBioMobile.propTypes = UserItemBioMobileProps

export default UserItemBioMobile