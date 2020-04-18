import React from 'react'
import Aux from '../../hoc/Aux'
import './WelcomeScreen.css'
import orange1 from '../../assets/pictures/green.png'
import orange2 from '../../assets/pictures/orange.png'
import orange3 from '../../assets/pictures/yellow.png'
import background from '../../assets/pictures/background4.png'

const homeScreen = () => {
  return (
    <Aux>
      <div className="bg-color">
        <img src={background} alt="bg" className="bg"></img>
      </div>
      <div className='Homescreen'>
        <div className='Button1'><img src={orange2} alt='bg'/></div>
        <div className='Button2'><img src={orange1} alt='bg'/></div>
        <div className='Button3'><img src={orange3} alt='bg'/></div>
      </div>
    </Aux>
  )
}

export default homeScreen