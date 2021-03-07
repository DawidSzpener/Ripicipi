import React from 'react'
import { NavLink } from 'react-router-dom'

import './NavigationItem.scss'


const navigationItem = (props) => {
  return (
    <li className='NavigationItem' onClick={props.close}>
      <NavLink 
        to={props.link}
        exact
        activeClassName='active'>{props.children}
      </NavLink>
    </li>
  )
}

export default navigationItem
