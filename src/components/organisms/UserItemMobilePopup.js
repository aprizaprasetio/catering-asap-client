import React from 'react'
import UserItemMobilePopupContainer from './UserItemMobilePopupContainer'
import UserItemBioMobilePopup from 'components/molecules/UserItemBioMobilePopup'
import UserItemContentMobilePopup from 'components/molecules/UserItemContentMobilePopup'

const UserItemMobilePopup = ({ userBio, userContent }) => {
  const display = {
    xs: 'block',
    md: 'none'
  }
  return (
    <UserItemMobilePopupContainer display={display}>
      <UserItemBioMobilePopup {...userBio} />
      <UserItemContentMobilePopup {...userContent} />
    </UserItemMobilePopupContainer>
  )
}

export default UserItemMobilePopup