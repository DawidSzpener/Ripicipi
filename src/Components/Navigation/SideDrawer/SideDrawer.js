import React from 'react'

import './SideDrawer.scss'

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
      <NavigationItems clicked={props.closed}/>
    </div>
  )
}

export default sideDrawer
