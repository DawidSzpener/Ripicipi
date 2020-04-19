import React, { Component } from 'react'
import Aux from '../../hoc/Aux'
import Input from '../../Components/UI/Form/Form'
import './AddRecipe.css'

class AddRecipe extends Component {
  state = {
    ingredients: [{ingredient: ''}, {ingredient: ''}, {ingredient: ''}],
    preparations: [{preparation: ''}, {preparation: ''}, {preparation: ''}],
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

  handleSubmit = (event) => { event.preventDefault() }

  render() {

    let {ingredients} = this.state
    let {preparations} = this.state


    return (
      <Aux>
        <div className='AddRecipeForms'>
          <div className='bg-add'></div>
          <form onSubmit={this.handleSubmit}>
            <Input inputtype='input' type="text" name="title" placeholder="Recipe title"/>
            <Input inputtype='select' type="text" name="category" />
            <Input inputtype='input' type="text" name="picture" placeholder="Picture URL"/>
            <button className ='IngredientsButton' onClick={this.addIngredient}>Add new ingredient</button>
            <div className='IngredientsForms'>
              {
                ingredients.map((val, idx) => {
                  let ingredientId = `Ingredient ${idx}`
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
            <button className ='PreparationsButton' onClick={this.addPreparation}>Add another step</button>
            <div className='PreparationsForms'>
              {
                preparations.map((val, idx) => {
                  let preparationsId = `preparations ${idx}`
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
            <input type='submit' value='Submit' />
          </form>
        </div>
      </Aux>
    )
  }
}

export default AddRecipe