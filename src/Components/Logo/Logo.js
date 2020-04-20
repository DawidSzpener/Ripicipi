import React from 'react'

import openBook from '../../assets/pictures/openbook.png'
import closedBook from '../../assets/pictures/closedbook.png'
import writingBook from '../../assets/pictures/writingbook.png'
import './Logo.css'

const logo = (props) => (
  <div className='Logo' >
    <img src={openBook} alt="Books" />
  </div>
)

export default logo