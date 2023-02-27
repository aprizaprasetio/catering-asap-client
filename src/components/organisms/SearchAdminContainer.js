import React from 'react'
import AdminDashboardUser from 'components/molecules/AdminDashboardUser'
import SearchBar from 'components/molecules/SearchBar'
import SearcBarAdmin from './SearcBarAdmin'
import { Box } from '@mui/material'

const SearchAdminContainer = ({ display }) => {
  return (
    <Box sx={{display: display}}>
      <Box sx={{
        width: '100%',
        display: 'flex',
        borderRadius: 3,
        boxShadow: 3,
        background: '#537FE7',
        justifyContent: 'space-evenly'
      }}>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          width: '60%',
        }}>
          <SearcBarAdmin />
        </Box>
        <Box sx={{
        }}>
          <AdminDashboardUser />
        </Box>
      </Box>
    </Box >
  )
}

export default SearchAdminContainer