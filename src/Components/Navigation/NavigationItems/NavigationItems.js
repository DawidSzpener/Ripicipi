import React from 'react'
import './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem'
import Dropdown from '../../UI/Dropdown/Dropdown'

const navigationItems = () => (
  <ul className='NavigationItems'>
    <NavigationItem link='/categories'>Recipes</NavigationItem>
    <NavigationItem link='/add'>New Recipe</NavigationItem>
    <Dropdown />
  </ul>
)

export default navigationItems