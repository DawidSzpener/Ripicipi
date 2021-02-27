import React from 'react'
import { withRouter } from 'react-router-dom'

import './Toolbar.css'

import Aux from '../../../hoc/Aux'
import NavigationItems from '../NavigationItems/NavigationItems'

const Toolbar = (props) => {

  const goToHomepage = () => {
    props.history.push('/dawid')
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

export default withRouter(Toolbar)
