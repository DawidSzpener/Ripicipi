import React, {useState, useEffect} from 'react'
import { withRouter } from 'react-router-dom'

import './Toolbar.css'

import Aux from '../../../hoc/Aux'
import axios from '../../../axios-recipes'
import NavigationItems from '../NavigationItems/NavigationItems'
import SearchBar from '../../UI/SearchBar/SearchBar'

const Toolbar = (props) => {

  const [input, setInput] = useState('');
  const [defaultRecipeList, setDefaultRecipeList] = useState();
  const [recipeList, setRecipeList] = useState();

  const goToHomepage = () => {
    props.history.push('/')
  }

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

  return (
    <Aux>
      <div className='Toolbar'>
        <div className='Ricipici' onClick={goToHomepage}></div>
        <SearchBar 
          input={input} 
          onChange={updateInput}/>
        <NavigationItems />
        <div className='Menu' onClick={props.clicked}>MENU</div>
      </div>
      <div className='ToolbarBottom'></div>
    </Aux>
  )
}

export default withRouter(Toolbar)