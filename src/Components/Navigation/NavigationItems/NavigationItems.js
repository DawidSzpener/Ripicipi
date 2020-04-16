import React from 'react'
import './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem'

const navigationItems = () => {
  return (
    <div className='NavigationItems'>
      <NavigationItem>Item 1</NavigationItem>
      <NavigationItem>Item 2</NavigationItem>
    </div>
  )
}

export default navigationItems