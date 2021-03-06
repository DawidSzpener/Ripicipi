import React, { useState, useEffect } from 'react'

import './Search.scss'
import cheatSheet from '../../assets/pictures/conversion-chart.jpg'
import Identifier from '../../Components/UI/Identifier/Identifier'

import Aux from '../../hoc/Aux'
import axios from '../../axios-recipes'
import background from '../../assets/pictures/background8.jpeg'
import Recipe from '../../Components/Recipe/Recipe'
import KetoPic from '../../assets/pictures/keto1.jpeg'
import SearchBar from '../../Components/UI/SearchBar/SearchBar'
import Backdrop from '../../Components/UI/Backdrop/Backdrop'

const Search = (props) => {

  const [input, setInput] = useState('');
  const [defaultRecipeList, setDefaultRecipeList] = useState();
  const [recipeList, setRecipeList] = useState([]);
  const [showArrow, setShowArrow] = useState();
  const [displayedRecipe, setDisplayedRecipe] = useState();
  const [showSheet, setShowSheet] = useState();
  const [showBar, setShowBar] = useState(true);

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
    setInput(input);
    setRecipeList(filtered)
  }

  const hideCheatSheet = () => {
    setShowSheet(false)
  }

  let arrow = null
  if(showArrow) {
    arrow = 
    <Aux>
      <div className='RecipeArrow' onClick={() => {setShowArrow(false); setDisplayedRecipe(null); setShowSheet(false); setShowBar(true)}}></div>
      <div className='RecipeCheatSheetButton' onClick={() => setShowSheet(!showSheet)}></div>
    </Aux>
  }

  let sheet = null 
  if(showSheet) {
    sheet = 
    <Aux>
      <Backdrop show={true} clicked={() => hideCheatSheet()}/>
      <div className='RecipeCheatSheet'>
        <img alt='Error' src={cheatSheet}/>
      </div>
    </Aux>
  }

  let recipesAsCards = defaultRecipeList

  if(recipeList !== []) {
    recipesAsCards = 
    recipeList.map(recipe => {
      let title = recipe.title.charAt(0).toUpperCase() + recipe.title.toLowerCase().slice(1);
      let keto = null
      if(recipe.keto) {
        keto = <img src={KetoPic} id='keto-card' alt="bg"/>
      }
      return (
        <div className='SingleRecipeCard' key={recipe.title} onClick={() => {setDisplayedRecipe(recipe.title); setShowArrow(true)}}>
          <div className='SingleRecipeCardTitle'>{title}
            <div className='SingleRecipeCardKeto'>
              {keto}
            </div>
          </div>
            <img id='card-bg' src={recipe.background} alt="card_bg"></img>
        </div>
      )
    })
  }
    
  let shownRecipes = recipesAsCards
  let creator = null
  let bar = null

  if(showBar) {
    bar =
    <SearchBar 
      keyword={input}
      setKeyword={updateInput}
    />
  }

  if (displayedRecipe === null) {
    shownRecipes = recipesAsCards }

  recipeList.map(recipe => {
    if (recipe.title === displayedRecipe) {
      let preps = recipe.preparations.map(prep => Object.values(prep))
      let ings = recipe.ingredients.map(prep => Object.values(prep))

      if (displayedRecipe.creatorsPicture !== null) {
        creator = <Identifier 
        creatorsPicture={recipe.creatorsPicture}
        creatorsName={recipe.creatorsName}/>
      }

      bar = null

      window.scrollTo(0, 0);

      shownRecipes = 
      <Recipe
        showList={() => this.showRecipeList()}
        category={recipe.category}
        difficulty={recipe.difficulty}
        keto={recipe.keto}
        time={recipe.time}
        title={recipe.title} 
        picture={recipe.background}
        ingredients={[].concat.apply([], ings)}
        preparation={[].concat.apply([], preps)}
        creatorsName={recipe.creatorsName}
        creatorsPicture={recipe.creatorsPicture}
      />
    } 
    return null
  })

  return  (
    <div>
      <div className="bg-color">
        {creator}
        {arrow}
        {sheet}
        <img src={background} alt="bg" className="bg"></img>
      </div>
      <div className='SingleBreakfast'>
        {bar}
        {shownRecipes}
      </div>
    </div>
  )
}

export default Search
