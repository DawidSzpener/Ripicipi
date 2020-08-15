import React, { Component } from 'react'
import Aux from '../../hoc/Aux'
import Input from '../../Components/UI/Form/Form'
import './AddRecipe.css'
import axios from '../../axios-recipes'
import Modal from '../../Components/UI/Modal/Modal'

class AddRecipe extends Component {
  state = {
    ingredients: [{ingredient: ''}, {ingredient: ''}, {ingredient: ''} ],
    preparations: [{preparation: ''}, {preparation: ''}, {preparation: ''} ],
    recipeForm: {
      ingredients: [],
      preparations: [],
      title: '',
      category: 'Breakfast',
      background: '',
      keto: true
    },
    showConfirmation: false,
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

    // axios.post('/recipes.json', recipe)
    //   .then(res => {
    //     console.log(res)
    //   })
    //   .catch (err => {
    //     console.log(err)
    //   })

    this.setState({ showConfirmation: true })
  }

  inputChangedHandler = (event, inputIdentifier, idx) => {

    if(inputIdentifier === 'ingredients' || inputIdentifier === 'preparations') {
      let updatedForm = {}
      if(inputIdentifier === 'ingredients'){
        updatedForm = {...this.state.recipeForm.ingredients}
      }
      if(inputIdentifier === 'preparations'){
        updatedForm = {...this.state.recipeForm.preparations}
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
    } else {

      const updatedRecipeForm = {
        ...this.state.recipeForm
      }
      let updatedFormElement = {
        ...updatedRecipeForm[inputIdentifier]
      }
      updatedFormElement = event.target.value

      updatedRecipeForm[inputIdentifier] = updatedFormElement
      this.setState({recipeForm: updatedRecipeForm})
      }
  }

  modalClosed = () => {
    this.setState({ showConfirmation: false })
  }

  render() {
    let animated = null
    if(this.state.showConfirmation) {
      animated = 
        <Modal show={this.state.showConfirmation} modalClosed={() => this.modalClosed()}/>
    }

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
        {animated}
      </Aux>
    )
  }
}

export default AddRecipe