import React from 'react'
import AdminDashboardUser from 'components/molecules/AdminDashboardUser'
import SearchBar from 'components/molecules/SearchBar'
import { Box } from '@mui/material'

const SearchAdminContainer = () => {
  return (
    <Box sx={{
      width: 800,
      display: 'flex',
      flexDirection: 'column',
      gap: 3,
      position: 'absolute',
      top: '10%',
      left: '30%',
    }}>
      <AdminDashboardUser />
      <SearchBar />
    </Box>
  )
}

export default SearchAdminContainer