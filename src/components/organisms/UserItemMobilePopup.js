import React from 'react'
import UserItemMobilePopupContainer from './UserItemMobilePopupContainer'
import UserItemBioMobilePopup from 'components/molecules/UserItemBioMobilePopup'
import UserItemContentMobilePopup from 'components/molecules/UserItemContentMobilePopup'

const UserItemMobilePopup = ({userBio, userContent}) => {
  return (
    <UserItemMobilePopupContainer>
      <UserItemBioMobilePopup {...userBio}/>
      <UserItemContentMobilePopup {...userContent}/>
    </UserItemMobilePopupContainer>
  )
}

export default UserItemMobilePopup