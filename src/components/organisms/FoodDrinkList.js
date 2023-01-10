import React from 'react'
import { Grid } from '@mui/material'
import FoodDrinkItemUser from './FoodDrinkItemUser'
import { useFoodDrinkList } from '../../api/catalogUser'

const listConfig = {
    spacing: 2,
    columns: {
        xs: 6,
        sm: 12,
        md: 16,
        lg: 20,
    },
}

const FoodDrinkList = () => {
    return (
        <Grid container {...listConfig}>
            {
                Array.from(Array(10)).map((_, index) => (
                    <FoodDrinkItemUser key={index} />
                ))
            }
        </Grid>
    )
    // const [data, status] = useFoodDrinkList()

    // if (status === 'loading') return null

    // return (
    //     <Grid container {...listConfig}>
    //         {
    //             data.map(item => <FoodDrinkItemUser key={item.id} {...item} />)
    //         }
    //     </Grid >
    // )
}

export default FoodDrinkList