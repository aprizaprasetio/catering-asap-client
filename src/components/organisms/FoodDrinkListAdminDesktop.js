import React from 'react'
import UsersWrapperMobile from './UsersWrapperMobile'
import FoodDrinkTableItem from './FoodDrinkTableItem'
import { useFoodDrinkList2 } from 'api/hooks/catalogUserHook'

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

    return data?.pages?.map((group, index) => (
        <React.Fragment key={index}>
            {
                group?.map(item => <FoodDrinkTableItem key={item.id} minOrder={item.min_Order} {...item} />)
            }
        </React.Fragment>
    ))
}


export default FoodDrinkListAdminDesktop