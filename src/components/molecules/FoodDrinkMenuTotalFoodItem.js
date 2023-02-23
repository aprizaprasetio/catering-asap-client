import { Box } from "@mui/system"
import { grey } from "@mui/material/colors"
import { Typography } from "@mui/material"
import LunchDiningIcon from '@mui/icons-material/LunchDining';

const FoodDrinkMenuTotalFoodItem = () => {

    const box = {
        // mt: -1,
        // mx: 2,
    }
    const body = {
        fontWeight: 'bold',
        fontSize: 40,
        // display: 'flex',
        // top: 0
    }
    const head = {
        // display: 'flex',
        // position: 'absolute',
        backgroundColor: 'primary.dark',
        width: 500,
        // bottom: 22,
    }

    return (
        <Box sx={{
            backgroundColor: grey[100],
            width: '40%',
            height: 80,
            borderRadius: 4,
            // ml: 0,
            // display: 'flex',
            // position: 'absolute',
            // zIndex: 0,
            // bottom: 15
        }}>
            <Box {...box}>
                <LunchDiningIcon {...head} />
                <Typography {...body}>
                    60
                </Typography>
            </Box>
        </Box>
    )

}
export default FoodDrinkMenuTotalFoodItem