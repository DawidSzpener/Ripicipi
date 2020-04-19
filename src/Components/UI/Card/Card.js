import React from 'react'
import './Card.css'
import baking from '../../../assets/pictures/baking.png'
import breakfast from '../../../assets/pictures/breakfast.jpeg'
import sauces from '../../../assets/pictures/sauces.png'
import dinner from '../../../assets/pictures/dinner.jpeg'
import desserts from '../../../assets/pictures/desserts.jpeg'
import pizza from '../../../assets/pictures/pizza.png'
import salads from '../../../assets/pictures/salads.png'
import snacks from '../../../assets/pictures/snacks.png'
import liquids from '../../../assets/pictures/liquids.png'

import Aux from '../../../hoc/Aux'

const card = (props) => {
  let picture = null

  switch (props.picture) {
    case('breakfast'):
      picture = breakfast
    break
    case('dinner'):
      picture = dinner
    break
    case('desserts'):
      picture = desserts
    break
    case('baking'):
      picture = baking
    break
    case('sauces'):
      picture = sauces
    break
    case('salads'):
      picture = salads
    break
    case('pizza'):
      picture = pizza
    break
    case('snacks'):
      picture = snacks
    break
    case('liquids'):
      picture = liquids
    break
    default:
      picture = null
  }
  return (
  <Aux>
    <div className='Card' onClick={props.clicked}>
      <img src={picture} alt="card_bg"></img>
    </div>
  </Aux>
)}



export default card