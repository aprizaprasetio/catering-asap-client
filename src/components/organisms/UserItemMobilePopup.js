import React from 'react'
import UserItemMobilePopupContainer from './UserItemMobilePopupContainer'
import UserItemBioMobilePopup from 'components/molecules/UserItemBioMobilePopup'
import UserItemContentMobilePopup from 'components/molecules/UserItemContentMobilePopup'

const UserItemMobilePopup = () => {
  return (
    <UserItemMobilePopupContainer>
      <UserItemBioMobilePopup />
      <UserItemContentMobilePopup />
    </UserItemMobilePopupContainer>
  )
}

export default UserItemMobilePopup