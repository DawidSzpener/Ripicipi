import React, { Component } from 'react'
import Breakfast from './Breakfast/Breakfast'
import Dinner from './Dinner/Dinner'
import Card from '../UI/Card/Card'

class DishCategory extends Component {
  state = {
    categories: ['sniadanie', 'obiad', 'kolacja', 'desery', 'wypieki', 'inne']
  }
  
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
        category = this.state.categories.map( category => {
          return <Card>{category}</Card>
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
