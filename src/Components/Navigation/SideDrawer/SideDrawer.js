import React from 'react'
import './SideDrawer.css'
import Backdrop from '../../UI/Backdrop/Backdrop'

const sideDrawer = (props) => {
  let attachedClasses = ['SideDrawer', 'Close']
  if (props.open) {
    attachedClasses = ['SideDrawer', 'Open']  
  }

  return (
    <div className={attachedClasses.join(' ')}>
        <Backdrop show={props.open} clicked={props.closed}/>
      <p>logo</p>
      <p>navigation items</p>
    </div>
  )
}

export default sideDrawer