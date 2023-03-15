import React from 'react'
import AdminDashboardUser from 'components/molecules/AdminDashboardUser'
import SearchBar from 'components/molecules/SearchBar'
import SearcBarAdmin from './SearcBarAdmin'
import { Box } from '@mui/material'

const SearchAdminContainer = ({ display }) => {
  return (
    <Box sx={{ display: display }}>
      <Box sx={{
        width: '100%',
        display: 'flex',
        borderRadius: 3,
        boxShadow: 3,
        background: '#537FE7',
        gap: 3
      }}>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          flex: 1,
        }}>
          <SearcBarAdmin />
        </Box>
        <Box sx={{
          marginRight: 5
        }}>
          <AdminDashboardUser />
        </Box>
      </Box>
    </Box >
  )
}

export default SearchAdminContainer