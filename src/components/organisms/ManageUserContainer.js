import React from 'react'
import { Box } from '@mui/material'
import CenterLayout from 'components/templates/CenterLayout'
import DynamicNavbar from 'components/organisms/DynamicNavbar'
import ManageUserSideBar from 'components/organisms/ManageUserSideBar'

const ManageUserContainer = ({ children }) => {
    return (
        <>
            <DynamicNavbar />
            <Box sx={{
                display: {
                    xs: 'grid',
                    md: 'flex',
                },
            }}>
                <ManageUserSideBar />
                <CenterLayout>
                    {children}
                </CenterLayout>
            </Box>
        </>
    )
}

export default ManageUserContainer