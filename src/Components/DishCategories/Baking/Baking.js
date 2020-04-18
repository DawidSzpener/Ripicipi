import React from 'react'
import Recipe from '../../Recipe/Recipe'
import picture from '../../../assets/pictures/background2.png'

const baking = () => {
  const recipeList = [
    <Recipe title='Testowy tytul' picture={picture}/>,
    <Recipe title='Testowy tytul' picture={picture}/>
  ]
  return (
    <div className='Baking'>
      <div className='RecipeList'>
        {recipeList}
      </div>
    </div>
  )
}

export default baking
