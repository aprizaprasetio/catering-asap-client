import React from 'react'
import DynamicNavbar from 'components/organisms/DynamicNavbar'
import CenterLayout from 'components/templates/CenterLayout'
import CartList from 'components/organisms/CartList'

const UserCart = () => {
  return (
    <>
      <DynamicNavbar>Keranjang</DynamicNavbar>
      <CenterLayout>
        <CartList />
      </CenterLayout>
    </>
  )
}
export default UserCart