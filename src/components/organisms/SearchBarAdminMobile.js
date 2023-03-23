import React from 'react'
import { useTrigger, useInput } from 'commands/builders/commonBuilder'
import useUserStore from 'factory/store/useUserStore'
import { Box, TextField, InputBase, alpha } from '@mui/material'
import { Search } from '@mui/icons-material'
import CloseAnimatedButton from 'components/atoms/CloseAnimatedButton'

const SearchBarAdminMobile = () => {
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
        width: '100%',
        paddingLeft: 2,
        fontSize: {
            xs: 20,
            md: 18,
        },
        color: 'white'
    }

    const iconStyle = {
        transition: 'all 1s',
        color: 'white',
    }
    return (
        <>
            <Box sx={{
                backgroundColor: '#537FE7',
                boxShadow: 3,
                borderRadius: 3
            }}>
                <Box sx={{
                    borderRadius: 10,
                    display: 'flex',
                    position: 'relative',
                    paddingX: 3,
                    alignItems: 'center',

                }}>
                    <Search sx={{ ...iconStyle, rotate: searchRotate ? '90deg' : '0deg', }} />
                    <InputBase
                        component="input"
                        placeholder="Pencarian user"
                        sx={inputStyle}
                        onFocus={searchTrigger}
                        onChange={searchValueChange}
                        onKeyDown={Event => {
                            if (Event.key !== 'Enter') return
                            searchTrigger()
                            setKeyword(searchValue)
                        }}
                        value={searchValue}
                    />
                    <CloseAnimatedButton onClick={searchValueClear} />
                </Box>
            </Box>
        </>
    )
}

export default SearchBarAdminMobile