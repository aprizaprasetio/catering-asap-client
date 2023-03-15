import { Box } from '@mui/material'
import React from 'react'
import UsersDashboardMobile from 'components/molecules/UsersDashboardMobile'
import SearchBarAdminMobile from './SearchBarAdminMobile'

const SearchContainerAdminMobile = () => {
    const display = {
        xs: 'block',
        md: 'none'
    }

    return (
        <>
            <Box sx={{ display: display }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1
                }}>
                    <UsersDashboardMobile />
                    <SearchBarAdminMobile />
                </Box>
            </Box>
        </>
    )
}

export default SearchContainerAdminMobile