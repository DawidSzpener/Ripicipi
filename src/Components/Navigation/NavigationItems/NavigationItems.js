import React from 'react'
import './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem'

const navigationItems = () => (
  <ul className='NavigationItems'>
    <NavigationItem link='/add'>New Recipe</NavigationItem>
    <NavigationItem link='/categories'>Recipes</NavigationItem>
    <NavigationItem link='/'>Homescreen</NavigationItem>
  </ul>
)

export default navigationItems