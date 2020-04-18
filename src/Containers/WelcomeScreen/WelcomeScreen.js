import React from 'react'
import Aux from '../../hoc/Aux'
import './WelcomeScreen.css'
import Button from '../../Components/UI/Button/Button'

const homeScreen = () => {
  return (
    <Aux>
      <div className='Homescreen'>
        <div className='MiddleHomescreen'>
          <Button>Categories</Button>
        </div>
      </div>
    </Aux>
  )
}

export default homeScreen