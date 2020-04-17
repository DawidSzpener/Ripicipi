import React, { Component } from 'react'
import Breakfast from './Breakfast/Breakfast'
import Dinner from './Dinner/Dinner'
import Aux from '../../hoc/Aux'
import Card from '../UI/Card/Card'
import Button from '../UI/Button/Button'

class DishCategory extends Component {
  state = {
    categories: ['breakfast', 'dinner', 'supper', 'sweets', 'baking', 'other'],
    shownCategory: null
  }
  
  render() {
    let category = null

    switch (this.state.shownCategory) {
      case('breakfast'):
        category = <Breakfast />
      break
      case('dinner'):
        category = <Dinner />
      break
      default:
        category = this.state.categories.map(category => {
          return (
          <Card
            key={category}
            picture={category}
            clicked={() => this.setState({ shownCategory: category })}>{category.toUpperCase()}</Card>)
        })
    }

    return (
      <Aux>
        <Button clicked={() => this.setState({ shownCategory: null })}>Categories</Button>
        <div>
          {category}
        </div>
      </Aux>
    )
  }
}

export default DishCategory
