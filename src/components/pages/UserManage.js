import React from 'react'
import ManageUserContainer from 'components/organisms/ManageUserContainer'
import ManageTab from 'components/templates/ManageTab'
import PrivateProfileTab from 'components/organisms/PrivateProfileTab'

const UserManage = () => {
    return (
        <ManageUserContainer>
            <ManageTab url="/profile" component={<PrivateProfileTab />} />
        </ManageUserContainer>
    )
}

export default UserManage