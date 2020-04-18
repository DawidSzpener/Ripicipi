import React, { Component } from 'react'
import './Recipe.css'
import Aux from '../../hoc/Aux'
import Button from '../UI/Button/Button'

class Recipe extends Component {
  state = {
    title: this.props.title,
    background: this.props.picture,
    ingredients: null,
    preparation: null,
    toggled: true,
    loading: true
  }

  componentDidMount() {
    this.setState({ loading: false, ingredients: this.props.ingredients, preparation: this.props.preparation })
  }

  photoToggle = () => {
    this.state.toggled ? this.setState({ toggled: false }) : this.setState({ toggled: true })
  }

  render() {
    let image = 
    <div className='Recipe'>
      <Button clicked={this.photoToggle}>Toggle</Button>
      <Button clicked={this.props.showList}>Go Back</Button>
      <p className='RecipeTitle'>{this.state.title}</p>
      <img src={this.state.background} alt="card_bg"></img>
    </div>

    if (!this.state.toggled) {
      image = 
      <div className='RecipeToggled'>
        <div style={{position: 'absolute'}}>
          <Button clicked={this.photoToggle}>Toggle</Button>
          <Button clicked={this.props.showList}>Go Back</Button>
        </div> 
        <p className='RecipeTitle'>{this.state.title}</p>
      </div>
    } else {
      image = 
      <div className='Recipe'>
        <div style={{position: 'absolute'}}>
          <Button clicked={this.photoToggle}>Toggle</Button>
          <Button clicked={this.props.showList}>Go Back</Button>
        </div>
        <p className='RecipeTitle'>{this.state.title}</p>
        <img src={this.state.background} alt="card_bg"></img>
      </div>
    }    

    let ingredients = null
    let preparations = null
    
    if (!this.state.loading) {
      ingredients = 
      <ol>
        {this.state.ingredients.map(ingredient => {
          return <li key={ingredient}>{ingredient}</li>
        })}
      </ol>

      preparations = 
      <ol>
      {this.state.preparation.map(step => {
        return <li key={step}>{step}</li>
      })}
      </ol>
    }

    return (   
     
      <Aux>
        {image}
        <div className='RecipeIngredients'>
          {ingredients}
        </div>
        <div className='RecipeInstructions'>
          {preparations}
        </div>
      </Aux>
    )
  }
}

export default Recipe