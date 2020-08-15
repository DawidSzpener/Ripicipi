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
      ingredients: [],
      preparations: [],
      title: 'text title',
      category: 'breakfast',
      background: 'https://i.imgur.com/Pgua1YZ.jpg',
      keto: true
    },
    showConfirmation: false
  }

  addIngredient = () => {
    this.setState((prevState) => ({
      ingredients: [...prevState.ingredients, {ingredient: ''}]
    })) 
  }

  addPreparation = () => {
    this.setState((prevState) => ({
      preparations: [...prevState.preparations, {prepartion: ''}]
    }))
  }

  handleSubmit = (event) => { 
    event.preventDefault() 

    const recipe = {
      tite: this.state.recipeForm.title,
      category: this.state.recipeForm.category,
      background: this.state.recipeForm.background,
      ingredients: this.state.recipeForm.ingredients,
      preparations: this.state.recipeForm.preparations,
      keto: this.state.recipeForm.keto
    }

    axios.post('/recipes.json', recipe)
      .then(res => {
        console.log(res)
      })
      .catch (err => {
        console.log(err)
      })

    this.setState({ showConfirmation: true})
  }

  inputChangedHandler = (event, inputIdentifier, idx) => {

    if(inputIdentifier === 'ingredients' || inputIdentifier === 'preparations') {
      const updatedForm = {
        ...this.state.inputIdentifier
      }

      let updatedFormElement = {
        ...updatedForm[idx]
      }

      updatedFormElement = {ingredient: event.target.value}
      updatedForm[idx] = updatedFormElement

      const updatedRecipeForm = {
        ...this.state.recipeForm
      }
      let updatedRecipeFormElement = {
        ...updatedRecipeForm[inputIdentifier]
      }
      
      updatedRecipeFormElement = updatedForm

      updatedRecipeForm[inputIdentifier] = updatedRecipeFormElement

      this.setState({recipeForm: updatedRecipeForm})
      console.log(this.state)
    }

    const updatedRecipeForm = {
      ...this.state.recipeForm
    }
    let updatedFormElement = {
      ...updatedRecipeForm[inputIdentifier]
    }
    updatedFormElement[idx] = event.target.value

    updatedRecipeForm[inputIdentifier] = updatedFormElement
    this.setState({recipeForm: updatedRecipeForm})
  }

  render() {

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
                this.state.ingredients.map((val, idx) => {
                  let ingredientId = `Ingredient${idx}`
                  return (
                    <Input
                      onChange={(event) => this.inputChangedHandler(event, 'ingredients', idx)}
                      inputtype='input' 
                      type="text"
                      key={ingredientId} 
                      name={ingredientId}
                      placeholder={`Ingredient ${idx + 1}`}/>
                  )
                })
              }
            </div>
            <div className='PreparationsForms'>
              {
                this.state.preparations.map((val, idx) => {
                  let preparationsId = `step${idx}`
                  return (
                    <Input
                      onChange={(event) => this.inputChangedHandler(event, 'preparations', idx)}
                      inputtype='input' 
                      type="text"
                      key={preparationsId}
                      name={preparationsId}
                      placeholder={`Step ${idx + 1}`}/>
                  )
                })
              }
            </div>
            <button className='AddFormSubmit' type='submit' value='Submit'>Submit</button>
          </form>
          <button className='PreparationsButton' onClick={this.addPreparation}>Add another step</button>
          <button className='IngredientsButton' onClick={this.addIngredient}>Add new ingredient</button>
        </div>
      </Aux>
    )
  }
}

export default AddRecipe