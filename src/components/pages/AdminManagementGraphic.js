import AdminNavbar from 'components/organisms/AdminNavbar'
import DynamicMobileHeader from 'components/organisms/DynamicMobileHeader'
import React from 'react'
import GraphicContainer from 'components/organisms/GraphicContainer'
import CenterLayout from 'components/templates/CenterLayout'
import CardItemGraphic from 'components/molecules/CardItemGraphic'
import Graphic from 'components/molecules/Graphic'
import GraphicContainerTablet from 'components/organisms/GraphicContainerTablet'

const AdminManagementGraphic = () => {
  return (
    <>
      <AdminNavbar />
      <CenterLayout admin header={ <DynamicMobileHeader title='Management Grafik' />}>
        <GraphicContainer />
        <GraphicContainerTablet />
      </CenterLayout>
    </>
  )
}

export default AdminManagementGraphic