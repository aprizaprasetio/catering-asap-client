import React from 'react'
import DynamicNavbar from 'components/organisms/DynamicNavbar'
import ManageUserContainer from 'components/organisms/ManageUserContainer'
import ManageTab from 'components/templates/ManageTab'
import PrivateProfileTab from 'components/organisms/PrivateProfileTab'

const UserManage = () => {
    return (
        <>
            <DynamicNavbar>Profil</DynamicNavbar>
            <ManageUserContainer>
                <ManageTab url="/profile" component={<PrivateProfileTab />} />
            </ManageUserContainer>
        </>
    )
}

export default UserManage