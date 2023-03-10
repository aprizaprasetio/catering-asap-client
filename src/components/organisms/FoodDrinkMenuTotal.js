import { Box, Paper, Stack, Typography } from '@mui/material'
import LunchDining from '@mui/icons-material/LunchDining'
import FoodDrinkMenuDynamic from 'components/organisms/FoodDrinkMenuDynamic'
import WineBarIcon from '@mui/icons-material/WineBar'

const FoodDrinkMenuTotal = () => {
    return (
        <Box
            component={Paper}
            sx={{
                paddingX: 1,
                paddingY: 1,
                borderRadius: 2,
                marginTop: - 10,

                marginX: {
                    xs: 1,
                    lg: 20
                },
                boxShadow: 2,
            }}>
            <Typography sx={{
                fontWeight: 500,
                fontSize: 10,
                marginX: 1,
                marginY: 1

            }}>Total Makanan Dan Minum</Typography>
            <Box component={Stack} direction="row" marginBottom={1} spacing={1}>
                <FoodDrinkMenuDynamic icon={<LunchDining />} />
                <FoodDrinkMenuDynamic icon={<WineBarIcon />} />
            </Box>
        </Box >
    )
}
export default FoodDrinkMenuTotal