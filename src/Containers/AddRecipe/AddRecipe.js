import React, { Component } from 'react'
import Aux from '../../hoc/Aux'
import Input from '../../Components/UI/Form/Form'
import './AddRecipe.css'
import axios from '../../axios-recipes'

class AddRecipe extends Component {
  state = {
    ingredients: [{ingredient: ''}, {ingredient: ''}, {ingredient: ''} ],
    preparations: [{preparation: ''}, {preparation: ''}, {preparation: ''} ],
    recipeForm: {
      title: 'text title',
      category: 'breakfast',
      background: 'https://i.imgur.com/Pgua1YZ.jpg',
      keto: true
    }
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
    console.log(this.state.recipeForm)
  }

  handleSubmit = (event) => { 
    event.preventDefault() 

    const recipe = {
      tite: this.state.recipeForm.title,
      category: this.state.recipeForm.category,
      background: this.state.recipeForm.background,
      ingredients: this.state.ingredients,
      preparations: this.state.preparations,
      keto: this.state.recipeForm.keto
    }

    axios.post('/recipes.json', recipe)
      .then(res => {
        console.log(res)
      })
      .catch (err => {
        console.log(err)
      })
  }

  inputChangedHandler = (event, inputIdentifier) => {
    const updatedRecipeForm = {
      ...this.state.recipeForm
    }
    let updatedFormElement = {
      ...updatedRecipeForm[inputIdentifier]
    }

    updatedFormElement = event.target.value
    updatedRecipeForm[inputIdentifier] = updatedFormElement
    this.setState({recipeForm: updatedRecipeForm})
    console.log(this.state)
  }

  render() {

    let {ingredients} = this.state
    let {preparations} = this.state


    return (
      <Aux>
        <div className='AddRecipeForms'>
          <div className='bg-add'></div>
          <form onSubmit={this.handleSubmit}>
            <Input inputtype='input' type="text" onChange={(event) => this.inputChangedHandler(event, 'title')} name="title" placeholder="Recipe title"/>
            <Input inputtype='select' type="text" onChange={(event) => this.inputChangedHandler(event, 'category')} name="category" className='add-select'/>
            <Input inputtype='input' type="text" onChange={(event) => this.inputChangedHandler(event, 'background')} name="picture" placeholder="Picture URL"/>
            <div className='IngredientsForms'>
              {
                ingredients.map((val, idx) => {
                  let ingredientId = `Ingredient${idx}`
                  return (
                    <Input
                      onChange={(event) => this.inputChangedHandler(event, ingredientId)}
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
                      onChange={(event) => this.inputChangedHandler(event, preparationsId)}
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