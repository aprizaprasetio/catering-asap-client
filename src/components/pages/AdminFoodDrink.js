import * as React from 'react'
import FoodDrinkTableHeader from 'components/organisms/FoodDrinkTableHeader'
import FoodDrinkTableItem from 'components/organisms/FoodDrinkTableItem'
import FoodDrinkTableContainer from 'components/organisms/FoodDrinkTableContainer'
import AdminNavbar from 'components/organisms/AdminNavbar'
import CenterLayout from 'components/templates/CenterLayout'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'


function AdminFoodDrink() {


    return (
        <>
            <AdminNavbar />
            <CenterLayout admin >
                <Box color='error'>
                    <Typography>
                        Menu Admin
                    </Typography>
                </Box>
                <FoodDrinkTableContainer header={<FoodDrinkTableHeader />}>
                    <FoodDrinkTableItem />
                    <FoodDrinkTableItem />
                    <FoodDrinkTableItem />
                    <FoodDrinkTableItem />
                    <FoodDrinkTableItem />
                    <FoodDrinkTableItem />
                    <FoodDrinkTableItem />
                    <FoodDrinkTableItem />
                    <FoodDrinkTableItem />
                    <FoodDrinkTableItem />
                    <FoodDrinkTableItem />
                </FoodDrinkTableContainer>
            </CenterLayout>
        </>
    )
}

export default AdminFoodDrink
