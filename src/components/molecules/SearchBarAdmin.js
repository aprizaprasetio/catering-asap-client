import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { Box, InputBase, alpha } from '@mui/material'
import { Search } from '@mui/icons-material'
import { useTrigger, useInput } from 'commands/builders/commonBuilder'
import { useStale } from 'commands/builders/hookBuilder'
import SortList from 'components/organisms/SortList'
import SortItem from './SortItem'
import CloseAnimatedButton from 'components/atoms/CloseAnimatedButton'
import { height } from '@mui/system'


const SearchBarAdmin = () => {
    const [searchRotate, searchRotateTrigger] = useTrigger()
    const [isSortVisible, isSortVisibleTrigger] = useTrigger()
    const [sortOptions, setSortOptions] = React.useState({
        checked: '',
        isAsc: false,
    })
    const [searchValue, searchValueChange, searchValueClear] = useInput()

    useQuery({
        queryKey: ['search'],
        queryFn: () => {
            return {
                keyword: searchValue,
                sortBy: sortOptions.checked,
                isAsc: sortOptions.isAsc,
            }
        },
        initialData: {
            keyword: searchValue,
            sortBy: sortOptions.checked,
            isAsc: sortOptions.isAsc,
        },
    })

    const [, setSearchStale] = useStale('search')

    const boxStyle = {

        display: 'flex',
        position: 'relative',
        // paddingRight: 40,
        width: {
            lg: '83%',
            xs: '95%'
        },
        marginX: {
            // xs: 0.5,
            // lg: 20,
        },
        alignItems: 'center',
        backgroundColor: 'white',
        color: 'grey',
        borderRadius: 2,
        boxShadow: 1,
        height: {
            xs: 35,
            lg: 40
        },
    }

    const iconStyle = {
        transition: 'all 1s',
        marginX: 1,
        width: {
            xs: 15,
            lg: 20
        }
    }

    const inputStyle = {
        paddingRight: {
            xs: 0,
            md: 1,
        },
        width: '100%',
        // paddingLeft: 1,
        fontSize: {
            xs: 15,
            md: 18,
        },
        color: 'grey',
    }

    const searchTrigger = () => {
        searchRotateTrigger()
        isSortVisibleTrigger()
    }

    const itemClick = (item, type) => {
        if (type === 'delete')
            return () => setSortOptions({
                checked: '',
                isAsc: true,
            })
        return () => {
            searchTrigger()
            if (sortOptions.checked === item)
                return setSortOptions(current => {
                    return {
                        ...current,
                        isAsc: !current.isAsc
                    }
                })
            setSortOptions({
                checked: item,
                isAsc: true,
            })
        }
    }

    return (

        <Box sx={boxStyle}>
            <Search sx={{ ...iconStyle, rotate: searchRotate ? '90deg' : '0deg', }} />
            {
                sortOptions.checked &&
                <SortItem
                    onClick={itemClick(sortOptions.checked)}
                    onDelete={itemClick(sortOptions.checked, 'delete')}
                    sortBy={sortOptions.checked}
                    {...sortOptions}
                />
            }
            <InputBase
                component="input"
                placeholder="Pencarian"
                onFocus={searchTrigger}
                onChange={searchValueChange}
                onKeyDown={Event => {
                    if (Event.key !== 'Enter') return
                    searchTrigger()
                    setSearchStale({
                        keyword: searchValue,
                        sortBy: sortOptions.checked,
                        isAsc: sortOptions.isAsc,
                    })
                }}
                value={searchValue}
                sx={inputStyle}
            />
            <CloseAnimatedButton onClick={searchValueClear} />
            <SortList sortOptions={sortOptions} itemClick={itemClick} isVisible={isSortVisible} />
        </Box >
    )
    // return (
    //     <Box sx={boxStyle}>
    //         <Search sx={{ ...iconStyle, rotate: searchRotate ? '90deg' : '0deg', }} />
    //         {
    //             sortOptions.checked &&
    //             <SortChip
    //                 onClick={() => {
    //                     setSortOptions(current => {
    //                         return {
    //                             ...current,
    //                             isAsc: !current.isAsc
    //                         }
    //                     })
    //                 }}
    //                 onDelete={() => setSortOptions({
    //                     checked: null,
    //                     isAsc: true,
    //                 })}
    //                 sortBy={sortOptions.checked}
    //                 {...sortOptions}
    //             />
    //         }
    //         <InputBase
    //             component="input"
    //             placeholder="Pencarian"
    //             onFocus={() => {
    //                 if (panel) return
    //                 searchRotateTrigger()
    //                 panelTrigger()
    //             }}
    //             onMouse
    //             onChange={searchValueChange}
    //             onKeyDown={Event => {
    //                 if (Event.key !== 'Enter') return
    //                 setSearchStale(searchValue)
    //             }}
    //             value={searchValue}
    //             sx={inputStyle}
    //         />
    //         <IconButton
    //             onClick={() => {
    //                 closeRotateTrigger()
    //                 searchValueClear()
    //             }}
    //             sx={{ ...iconStyle, rotate: closeRotate ? '180deg' : '0deg', opacity: 0.5 }}
    //         >
    //             <Close />
    //         </IconButton>
    //         <Box
    //             onLoad={Event => setPanelStart(Event.target)}
    //             onClick={panelTrigger}
    //             sx={{
    //                 overflow: 'hidden',
    //                 position: 'absolute',
    //                 top: '100%',
    //                 width: '100%',
    //                 height: '200%',
    //             }}
    //         >
    //             <Slide container={panelStart} in={panel} direction="down">
    //                 <Stack

    //                     sx={{
    //                         position: 'absolute',
    //                         top: 0,
    //                         width: '100%',
    //                         padding: 1,
    //                         marginTop: 1,
    //                         borderRadius: 3,
    //                         boxShadow: 3,
    //                     }}
    //                     component={Paper}
    //                     direction="row"
    //                     spacing={1}
    //                 >
    //                     {
    //                         ['name', 'price', 'date'].map(item => {
    //                             const chipClick = () => {
    //                                 if (sortOptions.checked === item)
    //                                     return setSortOptions(current => {
    //                                         return {
    //                                             ...current,
    //                                             isAsc: !current.isAsc
    //                                         }
    //                                     })
    //                                 setSortOptions({
    //                                     checked: item,
    //                                     isAsc: true,
    //                                 })
    //                             }
    //                             return (
    //                                 <SortChip
    //                                     onClick={chipClick}
    //                                     onDelete={() => setSortOptions({
    //                                         checked: null,
    //                                         isAsc: true,
    //                                     })}
    //                                     sortBy={item}
    //                                     key={item}
    //                                     {...sortOptions}
    //                                 />
    //                             )
    //                         })
    //                     }
    //                 </Stack>
    //             </Slide>
    //         </Box>
    //     </Box >
    // )
}

export default SearchBarAdmin