import React, { Component } from 'react'
import Breakfast from './Breakfast/Breakfast'
import Dinner from './Dinner/Dinner'
import Supper from './Supper/Supper'
import Sweets from './Sweets/Sweets'
import Baking from './Baking/Baking'
import Other from './Other/Other'
import Aux from '../../hoc/Aux'
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
      case('supper'):
        category = <Supper />
      break
      case('sweets'):
        category = <Sweets />
      break
      case('other'):
        category = <Other />
      break
      case('baking'):
        category = <Baking />
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
        <div style={{marginBottom:'50px'}}>
          {category}
        </div>
      </Aux>
    )
  }
}

export default DishCategory
