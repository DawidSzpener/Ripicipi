import React, { Component } from 'react'
import Breakfast from './Breakfast/Breakfast'
import Dinner from './Dinner/Dinner'

class DishCategory extends Component {
  render() {
    let category = null
    switch (this.props.category) {
      case('breakfast'):
        category = <Breakfast />
      break
      case('dinner'):
        category = <Dinner />
      break
      default:
        category = null
    }
    return (
      <div>
        {category}
      </div>
    )
  }
}

export default DishCategory
