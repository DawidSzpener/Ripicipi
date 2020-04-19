import React, { Component } from 'react'
import Aux from '../../hoc/Aux'
import background from '../../assets/pictures/addbackground.png'
import Input from '../../Components/UI/Form/Form'
import './AddRecipe.css'

class AddRecipe extends Component {
  state = {
    numberOfIngredients: 1,
    numberOfPreparations: 1
  }

  increaseIngredientsHandler = () => {
    let number = this.state.numberOfIngredients
    this.setState({ numberOfIngredients: number + 1})
  }

  decreaseIngredientsHandler = () => {
    let number = this.state.numberOfIngredients
    this.setState({ numberOfIngredients: number - 1})
  }

  increasePreparationsHandler = () => {
    let number = this.state.numberOfPreparations
    this.setState({ numberOfPreparations: number + 1})
  }

  decreasePreparationsHandler = () => {
    let number = this.state.numberOfPreparations
    this.setState({ numberOfPreparations: number - 1})
  }

  render() {
    let ingredientInput = 
    <div>
      <Input inputtype='input' type="text" name="ingredients" placeholder="Ingredient"/>
      <button onClick={() => this.increaseIngredientsHandler()}>+</button>
      <button onClick={() => this.decreaseIngredientsHandler()}>-</button>
    </div>

    let preparationInput =
    <div>
      <Input inputtype='input' type="text" name="preparation" placeholder="Preparation"/>
      <button onClick={() => this.increasePreparationsHandler()}>+</button>
      <button onClick={() => this.decreasePreparationsHandler()}>-</button>
    </div>


    return (
      <Aux>
        <div className="bg-color" label='Title'>
          <img src={background} alt="bg" className="bg"></img>
        </div>
        <div className='AddRecipeForms'>
          <Input inputtype='input' type="text" name="title" placeholder="Recipe title"/>
          <Input inputtype='select' type="text" name="category" />
          <Input inputtype='input' type="text" name="picture" placeholder="Picture ulr"/>
          {ingredientInput}
          {preparationInput}
        </div>
      </Aux>
    )
  }
}

export default AddRecipe