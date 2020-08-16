import React, { Component } from 'react'
import './Recipe.css'
import Aux from '../../hoc/Aux'

class Recipe extends Component {
  state = {
    title: this.props.title,
    background: this.props.picture,
    ingredients: this.props.ingredients,
    preparation: this.props.preparatio,
    keto: this.props.keto,
    time: this.props.time,
    difficulty: this.props.difficulty,
    category: this.props.category,
    loading: true
  }

  componentDidMount() {
    this.setState({ 
      loading: false,
      ingredients: this.props.ingredients,
      preparation: this.props.preparation,
      keto: this.props.keto,
      time: this.props.time,
      difficulty: this.props.difficulty,
      category: this.props.category,
      title: this.props.title,
      background: this.props.picture })
  }

  render() {

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
        <div className='Recipe'>
          <p className='RecipeTitle'>{this.state.title}</p>
          <img src={this.state.background} alt="card_bg"></img>
        </div> 
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