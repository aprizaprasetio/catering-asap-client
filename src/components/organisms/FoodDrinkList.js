import React from 'react'
import { Grid } from '@mui/material'
import FoodDrinkItemUser from 'components/organisms/FoodDrinkItemUser'
import SkeletonList from './SkeletonList'
import { useFoodDrinkList2 } from 'api/hooks/catalogUserHook'

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
    const { data, isFetching, hasNextPage, fetchNextPage } = useFoodDrinkList2()

    const dispatchEventRefetch = () => {
        window.onscroll = () => {
            const { innerHeight, pageYOffset } = window
            const isBottom = (innerHeight + pageYOffset) >= document.body.offsetHeight
            if (isBottom && hasNextPage && !isFetching) fetchNextPage()
        }
    }

    return (
        <Grid onLoad={dispatchEventRefetch} container {...listConfig}>
            {
                data?.pages?.map((group, index) => {
                    return (
                        <React.Fragment key={index}>
                            {
                                group?.map(item => <FoodDrinkItemUser key={item.id} {...item} />)
                            }
                        </React.Fragment>
                    )
                })
            }
            {isFetching && <SkeletonList />}
        </Grid >
    )
}

export default FoodDrinkList