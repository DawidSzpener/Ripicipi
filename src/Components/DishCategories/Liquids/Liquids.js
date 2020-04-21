import React, { Component } from 'react'
import Recipe from '../../Recipe/Recipe'
import picture from '../../../assets/pictures/background2.png'
import Aux from '../../../hoc/Aux'
import background from '../../../assets/pictures/background8.jpeg'

class Liquids extends Component {
  state = {
    recipeList: [
      <Recipe
        title='Testowy tytul 1'
        picture={picture}
        ingredients={['5g of salt', '2 table spoons of soya', '50g of almond flour']}
        preparation={['Take a look at this first', 'should be step 2', 'now eat at step 3']}/>,
      <Recipe
        title='Testowy tytul 2'
        picture={picture}
        ingredients={['5g of salt', '2 table spoons of soya', '50g of almond flour']}
        preparation={['Take a look at this first', 'should be step 2', 'now eat at step 3']}/>
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
          shownRecipes = 
          <Recipe
            showList={() => this.showRecipeList()}
            title={recipe.props.title} 
            picture={recipe.props.picture}
            ingredients={recipe.props.ingredients}
            preparation={recipe.props.preparation}/>
        } 
        return null
      })

    return (
      <Aux>
        <div className="bg-color">
          <img src={background} alt="bg" className="bg"></img>
        </div>
        <div className='SingleBreakfast'>
          {shownRecipes}
        </div>
      </Aux>
    )
  }
}

export default Liquids