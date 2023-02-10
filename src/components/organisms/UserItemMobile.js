import React from 'react'
import UserItemMobileContainer from './UserItemMobileContainer'
import UserItemBioMobile from 'components/molecules/UserItemBioMobile'
import UserItemContent from 'components/molecules/UserItemContent'

const UserItemMobile = () => {
  return (
    <UserItemMobileContainer>
        <UserItemBioMobile />
        <UserItemContent />
    </UserItemMobileContainer>
  )
}

export default UserItemMobile