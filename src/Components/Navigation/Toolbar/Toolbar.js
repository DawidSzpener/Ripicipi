import React from 'react'
import './Toolbar.css'
import NavigationItems from '../NavigationItems/NavigationItems'
import Aux from '../../../hoc/Aux'

const toolbar = (props) => {
  return (
    <Aux>
      <div className='Toolbar'>
        <NavigationItems />
        <p>Logo</p>
        <div className='Menu' onClick={props.clicked}>MENU</div>
      </div>
      <div className='ToolbarBottom'></div>
    </Aux>
  )
}

export default toolbar