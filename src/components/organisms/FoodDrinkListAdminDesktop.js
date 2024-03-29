import React from 'react'
import UsersWrapperMobile from './UsersWrapperMobile'
import FoodDrinkTableItem from './FoodDrinkTableItem'
import { useFoodDrinkList2 } from 'api/hooks/catalogUserHook'
import { Box, Grid, Table, TableCell, Skeleton, TableRow } from '@mui/material'
import SkeletonList from './SkeletonList'

const FoodDrinkListAdminDesktop = () => {
    const { data, isFetching, isLoading, hasNextPage, fetchNextPage } = useFoodDrinkList2()

    React.useEffect(() => {
        const refetch = () => {
            const { innerHeight, pageYOffset } = window
            const isBottom = (innerHeight + pageYOffset) >= document.body.offsetHeight
            if (!isFetching && (isBottom && hasNextPage)) fetchNextPage()
        }

        window.addEventListener('scroll', refetch)
        return () => window.removeEventListener('scroll', refetch)
    }, [isFetching])
    // const foodrink = [
    //     [
    //         {
    //             id: 1,
    //             name: 'Abdullah',
    //             price: '200000',
    //             minOrder: 20,
    //             description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, totam vitae veniam architecto nemo dolore ducimus ratione consequuntur, quaerat excepturi cum quos dignissimos ullam provident dolorum in. Quia, placeat voluptate.'
    //         },
    //         {
    //             id: 2,
    //             name: 'Abdullah',
    //             price: '200000',
    //             minOrder: 20,
    //             description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, totam vitae veniam architecto nemo dolore ducimus ratione consequuntur, quaerat excepturi cum quos dignissimos ullam provident dolorum in. Quia, placeat voluptate.'
    //         }
    //     ],
    //     [
    //         {
    //             id: 3,
    //             name: 'Abdullah',
    //             price: '200000',
    //             minOrde: '20',
    //             description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, totam vitae veniam architecto nemo dolore ducimus ratione consequuntur, quaerat excepturi cum quos dignissimos ullam provident dolorum in. Quia, placeat voluptate.'
    //         },
    //         {
    //             id: 4,
    //             name: 'Abdullah',
    //             price: '200000',
    //             minOrder: 20,
    //             description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, totam vitae veniam architecto nemo dolore ducimus ratione consequuntur, quaerat excepturi cum quos dignissimos ullam provident dolorum in. Quia, placeat voluptate.'
    //         }
    //     ]
    // ]

    // if (isFetchedAfterMount) return null

    // return (
    //     data?.pages?.map((group, index) => {
    //         return (
    //             <React.Fragment key={index}>
    //                 {
    //                     group?.map(item => <FoodDrinkTableItem key={item.id} {...item} />)
    //                 }
    //             </React.Fragment>
    //         )
    //     })
    // )

    return (
        // <Box >
        //     {
        <>
            {
                isLoading ? [...Array(5)].map((item, index) => (
                    <TableRow key={index}>
                        <TableCell>
                            <Skeleton variant="circular" width={56} height={56} />
                        </TableCell>
                        <TableCell width="100%" colSpan={7} padding={0}>
                            <Skeleton variant="rounded" width="100%" height={30} />
                        </TableCell>
                    </TableRow>

                )) :
                    (
                        data?.pages?.map((group, index) => {
                            return (
                                <React.Fragment key={index}>
                                    {
                                        group?.map(item => <FoodDrinkTableItem key={item.id} minOrder={item.min_Order} image_Url={item.image_Url} {...item} />)
                                    }
                                </React.Fragment>
                            )
                        })
                    )
            }
        </>


        //     }
        //     {(isFetching || isLoading) && <SkeletonList />}
        // </Box >

    )
}


export default FoodDrinkListAdminDesktop