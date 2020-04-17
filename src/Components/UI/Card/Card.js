import React from 'react'
import './Card.css'
import baking from '../../../assets/pictures/baking.png'
import breakfast from '../../../assets/pictures/breakfast.png'
import other from '../../../assets/pictures/other.png'
import dinner from '../../../assets/pictures/dinner.png'
import sweets from '../../../assets/pictures/sweets.png'
import supper from '../../../assets/pictures/supper.png'

import Aux from '../../../hoc/Aux'

const card = (props) => {
  let picture = null

  switch (props.picture) {
    case('breakfast'):
      picture = breakfast
    break
    case('baking'):
      picture = baking
    break
    case('sweets'):
      picture = sweets
    break
    case('other'):
      picture = other
    break
    case('dinner'):
      picture = dinner
    break
    case('supper'):
      picture = supper
    break
    default:
      picture = null
  }
  return (
  <Aux>
    <div className='Card' onClick={props.clicked}>
      <div className='Title'>{props.children}</div>
      <img src={picture} alt="card_bg"></img>
    </div>
  </Aux>
)}



export default card