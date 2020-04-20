import React, { Component } from 'react'
import Aux from '../../hoc/Aux'
import Input from '../../Components/UI/Form/Form'
import './AddRecipe.css'
import Logo from '../../Components/Logo/Logo'
import axios from '../../axios-recipes'

class AddRecipe extends Component {
  state = {
    ingredients: [{ingredient: ''}, {ingredient: ''}, {ingredient: ''} ],
    preparations: [{preparation: ''}, {preparation: ''}, {preparation: ''} ],
  }

  addIngredient = (event) => {
    this.setState((prevState) => ({
      ingredients: [...prevState.ingredients, {ingredient: ''}]
    })) 
  }

  addPreparation = (event) => {
    this.setState((prevState) => ({
      preparations: [...prevState.preparations, {prepartion: ''}]
    }))
  }

  handleSubmit = (event) => { 
    event.preventDefault() 

    const recipe = {
      tite: 'text title',
      category: 'breakfast',
      background: 'https://i.imgur.com/Pgua1YZ.jpg',
      ingredients: {
        ingredient1: 'salad: 10g',
        ingredient2: 'sugar: 20g',
      },
      preparations: {
        step1: 'first in position',
        step2: 'a to 2 lala'
      },
      keto: true
    }

    axios.post('/recipes.json', recipe)
      .then(res => {
        console.log(res)
      })
      .catch (err => {
        console.log(err)
      })
  }

  render() {

    let {ingredients} = this.state
    let {preparations} = this.state


    return (
      <Aux>
        <Logo screen='add'/>
        <div className='AddRecipeForms'>
          <div className='bg-add'></div>
          <form onSubmit={this.handleSubmit}>
            <Input inputtype='input' type="text" name="title" placeholder="Recipe title"/>
            <Input inputtype='select' type="text" name="category" className='add-select'/>
            <Input inputtype='input' type="text" name="picture" placeholder="Picture URL"/>
            <div className='IngredientsForms'>
              {
                ingredients.map((val, idx) => {
                  let ingredientId = `Ingredient${idx}`
                  return (
                    <Input
                      inputtype='input' 
                      type="text"
                      key={ingredientId} 
                      name={ingredientId}
                      placeholder={`Ingredient ${idx + 1}`}/>
                  )
                })
              }
            </div>
            <button className ='IngredientsButton' onClick={this.addIngredient}>Add new ingredient</button>
            <div className='PreparationsForms'>
              {
                preparations.map((val, idx) => {
                  let preparationsId = `step${idx}`
                  return (
                    <Input
                      inputtype='input' 
                      type="text"
                      key={preparationsId} 
                      name={preparationsId}
                      placeholder={`Step ${idx + 1}`}/>
                  )
                })
              }
            </div>
            <button className='PreparationsButton' onClick={this.addPreparation}>Add another step</button>
            <button className='AddFormSubmit' type='submit' value='Submit'>Submit</button>
          </form>
        </div>
      </Aux>
    )
  }
}

export default AddRecipe