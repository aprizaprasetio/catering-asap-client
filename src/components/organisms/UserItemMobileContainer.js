import React from 'react'
import { Box, Paper, Grid } from '@mui/material'
import { grey } from '@mui/material/colors'
import PopUp from 'components/molecules/PopUp'
import { useTrigger } from 'commands/builders/commonBuilder'
import UserItemMobilePopup from './UserItemMobilePopup'

const UserItemMobileContainer = ({ popupTrigger, children }) => {
    return (
        <>
            <Grid item xs={6} sm={4}>
                <Box
                    component={Paper}
                    onClick={popupTrigger}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                        padding: 1,
                        width: 'auto',
                        borderRadius: 3,
                        backgroundColor: grey[100],
                        boxShadow: 3,
                        cursor: 'pointer',
                        ":hover": {
                            backgroundColor: 'darkgray',
                            transition: '0.3s',
                        }
                    }}>{children}</Box>
            </Grid>
        </>
    )
}

export default UserItemMobileContainer