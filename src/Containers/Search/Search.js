import React, { useState, useEffect } from 'react'

import './Search.scss'

import Aux from '../../hoc/Aux'
import axios from '../../axios-recipes'
import background from '../../assets/pictures/background8.jpeg'
import Recipe from '../../Components/Recipe/Recipe'
import KetoPic from '../../assets/pictures/keto1.jpeg'
import SearchBar from '../../Components/UI/SearchBar/SearchBar'

const Search = (props) => {

  const [input, setInput] = useState('');
  const [defaultRecipeList, setDefaultRecipeList] = useState();
  const [recipeList, setRecipeList] = useState();

  useEffect( () => {
    axios.get('/recipes.json')
    .then(res => {    
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
      const filteredData = allRecipes.filter(recipe => recipe.valid === true)

      setDefaultRecipeList(filteredData)
    })
  },[]);

  const updateInput = async (input) => {
    const filtered = defaultRecipeList.filter(recipe => {
      return recipe.title.toLowerCase().includes(input.toLowerCase())
    })
    console.log(recipeList)
    setInput(input);
    setRecipeList(filtered)
  }

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
      let title = recipe.props.title
      let keto = null
      if(recipe.props.keto) {
        keto = <img src={KetoPic} id='keto-card' alt="bg"/>
      }
      return (
        <div className='ApproveCard'>
          <button onClick={() => this.approveRecipe(recipe.props.title, recipe.props.category)} className='SingleRecipeCardButtonApprove'>Approve</button>
          <button onClick={() => this.removeRecipe(recipe.props.title, recipe.props.category)}  className='SingleRecipeCardButtonRemove'>Remove</button>
          <div className='SingleRecipeCardApprove' key={recipe.props.title} onClick={() => this.setState({displayedRecipe: recipe.props.title, showArrow: true})}>
            <div className='SingleRecipeCardTitle'>{title}
              <div className='SingleRecipeCardKeto'>
                {keto}
              </div>
            </div>
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
          <SearchBar 
            keyword={input}
            setKeyword={updateInput}
          />
          {shownRecipes}
        </div>
      </div>
    )
  }

export default Search
