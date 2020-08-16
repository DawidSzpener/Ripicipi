import React, { Component } from 'react'
import Recipe from '../../Recipe/Recipe'
import Aux from '../../../hoc/Aux'
import background from '../../../assets/pictures/background8.jpeg'
import axios from '../../../axios-recipes'
import './Breakfast.css'

class Breakfast extends Component {
  state = {
    recipeList: [],
    displayedRecipe: null,
    loading: true
  }

  componentDidMount() {
    axios.get('/recipes.json')
    .then(res => {
      const data = Object.values(res.data)
      const recipeList = data.map(recipe => {
        if(recipe.category === 'Breakfast') {
          return (
            <Recipe 
              key={recipe.title}
              title={recipe.title}
              picture={recipe.background}
              ingredients={Object.values(recipe.ingredients.map(ing => ing.ingredient))}
              preparation={Object.values(recipe.preparations.map(prep => prep.preparation))}
              category={recipe.category}
              difficulty={recipe.difficulty}
              keto={recipe.keto}
              time={recipe.time}
            />
          )
        } else { return null }
      })
      
      this.setState({recipeList: recipeList})
    })
    .catch (err => {
      console.log(err)
    })
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

export default Breakfast