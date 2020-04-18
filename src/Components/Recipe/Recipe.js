import React, { Component } from 'react'
import picture from '../../assets/pictures/background2.png'
import './Recipe.css'
import Aux from '../../hoc/Aux'
import Button from '../UI/Button/Button'

class Recipe extends Component {
  state = {
    toggled: true
  }

  photoToggle = () => {
    this.state.toggled ? this.setState({ toggled: false }) : this.setState({ toggled: true })
  }

  render() {
    let image = 
    <div className='Recipe'>
      <Button clicked={this.photoToggle}>Toggle</Button>
      <p className='RecipeTitle'>RECIPEE TITLE HERE</p>
      <img src={picture} alt="card_bg"></img>
    </div>

    if (!this.state.toggled) {
      image = 
      <div className='RecipeToggled'>
        <div style={{position: 'absolute'}}><Button clicked={this.photoToggle}>Toggle</Button></div>
      </div>
    } else {
      image = 
      <div className='Recipe'>
        <div style={{position: 'absolute'}}><Button clicked={this.photoToggle}>Toggle</Button></div>
        <p className='RecipeTitle'>RECIPEE TITLE HERE</p>
        <img src={picture} alt="card_bg"></img>
      </div>
    }

    return (
      <Aux>
        {image}
        <div className='RecipeIngredients'>
          <ol>
            <li>SALT: 20g</li>
            <li>SALT: 20g</li>
            <li>SALT: 20g</li>
            <li>SALT: 20g</li>
          </ol>
        </div>
        <div className='RecipeInstructions'>
          <ol>
            <li>SOMETHING</li>
            <li>SOMETHING</li>
            <li>SOMETHING</li>
            <li>SOMETHING</li>
          </ol>
        </div>
      </Aux>
    )
  }
}

export default Recipe