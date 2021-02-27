import React, { Component } from 'react'

import './DishCategory.css'
import KetoPic from '../../assets/pictures/keto1.jpeg'
import cheatSheet from '../../assets/pictures/conversion-chart.jpg'
import background from '../../assets/pictures/background8.jpeg'

import Recipe from '../Recipe/Recipe'
import Aux from '../../hoc/Aux'
import axios from '../../axios-recipes'
import Identifier from '../UI/Identifier/Identifier'
import Backdrop from '../UI/Backdrop/Backdrop'


class DishCategory extends Component {
  state = {
    recipeList: [],
    displayedRecipe: null,
    showArrow: false,
    showSheet: false,
    loading: true
  }

  componentDidMount() {
    axios.get(`/recipes/${this.props.category}.json`)
    .then(res => {
      let list = []
      const data = Object.values(res.data)
      const filteredData = data.filter(recipe => recipe.category === `${this.props.category}`)
      filteredData.map(recipe => {
        if(recipe.category === `${this.props.category}` && recipe.valid) {
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
              creatorsName={recipe.creatorsName}
              creatorsPicture={recipe.creatorsPicture}
            />)
          )
        } else { return null }
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

  hideCheatSheet = () => {
    this.setState({ showSheet: false })
  }

  render() {

    const recipesAsCards = 
      this.state.recipeList.map(recipe => {
        let title = recipe.props.title.toUpperCase()
        let keto = null
        if(recipe.props.keto) {
          keto = <img src={KetoPic} id='keto-card' alt="bg"/>
        }
        return (
          <div className='SingleRecipeCard' key={recipe.props.title} onClick={() => this.setState({displayedRecipe: recipe.props.title, showArrow: true})}>
            <div className='SingleRecipeCardTitle'>{title}
              <div className='SingleRecipeCardKeto'>
                {keto}
              </div>
            </div>
            <img id='card-bg' src={recipe.props.picture} alt="card_bg"></img>
          </div>
        )
      })
      
    let shownRecipes = recipesAsCards
    let creator = null

    if (this.state.displayedRecipe === null) {
      shownRecipes = recipesAsCards }

    this.state.recipeList.map(recipe => {
      if (recipe.props.title === this.state.displayedRecipe) {
        if (this.state.displayedRecipe.creatorsPicture !== null) {
          creator = <Identifier 
          creatorsPicture={recipe.props.creatorsPicture}
          creatorsName={recipe.props.creatorsName}/>
        }

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

    let sheet = null 
    if(this.state.showSheet) {
        sheet = 
        <Aux>
            <Backdrop show={true} clicked={() => this.hideCheatSheet()}/>
            <div className='RecipeCheatSheet'>
                <img alt='Error' src={cheatSheet}/>
            </div>
        </Aux>
    }

    let arrow = null
    if(this.state.showArrow) {
      arrow = 
      <Aux>
        <div className='RecipeArrow' onClick={() => this.setState ({ displayedRecipe: null, showArrow: false, showSheet: false })}></div>
        <div className='RecipeCheatSheetButton' onClick={() => this.setState ({ showSheet: !this.state.showSheet })}></div>
      </Aux>
    }

    return (
      <Aux>
        <div className="bg-color">
          <img src={background} alt="bg" className="bg"></img>
        </div>
          {creator}
          {arrow}
          {sheet}
        <div className="SingleBreakfast">
          {shownRecipes}
        </div>
      </Aux>
    )
  }
}

export default DishCategory