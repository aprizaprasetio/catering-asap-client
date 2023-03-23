import React from 'react'
import { Box } from '@mui/material'
import SearchBar from 'components/molecules/SearchBar'
import UserFilterListFoodDrinkMenu from 'components/organisms/UserFilterListFoodDrinkMenu'

const NavbarCenter = () => {
    return (
        <Box sx={{
            display: 'flex',
        }}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <SearchBar />
            </Box>
            {/* <UserFilterListFoodDrinkMenu /> */}
        </Box>
    )
}

export default NavbarCenter