import React from 'react'
import { Box, TextField, InputBase, alpha } from '@mui/material'
import { Search } from '@mui/icons-material'
import { useTrigger, useInput } from 'commands/builders/commonBuilder'
import { useStale } from 'commands/builders/hookBuilder'
import { useQuery } from '@tanstack/react-query'
import CloseAnimatedButton from 'components/atoms/CloseAnimatedButton'
import useUserStore from 'factory/store/useUserStore'

const SearcBarAdmin = () => {
    const [searchRotate, searchRotateTrigger] = useTrigger()
    const [searchValue, searchValueChange, searchValueClear] = useInput()
    const { setKeyword } = useUserStore()

    const searchTrigger = () => {
        searchRotateTrigger()
    }

    const inputStyle = {
        paddingRight: {
            xs: 0,
            md: 1,
        },
        // width: {
        //     xs: 'auto',
        //     md: 450,
        //     lg: 500,
        // },
        width: '100%',
        paddingLeft: 2,
        fontSize: {
            xs: 20,
            md: 18,
        },
        marginY: 1,
        color: 'white'
    }

    const iconStyle = {
        transition: 'all 1s',
        marginLeft: 4,
        color: 'white',
    }

    return (
        <>
            <Box sx={{
                backgroundColor: alpha('#fff', 0.5),
                borderRadius: 3,
                width: '100%',
                display: 'flex',
                position: 'relative',
                marginX: 1,
                alignItems: 'center',
            }}>
                <Search sx={{ ...iconStyle, rotate: searchRotate ? '90deg' : '0deg', }} />
                <InputBase
                    component="input"
                    placeholder="Pencarian user"
                    sx={inputStyle}
                    onFocus={searchTrigger}
                    onChange={searchValueChange}
                    onKeyDown={ e => {
                        if (e.key !== 'Enter') return
                        searchTrigger()
                        setKeyword(searchValue)
                    }}
                    value={searchValue}
                />
                <CloseAnimatedButton onClick={searchValueClear} />
            </Box>
        </>
    )
}

export default SearcBarAdmin