import React, { Component } from 'react'
import Breakfast from './Breakfast/Breakfast'
import Dinner from './Dinner/Dinner'
import Card from '../UI/Card/Card'

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
            clicked={() => this.setState({ shownCategory: category })}>{category}</Card>)
        })
    }

    return (
      <div>
        {category}
      </div>
    )
  }
}

export default DishCategory
