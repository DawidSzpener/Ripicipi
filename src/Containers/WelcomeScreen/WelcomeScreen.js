import React, { Component } from 'react'
import Aux from '../../hoc/Aux'
import './WelcomeScreen.css'
import favourite from '../../assets/pictures/favouriteflower.png'
import brown from '../../assets/pictures/brownflower.png'
import newrecipe from '../../assets/pictures/newrecipe.png'
import background from '../../assets/pictures/background8.jpeg'

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
        <div className="bg-color">
          <img src={background} alt="bg" className="bg"></img>
        </div>
        <div className='Homescreen'>
          <div className='Button1' onClick={this.goToCategories}><img src={brown} alt='bg'/></div>
          <div className='Button2' ><img src={favourite} alt='bg'/></div>
          <div className='Button3' onClick={this.goToAddRecipe}><img src={newrecipe} alt='bg'/></div>
        </div>
      </Aux>
    )
  }
}

export default Homescreen