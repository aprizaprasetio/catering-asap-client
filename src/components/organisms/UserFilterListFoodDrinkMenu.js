import React from 'react'
import { alpha, useTheme } from '@mui/material/styles'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { Box } from '@mui/material'
import useFilterListMenuUserStore from 'factory/store/useFilterListMenuUserStore'

// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//     PaperProps: {
//         style: {
//             maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//             width: 150,
//         },
//     },
// }

const names = [
    'Semua',
    'Makanan',
    'Minuman',
]

function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    }
}

const UserFilterListFoodDrinkMenu = () => {
    const { setFilterBy  } = useFilterListMenuUserStore()
    const theme = useTheme();
    const [personName, setPersonName] = React.useState('Semua')

    React.useEffect(() => {
        setFilterBy(personName)
    }, [personName])

    const handleChange = (event) => {
        const {
            target: { value },
        } = event
        setPersonName(value)
    }

    const style = {
        xs: 'auto',
        md: 140,
        lg: 180,
    }

    return (
        <>
            <Box>
                <FormControl sx={{ m: 1, width: style, }}>
                    <Select
                        value={personName}
                        onChange={handleChange}
                        sx={{
                            backgroundColor: alpha('#fff', 0.5),
                            color: 'white',
                            borderRadius: 3,
                            height: 42
                        }}
                    >
                        {names.map((name) => (
                            <MenuItem
                                key={name}
                                value={name}
                                style={getStyles(name, personName, theme)}
                            >
                                {name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Box>
        </>
    )
}

export default UserFilterListFoodDrinkMenu