import React from 'react'
import { Box, Paper, Grid } from '@mui/material'
import { grey } from '@mui/material/colors'
import PopUp from 'components/molecules/PopUp'
import { useTrigger } from 'commands/builders/commonBuilder'
import UserItemMobilePopup from './UserItemMobilePopup'

const UserItemMobileContainer = ({ children }) => {

    const [openPopup, popupTrigger] = useTrigger()

    return (
        <>
            <Grid item xs={6}>
                <Box
                    component={Paper}
                    onClick={popupTrigger}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                        padding: 3,
                        width: 'auto',
                        backgroundColor: grey[400],
                        borderRadius: 3,
                        boxShadow: 3,
                        cursor: 'pointer',
                        ":hover": {
                            backgroundColor: 'darkgray',
                            scale: 3,
                            transition: '0.3s'
                        }
                    }}>{children}</Box>
            </Grid>

            <PopUp
                openPopup={openPopup}
                setOpenPopup={popupTrigger}>
                <UserItemMobilePopup />
            </PopUp>
        </>
    )
}

export default UserItemMobileContainer