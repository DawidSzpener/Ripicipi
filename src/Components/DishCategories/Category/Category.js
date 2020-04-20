import React, { Component } from 'react'
import Recipe from '../../Recipe/Recipe'
import picture from '../../../assets/pictures/background2.png'
import Button from '../../UI/Button/Button'
import Aux from '../../../hoc/Aux'
import './Category.css'

class Category extends Component {
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
    displayedRecipe: null,
    category: this.props.name
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
        <Button clicked={this.props.showList}>Categories</Button>
        <div className='Baking'>
          {shownRecipes}
        </div>
      </Aux>
    )
  }
}

export default Category
