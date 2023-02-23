import React, { Children } from 'react'
import { Box, Icon, Typography } from '@mui/material'
import { blue, grey } from '@mui/material/colors'

const FoodDrinkMenuDynamic = ({ icon }) => {
    const box = {
        // mt: -1,
        // mx: 2,
    }
    const head = {
        // display: 'flex',
        // position: 'absolute',
        // backgroundcolor: 'primary.dark',
        // width: 500,
        // bottom: 22,

    }

    return (
        <Box sx={{
            backgroundColor: blue[50],
            paddingY: 1,
            // paddingX: 1,
            borderRadius: 4,
            width: '100%',
            justifyContent: 'left',
            alignItems: 'left',
            gap: 1,
            position: 'relative'
            // marginY: 2
            // marginY: 2,
            // width: '40%',
            // height: 80,
            // ml: 0,
            // display: 'flex',
            // // position: 'absolute',
            // zIndex: 0,
            // bottom: 15
        }}>
            {/* <Box {...box}> */}
            {/* <LunchDining sx={{
                
            }} /> */}
            <Typography sx={{
                fontWeight: 'bold',
                fontSize: 30,
                marginX: 2,
            }}>
                {icon}
                60
            </Typography>
            {/* </Box> */}
        </Box>
    )
}

export default FoodDrinkMenuDynamic