import React from 'react'

import openBook from '../../assets/pictures/openbook.png'
import closedBook from '../../assets/pictures/closedbook.png'
import writingBook from '../../assets/pictures/writingbook.png'
import { withRouter } from 'react-router-dom'
import './Logo.css'

const logo = (props) => {
  const goToHomepage = () => {
    props.history.push('/')
  }

  let picture = null

  if (props.screen === 'add') {
    picture = writingBook
  } else if (props.screen === 'categories') {
    picture = openBook
  } else {
    picture = closedBook
  }

  return (
    <div className='Logo' onClick={goToHomepage}>
      <img src={picture} alt="Books" style={props.style}/>
    </div>
  )
}

export default withRouter(logo)