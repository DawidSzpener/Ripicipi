import React from 'react'
import './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem'

const navigationItems = () => {
  return (
    <div className='NavigationItems'>
      <NavigationItem>New Recipe</NavigationItem>
      <NavigationItem>Favourites</NavigationItem>
      <NavigationItem>Recipes</NavigationItem>
    </div>
  )
}

export default navigationItems