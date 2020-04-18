import React, { Component } from 'react'
import Recipe from '../../Recipe/Recipe'
import picture from '../../../assets/pictures/background2.png'
import './Baking.css'

class Baking extends Component {
  state = {
    recipeList: [
      <Recipe title='Testowy tytul 1' picture={picture}/>,
      <Recipe title='Testowy tytul 2' picture={picture}/>,
      <Recipe title='Testowy tytul 3' picture={picture}/>,
      <Recipe title='Testowy tytul 4' picture={picture}/>,
      <Recipe title='Testowy tytul 5' picture={picture}/>
    ],
    displayedRecipe: null
  }

  showRecipeList = () => {
    this.setState({ displayedRecipe: null })
  }

  render() {

    const recipesAsCards = 
      this.state.recipeList.map(recipe => {
        return (
          <div className='SingleRecipeCard' key={recipe.props.title} onClick={() => this.setState({displayedRecipe: recipe.props.title})}>
            <div className='SingleRecipeCardTitle'>{recipe.props.title}</div>
            <img src={recipe.props.picture} alt="card_bg"></img>
          </div>
        )
      })
      
      let shownRecipes = recipesAsCards

      if (this.state.displayedRecipe === null) {
        shownRecipes = recipesAsCards }

      this.state.recipeList.map(recipe => {
        if (recipe.props.title === this.state.displayedRecipe) {
          shownRecipes = <Recipe showList={() => this.showRecipeList()} title={recipe.props.title} picture={recipe.props.picture}/>
        } 
        return null
      })

    return (
      <div className='Baking'>
        {shownRecipes}
      </div>
    )
  }
}

export default Baking
