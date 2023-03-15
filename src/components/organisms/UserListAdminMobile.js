import React from 'react'
import UsersWrapperMobile from 'components/organisms/UsersWrapperMobile'
import UserItemMobile from 'components/organisms/UserItemMobile'
import { useUserList } from 'api/hooks/usersManagementHook'
import LoadingFull from 'components/atoms/LoadingFull'

const UserListAdminMobile = () => {
    const { data, isFetching, isLoading, hasNextPage, fetchNextPage } = useUserList()

    React.useEffect(() => {
        const refetch = () => {
            const { innerHeight, pageYOffset } = window
            const isBottom = (innerHeight + pageYOffset) >= document.body.offsetHeight
            if (!isFetching && (isBottom && hasNextPage)) fetchNextPage()
        }

        window.addEventListener('scroll', refetch)
        return () => window.removeEventListener('scroll', refetch)
    }, [isFetching])

    return (
        <UsersWrapperMobile>
            {
                data?.pages?.map((userItem, index) => {
                    return (
                        <React.Fragment key={index}>
                            {
                                userItem?.map(item => <UserItemMobile key={item.id} userBio={item} userContent={item} />)
                            }
                        </React.Fragment>
                    )
                })
            }
            {(isFetching || isLoading) && <LoadingFull />}
        </UsersWrapperMobile>
    )
}

export default UserListAdminMobile