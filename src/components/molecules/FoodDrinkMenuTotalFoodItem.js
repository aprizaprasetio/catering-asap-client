import { Box } from "@mui/system"
import { grey } from "@mui/material/colors"
import { Typography } from "@mui/material"
import LunchDiningIcon from '@mui/icons-material/LunchDining';

const FoodDrinkMenuTotalFoodItem = () => {
    const body = {
        fontWeight: 'bold',
        fontSize: 40,
    }
    const head = {
        backgroundColor: 'primary.dark',
        width: 500,
    }

    return (
        <Box sx={{
            backgroundColor: grey[100],
            width: '40%',
            height: 80,
            borderRadius: 4,
        }}>
            <Box>
                <LunchDiningIcon {...head} />
                <Typography {...body}>
                    60
                </Typography>
            </Box>
        </Box>
    )
}
export default FoodDrinkMenuTotalFoodItem