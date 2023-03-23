import React from 'react'
import { Grid, Skeleton } from '@mui/material'
import UsersWrapperMobile from 'components/organisms/UsersWrapperMobile'
import UserItemMobile from 'components/organisms/UserItemMobile'
import { useUserList } from 'api/hooks/usersManagementHook'
import LoadingFull from 'components/atoms/LoadingFull'

const SkeletonItemMobile = (
    <Grid item xs={6} sm={4}>
        <Skeleton
            variant="rounded"
            height={110}
            sx={{
                margin: 0,
            }}
        />
    </Grid>
)

const UserListAdminMobile = () => {
    const { data, isFetching, isLoading, hasNextPage, fetchNextPage } = useUserList()

    React.useEffect(() => {
        const refetch = () => {
            const { innerHeight, pageYOffset } = window
            const isBottom = (innerHeight + pageYOffset) >= document.body.offsetHeight
            console.info(!isFetching && (isBottom && hasNextPage))
            if (!isFetching && (isBottom && hasNextPage)) fetchNextPage()
        }

        // console.info(isFetching)

        window.addEventListener('scroll', refetch)
        return () => window.removeEventListener('scroll', refetch)
    }, [isFetching])

    return (
        <UsersWrapperMobile>
            {isFetching ? [...Array(5)].map(item => SkeletonItemMobile) : (
                data?.pages?.map((userItem, index) => {
                    return (
                        <React.Fragment key={index}>
                            {
                                userItem?.map(item => <UserItemMobile key={item.id} userBio={item} userContent={item} />)
                            }
                        </React.Fragment>
                    )
                })
            )}
            {(isFetching || isLoading) && <LoadingFull />}
        </UsersWrapperMobile>
    )
}

export default UserListAdminMobile