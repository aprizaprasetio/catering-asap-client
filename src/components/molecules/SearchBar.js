import React from 'react'
import { Box, InputBase, alpha } from '@mui/material'
import { Search } from '@mui/icons-material'
import { useTrigger } from 'commands/builders/commonBuilder'

const SearchBar = () => {
    const [rotate, rotateTrigger] = useTrigger()

    const boxStyle = {
        paddingX: 1,
        display: 'flex',
        alignItems: 'center',
        backgroundColor: alpha('#fff', 0.5),
        color: 'white',
        borderRadius: 3,
    }

    const iconStyle = {
        rotate: rotate ? '90deg' : '0deg',
        transition: 'all',
        transitionDuration: '1s',
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
        color: 'white',
    }

    return (
        <Box sx={boxStyle}>
            <Search sx={iconStyle} />
            <InputBase component="input" placeholder="Pencarian" onFocus={rotateTrigger} onBlur={rotateTrigger} sx={inputStyle} />
        </Box>
    )
}

export default SearchBar