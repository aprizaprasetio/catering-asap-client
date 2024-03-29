import { Box, Paper, Stack, Typography, Skeleton } from '@mui/material'
import LunchDining from '@mui/icons-material/LunchDining'
import FoodDrinkMenuDynamic from 'components/organisms/FoodDrinkMenuDynamic'
import WineBarIcon from '@mui/icons-material/WineBar'
import { useFoodDrinkQuantity } from 'api/hooks/catalogAdminHook'

const FoodDrinkMenuTotal = () => {
    const { data, isLoading } = useFoodDrinkQuantity()

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
                <>
                    {isLoading ? [...Array(1)].map((item, index) => (

                        <Skeleton variant="circular" width={20} height={30} key={index} />
                    ))
                        :
                        (
                            <FoodDrinkMenuDynamic icon={<LunchDining />} quantity={data?.foodQuantity} />
                        )

                    }
                </>
                <>
                    {isLoading ? [...Array(1)].map((item, index) => (

                        <Skeleton variant="circular" width={20} height={30} key={index} />
                    ))

                        :
                        (
                            <FoodDrinkMenuDynamic icon={<WineBarIcon />} quantity={data?.drinkQuantity} />
                        )
                    }
                </>

            </Box>
        </Box >
    )
}
export default FoodDrinkMenuTotal