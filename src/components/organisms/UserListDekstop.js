import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material'
import UserTableRowAdmin from './UserTableRowAdmin'
import { useUserList } from 'api/hooks/usersManagementHook'
import LoadingFull from 'components/atoms/LoadingFull'

const UserListDekstop = () => {
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


    const display = {
        xs: 'none',
        md: 'block'
    }

    return (
        <>
            <TableContainer component={Paper} sx={{ display: display }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Profile</TableCell>
                            <TableCell align="left">Nama</TableCell>
                            <TableCell align="left">Email</TableCell>
                            <TableCell align="left">No Telepon</TableCell>
                            <TableCell align="left">Total Item</TableCell>
                            <TableCell align="left">Total Uang</TableCell>
                            <TableCell align="left">Gender</TableCell>
                            <TableCell align="left">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            data?.pages?.map((userItem, index) => {
                                return (
                                    <React.Fragment key={index}>
                                        {
                                            userItem?.map(item => <UserTableRowAdmin key={item.id} {...item} />)
                                        }
                                    </React.Fragment>
                                )
                            })
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            {(isFetching || isLoading) && <LoadingFull />}
        </>
    )
}

export default UserListDekstop