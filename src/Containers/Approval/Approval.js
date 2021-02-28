import React, { Component } from 'react'

import './Approval.scss'

import Aux from '../../hoc/Aux'
import axios from '../../axios-recipes'
import background from '../../assets/pictures/background8.jpeg'
import Recipe from '../../Components/Recipe/Recipe'
import KetoPic from '../../assets/pictures/keto1.jpeg'

class Approval extends Component {
  state = {
      recipeList: [],
      displayedRecipe: null,
      showArrow: false,
  }

  componentDidMount() {  
    axios.get('/recipes.json')
    .then(res => {    
      let list = []
      const data = Object.values(res.data)
      const baking = Object.values(data[0])
      const breakfast = Object.values(data[1])
      const Desserts = Object.values(data[2])
      const Dinner = Object.values(data[3])
      const Liquids = Object.values(data[4])
      const Pizza = Object.values(data[5])
      const Salads = Object.values(data[6])
      const Sauces = Object.values(data[7])
      const Snacks = Object.values(data[8])
      const allRecipes = [...baking, ...breakfast, ...Desserts, ...Dinner, ...Liquids, ...Pizza, ...Salads, ...Sauces, ...Snacks]
      const filteredData = allRecipes.filter(recipe => recipe.valid === false)
      filteredData.map(recipe => {
        return (
          list.push(
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
          />)
        )
      })

      this.setState({recipeList: list})
    })
    .catch (err => {
      console.log(err)
    })
  }

  showRecipeList = () => {
    this.setState({ displayedRecipe: null })
  }

  getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
  }

  approveRecipe = (title, category) => {
    axios.get(`/recipes/${category}.json`)
    .then(res => {
      const dataValues = Object.values(res.data)
      const data = res.data

      let recipe = dataValues.filter(recipe => (recipe.title === title))
      recipe.map(r => recipe = r)

      let key = this.getKeyByValue(data, recipe)

      recipe.valid = true

      axios.put(`/recipes/${category}/${key}.json`, recipe)
    })
  }

  removeRecipe = (title, category) => {
    console.log('removed')
    console.log(title)
    console.log(category)
  }

  render() {

    let arrow = null
    if(this.state.showArrow) {
      arrow = 
      <Aux>
        <div className='RecipeArrow' onClick={() => this.setState ({ displayedRecipe: null, showArrow: false, showSheet: false })}></div>
      </Aux>
    }

  let recipesAsCards = null

  if(this.state.recipeList !== []) {
    recipesAsCards = 
    this.state.recipeList.map(recipe => {
      let title = recipe.props.title.charAt(0).toUpperCase() + recipe.props.title.toLowerCase().slice(1);
      let keto = null
      if(recipe.props.keto) {
        keto = <img src={KetoPic} id='keto-card' alt="bg"/>
      }
      return (
        <div className='ApproveCard'><div className='SingleRecipeCardApprove' key={recipe.props.title} onClick={() => this.setState({displayedRecipe: recipe.props.title, showArrow: true})}>
            <div className='SingleRecipeCardTitle'>{title}
              <div className='SingleRecipeCardKeto'>
                {keto}
              </div>
            </div>
            <button onClick={() => this.approveRecipe(recipe.props.title, recipe.props.category)} className='SingleRecipeCardButtonApprove'>Approve</button>
            <button onClick={() => this.removeRecipe(recipe.props.title, recipe.props.category)}  className='SingleRecipeCardButtonRemove'>Remove</button>
            <img id='card-bg' src={recipe.props.picture} alt="card_bg"></img>
          </div>
        </div>
      )
    })
  }
    
  let shownRecipes = recipesAsCards

  if (this.state.displayedRecipe === null) {
    shownRecipes = recipesAsCards }

  this.state.recipeList.map(recipe => {
    if (recipe.props.title === this.state.displayedRecipe) {

      window.scrollTo(0, 0);

      shownRecipes = 
      <Recipe
        showList={() => this.showRecipeList()}
        category={recipe.props.category}
        difficulty={recipe.props.difficulty}
        keto={recipe.props.keto}
        time={recipe.props.time}
        title={recipe.props.title} 
        picture={recipe.props.picture}
        ingredients={recipe.props.ingredients}
        preparation={recipe.props.preparation}/>
    } 
    return null
  })

    return  (
      <div>
        <div className="bg-color">
          {arrow}
          <img src={background} alt="bg" className="bg"></img>
        </div>
        <div className='SingleBreakfast'>
          {shownRecipes}
        </div>
      </div>
    )
  }
}

export default Approval
