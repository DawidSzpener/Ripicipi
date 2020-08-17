import React, { Component } from 'react'
import Aux from '../../hoc/Aux'
import Input from '../../Components/UI/Form/Form'
import './AddRecipe.css'
import axios from '../../axios-recipes'
import Modal from '../../Components/UI/Modal/Modal'
import thankyou from '../../assets/pictures/thankyou.jpeg'
import Backdrop from '../../Components/UI/Backdrop/Backdrop'

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
      keto: true,
      time: '15 minutes',
      difficulty: 'easy',

    },
    showConfirmation: false,
    showWarning: false
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
      title: this.state.recipeForm.title,
      category: this.state.recipeForm.category,
      background: this.state.recipeForm.background,
      ingredients: this.state.recipeForm.ingredients,
      preparations: this.state.recipeForm.preparations,
      keto: this.state.recipeForm.keto,
      time: this.state.recipeForm.time,
      difficulty: this.state.recipeForm.difficulty
    }

    axios.post('/recipes.json', recipe)
    .then(res => {
      console.log(res)
    })
    .catch (err => {
      console.log(err)
    })

    this.setState({ showConfirmation: false, showWarning: true })
  }

  showModal = (event) => {
    event.preventDefault() 
    this.setState({ showConfirmation: true })
  }

  modalClosed = () => {
    this.setState({ showConfirmation: false })
  }

  warningClosed = () => {
    this.setState({ showWarning: false })
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

      if(inputIdentifier === 'ingredients'){
        updatedFormElement = {ingredient: event.target.value}
      }
      if(inputIdentifier === 'preparations'){
        updatedFormElement = {preparation: event.target.value}
      }
      
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

      if(inputIdentifier === 'keto') {
        updatedFormElement = JSON.parse(event.target.value) // turns the value into bolean
      } else {
        updatedFormElement = event.target.value
      }

      updatedRecipeForm[inputIdentifier] = updatedFormElement
      this.setState({recipeForm: updatedRecipeForm})
      }
  }

  render() {
    let warning = null
    if(this.state.showWarning) {
      warning = 
      <Aux>
        <Backdrop show={this.state.showWarning} clicked={() => this.warningClosed()}/>
        <div className='Thankyou' onClick={() => this.warningClosed()}>
          <img src={thankyou} alt="bg" id='id-thankyou'></img>
        </div>
      </Aux>
    }

    let animated = null
    if(this.state.showConfirmation) {
      animated = 
        <Modal
          clicked={this.handleSubmit}
          ketoChangeHandler={(event) => this.inputChangedHandler(event, 'keto')}
          timeChangeHandler={(event) => this.inputChangedHandler(event, 'time')}
          difficultyChangeHandler={(event) => this.inputChangedHandler(event, 'difficulty')}
          show={this.state.showConfirmation}
          modalClosed={() => this.modalClosed()}/>
    }

    return (
      <Aux>
        <div className='AddRecipeForms'>
          <div className='bg-add'></div>
          <form onSubmit={this.showModal}>
            <Input inputtype='input' type="text" onChange={(event) => this.inputChangedHandler(event, 'title')} required name="title" placeholder="Recipe title"/>
            <Input inputtype='select' type="text" onChange={(event) => this.inputChangedHandler(event, 'category')} required name="category" className='add-select'/>
            <Input inputtype='input' type="text" onChange={(event) => this.inputChangedHandler(event, 'background')} required name="picture" placeholder="Picture URL"/>
            <div className='IngredientsForms'>
              {
                this.state.ingredients.map((val, idx) => {
                  let ingredientId = `Ingredient${idx}`
                  return (
                    <Input
                      onChange={(event) => this.inputChangedHandler(event, 'ingredients', idx)}
                      inputtype='input' 
                      type="text"
                      required
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
                      required
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
        {warning}
      </Aux>
    )
  }
}

export default AddRecipe