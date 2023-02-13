import React from 'react'
import UsersWrapperMobile from 'components/organisms/UsersWrapperMobile'
import UserItemMobile from 'components/organisms/UserItemMobile'

const UserListAdminMobile = () => {

    const userList = [
        [
            {
                id: 1,
                name: 'Noorsyawal',
                email: 'noorsyawal@gmail.com',
                phone: '0898452345123',
                image: 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/137409052/original/d472c30361632da1c8d8fa780f572807d78abd9f/cartoon-profile-picture-or-avatar.png',
                gender: 0,
            },
            {
                id: 2,
                name: 'Noor syawal',
                email: 'noorsyawal@gmail.com',
                phone: '0898452345123',
                image: 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/137409052/original/d472c30361632da1c8d8fa780f572807d78abd9f/cartoon-profile-picture-or-avatar.png',
                gender: 0,
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
            },
            {
                id: 4,
                name: 'Noorsyawal',
                email: 'noorsyawal@gmail.com',
                phone: '0898452345123',
                image: 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/137409052/original/d472c30361632da1c8d8fa780f572807d78abd9f/cartoon-profile-picture-or-avatar.png',
                gender: 0,
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
            },
            {
                id: 6,
                name: 'Noor',
                email: 'noor@gmail.com',
                phone: '0898452345123',
                image: 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/137409052/original/d472c30361632da1c8d8fa780f572807d78abd9f/cartoon-profile-picture-or-avatar.png',
                gender: 0,
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
            },
            {
                id: 8,
                name: 'Noor',
                email: 'noor@gmail.com',
                phone: '0898452345123',
                image: 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/137409052/original/d472c30361632da1c8d8fa780f572807d78abd9f/cartoon-profile-picture-or-avatar.png',
                gender: 0,
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
            },
            {
                id: 10,
                name: 'Noor',
                email: 'noor@gmail.com',
                phone: '0898452345123',
                image: 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/137409052/original/d472c30361632da1c8d8fa780f572807d78abd9f/cartoon-profile-picture-or-avatar.png',
                gender: 0,
            },
        ],
    ]


    return (
        <UsersWrapperMobile>
            {
                userList.map((userItem, index) => {
                    return (
                        <React.Fragment key={index}>
                            {
                                userItem.map(item => <UserItemMobile key={item.id} userBio={item} userContent={{ orderTotalPrice: 12000000 }} />)
                            }
                        </React.Fragment>
                    )
                })
            }

        </UsersWrapperMobile>
    )
}

export default UserListAdminMobile