import React, { Component } from 'react'
import Recipe from '../../Recipe/Recipe'
import picture from '../../../assets/pictures/background2.png'
import Aux from '../../../hoc/Aux'
import './Baking.css'

class Baking extends Component {
  state = {
    recipeList: [
      <Recipe title='Testowy tytul' picture={picture}/>,
      <Recipe title='Testowy tytul' picture={picture}/>,
      <Recipe title='Testowy tytul' picture={picture}/>,
      <Recipe title='Testowy tytul' picture={picture}/>,
      <Recipe title='Testowy tytul' picture={picture}/>
    ]
  }

  render() {

    const squashingRecipes = 
      this.state.recipeList.map(recipe => {
        return (
          <Aux>
            <div className='SingleRecipeCard'>
              <div className='SingleRecipeCardTitle'>{recipe.props.title}</div>
              <img src={recipe.props.picture} alt="card_bg"></img>
            </div>
          </Aux>
        )
      })


    return (
      <div className='Baking'>
        {squashingRecipes}
      </div>
    )
  }
}

export default Baking
