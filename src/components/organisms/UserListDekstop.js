import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material'
import UserTableRowAdmin from './UserTableRowAdmin'


const UserListDekstop = () => {

    const userList = [
        [
            {
                id: 1,
                name: 'Noorsyawal',
                email: 'noorsyawal@gmail.com',
                phone: '0898452345123',
                image: 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/137409052/original/d472c30361632da1c8d8fa780f572807d78abd9f/cartoon-profile-picture-or-avatar.png',
                gender: 0,
                item: 53
            },
            {
                id: 2,
                name: 'Noor syawal',
                email: 'noorsyawal@gmail.com',
                phone: '0898452345123',
                image: 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/137409052/original/d472c30361632da1c8d8fa780f572807d78abd9f/cartoon-profile-picture-or-avatar.png',
                gender: 0,
                item: 53
            },
        ],
        [
            {
                id: 3,
                name: 'Noor Syawal',
                email: 'noorsyawal@gmail.com',
                phone: '0898452345123',
                image: 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/137409052/original/d472c30361632da1c8d8fa780f572807d78abd9f/cartoon-profile-picture-or-avatar.png',
                gender: 0,
                item: 53
            },
            {
                id: 4,
                name: 'Noorsyawal',
                email: 'noorsyawal@gmail.com',
                phone: '0898452345123',
                image: 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/137409052/original/d472c30361632da1c8d8fa780f572807d78abd9f/cartoon-profile-picture-or-avatar.png',
                gender: 0,
                item: 53
            },
        ],
        [
            {
                id: 5,
                name: 'syawal',
                email: 'syawal@gmail.com',
                phone: '0898452345123',
                image: 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/137409052/original/d472c30361632da1c8d8fa780f572807d78abd9f/cartoon-profile-picture-or-avatar.png',
                gender: 0,
                item: 53
            },
            {
                id: 6,
                name: 'Noor',
                email: 'noor@gmail.com',
                phone: '0898452345123',
                image: 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/137409052/original/d472c30361632da1c8d8fa780f572807d78abd9f/cartoon-profile-picture-or-avatar.png',
                gender: 0,
                item: 53
            },
        ],
        [
            {
                id: 7,
                name: 'syawal',
                email: 'syawal@gmail.com',
                phone: '0898452345123',
                image: 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/137409052/original/d472c30361632da1c8d8fa780f572807d78abd9f/cartoon-profile-picture-or-avatar.png',
                gender: 0,
                item: 53
            },
            {
                id: 8,
                name: 'Noor',
                email: 'noor@gmail.com',
                phone: '0898452345123',
                image: 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/137409052/original/d472c30361632da1c8d8fa780f572807d78abd9f/cartoon-profile-picture-or-avatar.png',
                gender: 0,
                item: 53
            },
        ],
        [
            {
                id: 9,
                name: 'syawal',
                email: 'syawal@gmail.com',
                phone: '0898452345123',
                image: 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/137409052/original/d472c30361632da1c8d8fa780f572807d78abd9f/cartoon-profile-picture-or-avatar.png',
                gender: 0,
                item: 53
            },
            {
                id: 10,
                name: 'Noor',
                email: 'noor@gmail.com',
                phone: '0898452345123',
                image: 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/137409052/original/d472c30361632da1c8d8fa780f572807d78abd9f/cartoon-profile-picture-or-avatar.png',
                gender: 0,
                item: 53
            },
        ],
    ]

    const display = {
        xs: 'none',
        md: 'block'
    }

    return (
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
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        userList.map((userItem, index) => {
                            return (
                                <React.Fragment key={index}>
                                    {
                                        userItem.map(item => <UserTableRowAdmin key={item.id} {...item}/>)
                                    }
                                </React.Fragment>
                            )
                        })
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default UserListDekstop