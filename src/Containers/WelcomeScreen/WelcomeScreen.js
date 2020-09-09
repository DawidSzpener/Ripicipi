import React, { Component } from 'react'
import Aux from '../../hoc/Aux'
import './WelcomeScreen.css'
import background from '../../assets/pictures/background7.png'
import comandements from '../../assets/pictures/commandments.png'

class Homescreen extends Component {
  goToCategories = () => {
    this.props.history.push('/categories')
  }

  goToAddRecipe = () => {
    this.props.history.push('/add')
  }

  render() {
    return (
      <Aux>
        <div className="Background">
          <img src={background} alt="bg" className="bg-homescreen"></img>
          <div className='Homescreen-buttons'>
            <img src={comandements} alt="bg" className="comandements"></img>
          </div>
        </div>
      </Aux>
    )
  }
}

export default Homescreen