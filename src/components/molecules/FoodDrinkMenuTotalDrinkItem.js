import { Box } from "@mui/system"
import { grey } from "@mui/material/colors"
import { Typography } from "@mui/material"
import WineBarIcon from '@mui/icons-material/WineBar';

const FoodDrinkMenuTotalDrinkItem = () => {
    const body = {
        fontWeight: 'bold',
        fontSize: 40,
    }
    const head = {
        display: 'flex',
        backgroundcolor: 'primary.dark',
        width: 500,
        color: 'white'
    }

    return (
        <Box sx={{
            backgroundColor: grey[100],
            width: '40%',
            borderRadius: 4,
        }}>
            <Box >
                <WineBarIcon {...head} />
                <Typography {...body}>
                    60
                </Typography>
            </Box>
        </Box>
    )
}
export default FoodDrinkMenuTotalDrinkItem