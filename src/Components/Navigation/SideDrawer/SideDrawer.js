import React from 'react'
import './SideDrawer.css'
import Backdrop from '../../UI/Backdrop/Backdrop'
import NavigationItems from '../NavigationItems/NavigationItems'

const sideDrawer = (props) => {
  let attachedClasses = ['SideDrawer', 'Close']
  if (props.open) {
    attachedClasses = ['SideDrawer', 'Open']  
  }

  return (
    <div className={attachedClasses.join(' ')}>
        <Backdrop show={props.open} clicked={props.closed}/>
        <p>item</p>
        <NavigationItems />
    </div>
  )
}

export default sideDrawer