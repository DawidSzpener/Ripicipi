import React from 'react'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'
import './Layout.css'

const layout = () => {
  return (
    <div className='Layout'>
      <Toolbar />
      <SideDrawer />
    </div>
  )
}

export default layout