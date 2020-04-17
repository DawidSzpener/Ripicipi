import React from 'react'
import './Toolbar.css'
import NavigationItems from '../NavigationItems/NavigationItems'

const toolbar = (props) => {
  return (
    <div className='Toolbar'>
      <NavigationItems />
      <p>Logo</p>
      <div className='Menu' onClick={props.clicked}>MENU</div>
    </div>
  )
}

export default toolbar