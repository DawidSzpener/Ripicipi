import React from 'react'
import './Toolbar.css'

const toolbar = (props) => {
  return (
    <div className='Toolbar'>
      <div className='Menu' onClick={props.clicked}>MENU</div>
      <p>logo</p>
      <p>navigation items</p>
    </div>
  )
}

export default toolbar