import React from 'react'
import UserItemMobileContainer from './UserItemMobileContainer'
import UserItemBioMobile from 'components/molecules/UserItemBioMobile'
import UserItemContent from 'components/molecules/UserItemContent'
import UserItemMobilePopup from './UserItemMobilePopup'
import UserItemMobileProps from 'proptypes/organisms/UserItemMobileProps'
import PopUp from 'components/molecules/PopUp'
import { useTrigger } from 'commands/builders/commonBuilder'
import UserItemBioMobilePopup from 'components/molecules/UserItemBioMobilePopup'
import UserItemContentMobilePopup from 'components/molecules/UserItemContentMobilePopup'

const UserItemMobile = ({ userBio, userContent }) => {
  const [openPopup, setOpenPopup] = useTrigger()

  return (
    <UserItemMobileContainer popupTrigger={setOpenPopup}>
      <UserItemBioMobile {...userBio} />
      <UserItemContent {...userContent} />
      <PopUp openPopup={openPopup} setOpenPopup={setOpenPopup}>
        <UserItemBioMobilePopup {...userBio} />
        <UserItemContentMobilePopup {...userContent} />
      </PopUp>
    </UserItemMobileContainer>
  )
}

UserItemMobile.propTypes = UserItemMobileProps

export default UserItemMobile