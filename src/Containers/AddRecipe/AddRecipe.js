import React, { Component } from 'react'
import Aux from '../../hoc/Aux'
import background from '../../assets/pictures/addbackground.png'
import Input from '../../Components/UI/Form/Form'
import './AddRecipe.css'

class AddRecipe extends Component {
  state = {
    ingredients: [{ingredient: ''}],
  }

  render() {

    let {ingredients} = this.state


    return (
      <Aux>
        <div className="bg-color" label='Title'>
          <img src={background} alt="bg" className="bg"></img>
        </div>
        <div className='AddRecipeForms'>
          <form>
            <Input inputtype='input' type="text" name="title" placeholder="Recipe title"/>
            <Input inputtype='select' type="text" name="category" />
            <Input inputtype='input' type="text" name="picture" placeholder="Picture ulr"/>
            <button>Add new ingredient</button>

            {
              ingredients.map((val, idx) => {
                let ingredientId = `Ingredient ${idx}`
                return (
                  <div key={idx}>
                  {console.log(val)}
                    <Input
                      label={ingredientId + 1}
                      inputtype='input' 
                      type="text"
                      key={ingredientId} 
                      name={ingredientId}
                      placeholder="Ingredient"/>
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