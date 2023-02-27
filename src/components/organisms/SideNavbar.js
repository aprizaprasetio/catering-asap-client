import React from 'react'
import { Drawer, List } from '@mui/material'
import PressListItem2 from 'components/molecules/PressListItem2'
import SideNavbarProps from 'proptypes/organisms/SideNavbarProps'

const listStyle = {
    paddingX: 1,
    width: 100,
    display: {
        xs: 'none',
        sm: 'grid',
    },
    gap: 2,
    position: 'sticky',
}

const SideNavbar = ({ navbarData }) => {
    return (
        <Drawer variant="permanent" anchor="left">
            <List sx={listStyle}>
                {navbarData.map(item => <PressListItem2 {...item} key={item.href} />)}
            </List>
        </Drawer>
    )
}

SideNavbar.propTypes = SideNavbarProps

export default SideNavbar