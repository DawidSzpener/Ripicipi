import React, { Component } from 'react'
import Aux from '../../hoc/Aux'
import background from '../../assets/pictures/addbackground.png'
import Input from '../../Components/UI/Form/Form'
import './AddRecipe.css'

class AddRecipe extends Component {
  state = {
    ingredients: [{ingredient: ''}],
  }

  addIngredient = (event) => {
    this.setState((prevState) => ({
      ingredients: [...prevState.ingredients, {ingredient: ''}]
    }))
  }

  handleChange = (event) => {
    if (['ingredient'].include(event.target.className)){
      let ingredients = [...this.state.ingredients]

      ingredients[event.target.dataset.id][event.target.className] = event.target.value.toUpperCase()
      this.setState({ ingredients }, () => console.log(this.state.ingredients))
    } else {
      this.setState({ [event.target.name]: event.target.value.toUpperCase()})
    }
  }

  handleSubmit = (event) => { event.preventDefault() }

  render() {

    let {ingredients} = this.state


    return (
      <Aux>
        <div className="bg-color" label='Title'>
          <img src={background} alt="bg" className="bg"></img>
        </div>
        <div className='AddRecipeForms'>
          <form onSubmit={this.handleSubmit}>
            <Input inputtype='input' type="text" name="title" placeholder="Recipe title"/>
            <Input inputtype='select' type="text" name="category" />
            <Input inputtype='input' type="text" name="picture" placeholder="Picture URL"/>
            <button onClick={this.addIngredient}>Add new ingredient</button>

            {
              ingredients.map((val, idx) => {
                let ingredientId = `Ingredient ${idx}`
                return (
                  <div key={idx}>
                    <Input
                      inputtype='input' 
                      type="text"
                      key={ingredientId} 
                      name={ingredientId}
                      placeholder={`Ingredient ${idx + 1}`}/>
                  </div>
                )
              })
            }
            <Input type='submit' value='Submit' />
          </form>
        </div>
      </Aux>
    )
  }
}

export default AddRecipe