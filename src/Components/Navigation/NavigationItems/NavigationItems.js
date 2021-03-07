import React from 'react'

import './NavigationItems.scss'
import magnifier from '../../../assets/pictures/magnifier.png'

import NavigationItem from './NavigationItem/NavigationItem'
import AnimatedDropdown from '../../UI/AnimatedDropdown/AnimatedDropdown'

const navigationItems = (props) => (
  <ul className='NavigationItems'>
    <NavigationItem close={props.clicked} link='/search'><img className="Magnifier" alt="magnifier" src={magnifier}/></NavigationItem>
    <NavigationItem close={props.clicked} link='/'>Recipes</NavigationItem>
    <NavigationItem close={props.clicked} link='/add'>New Recipe</NavigationItem>
    <AnimatedDropdown shape="rectangle" headerPosition="right" title="Categories" list={[
      {value: "breakfast", id: 1},
      {value: "dinner", id: 2},
      {value: "desserts", id: 3},
      {value: "baking", id: 4},
      {value: "sauces", id: 5},
      {value: "salads", id: 6},
      {value: "pizza", id: 7},
      {value: "snacks", id: 8},
      {value: "liquids", id: 9}
    ]}/>
  </ul>
)

export default navigationItems
