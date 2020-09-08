import React, { Component } from 'react'
import Aux from '../../hoc/Aux'
import './WelcomeScreen.css'
import background from '../../assets/pictures/background7.png'

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
            <h3>Read the Recipe Before Beginning</h3>
            <h3>Weigh Your Ingredients Properly</h3>
            <h3>Always Have Ingredients Prepped</h3>
            <h3>Follow the Recipe</h3>
            <h3>Don’t Over-mix, Don’t Under-mix</h3>
            <h3>Don’t Open the Oven</h3>
            <h3>Allow to Cool Completely</h3>
            <h3>Store Properly</h3>
          </div>
        </div>
      </Aux>
    )
  }
}

export default Homescreen