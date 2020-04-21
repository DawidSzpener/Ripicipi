import React from 'react'
import './Toolbar.css'
import NavigationItems from '../NavigationItems/NavigationItems'
import { withRouter } from 'react-router-dom'
import Aux from '../../../hoc/Aux'

const toolbar = (props) => {

  const goToHomepage = () => {
    props.history.push('/')
  }

  return (
    <Aux>
      <div className='Toolbar'>
        <div className='Ricipici' onClick={goToHomepage}></div>
        <NavigationItems />
        <div className='Menu' onClick={props.clicked}>MENU</div>
      </div>
      <div className='ToolbarBottom'></div>
    </Aux>
  )
}

export default withRouter(toolbar)