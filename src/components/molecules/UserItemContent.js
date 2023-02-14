import React from 'react'
import { Box, IconButton, Typography } from '@mui/material'
import { Assignment } from '@mui/icons-material'
import { formatIDR } from 'commands/application/priceCommand'
import UserItemContentProps from 'proptypes/molecules/UserItemContentProps'

const UserItemContent = ({ orderTotalPrice }) => {
    return (
        <Box sx={{
            display: 'flex',
            gap: 1
        }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                width: 70,
                backgroundColor: 'white',
                borderRadius: 2,
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: 1,
                paddingTop: 1
            }}>
                <Typography sx={{
                    fontSize: 12,
                    fontWeight: 'bold'
                }} variant="body2">Total</Typography>
                <IconButton sx={{ padding: 0, fontSize: 12, fontWeight: 'bold' }} disabled><Assignment fontSize='small'/>53</IconButton>
            </Box>
            <Box sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: 'white',
                borderRadius: 2,
                justifyItems: 'center',
                alignItems: 'start',
                padding: 1,
                paddingLeft: 2,
                boxShadow: 1
            }}>
                <Typography sx={{ fontSize: 12, fontWeight: 'bold'}}>Total</Typography>
                <Typography sx={{fontSize: 10, fontWeight: 'bold'}}>{formatIDR(orderTotalPrice)}</Typography>
            </Box>
        </Box>
    )
}

UserItemContent.propTypes = UserItemContentProps

export default UserItemContent