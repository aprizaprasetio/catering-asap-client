import React from 'react'
import { Box, InputBase, alpha, useTheme } from '@mui/material'
import { Search } from '@mui/icons-material'

const SearchBar = () => {
    const { white } = useTheme().palette.common

    const boxStyle = {
        paddingX: 1,
        display: 'flex',
        backgroundColor: alpha(white, 0.5),
        color: white,
        borderRadius: 3,
    }

    const iconStyle = {
        alignSelf: 'center',
    }

    const inputStyle = {
        paddingRight: {
            xs: 0,
            md: 1,
        },
        width: {
            xs: 'auto',
            md: 450,
            lg: 500,
        },
        paddingLeft: 1,
        fontSize: {
            xs: 20,
            md: 18,
        },
        color: white,
    }

    return (
        <Box sx={boxStyle}>
            <Search sx={iconStyle} />
            <InputBase components="div" placeholder="Pencarian" sx={inputStyle} />
        </Box>
    )
}

export default SearchBar