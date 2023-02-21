import React from 'react'
import { Box, useMediaQuery } from '@mui/material'
import CenterLayout from 'components/templates/CenterLayout'
import ManageUserSideBar from 'components/organisms/ManageUserSideBar'

const ManageUserContainer = ({ tabList, children }) => {
    const isMobile = useMediaQuery('(max-width:768px)')

    return (
        <Box sx={{
            display: isMobile ? 'grid' : 'flex',
        }}>
            <ManageUserSideBar tabList={tabList} />
            <CenterLayout>
                {children}
            </CenterLayout>
        </Box>
    )
}

export default ManageUserContainer