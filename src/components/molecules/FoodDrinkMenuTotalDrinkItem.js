import { Box } from "@mui/system"
import { grey } from "@mui/material/colors"
import { Typography } from "@mui/material"
import WineBarIcon from '@mui/icons-material/WineBar';

const FoodDrinkMenuTotalDrinkItem = () => {

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
        display: 'flex',
        // position: 'relative',
        backgroundcolor: 'primary.dark',
        width: 500,
        // bottom: 1,
        color: 'white'
    }

    return (
        <Box sx={{
            backgroundColor: grey[100],
            width: '40%',
            // height: 80,
            borderRadius: 4,
            // ml: 0,
            // right: 15,
            // display: 'flex',
            // position: 'absolute',
            // zIndex: 0,
            // bottom: 15
        }}>
            <Box {...box}>
                <WineBarIcon {...head} />
                <Typography {...body}>
                    60
                </Typography>
            </Box>
        </Box>
    )

}
export default FoodDrinkMenuTotalDrinkItem