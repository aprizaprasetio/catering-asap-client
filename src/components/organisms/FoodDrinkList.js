import React from 'react'
import { Grid } from '@mui/material'
import FoodDrinkItemUser from 'components/organisms/FoodDrinkItemUser'
import LoadingFull from 'components/atoms/LoadingFull'
import { useFoodDrinkList } from 'api/hooks/catalogUserHook'

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
    const { data, isSuccess, isLoading } = useFoodDrinkList()
    if (isLoading) return <LoadingFull />
    if (isSuccess) return (
        <Grid container {...listConfig}>
            {
                data.map(item => <FoodDrinkItemUser key={item.id} {...item} />)
            }
        </Grid >
    )
}

export default FoodDrinkList