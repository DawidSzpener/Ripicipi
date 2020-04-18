import React, { Component } from 'react'
import Category from '../../Components/DishCategories/Category/Category'
import Aux from '../../hoc/Aux'
import Card from '../../Components/UI/Card/Card'
import background from '../../assets/pictures/background3.png'


class DishCategory extends Component {
  state = {
    categories: ['breakfast', 'dinner', 'supper', 'sweets', 'baking', 'other'],
    shownCategory: null
  }
  
  render() {
    let category = null

    switch (this.state.shownCategory) {
      case('breakfast'):
        category = <Category name='Breakfast'/>
      break
      case('dinner'):
        category = <Category name='Dinner'/>
      break
      case('supper'):
        category = <Category name='Supper'/>
      break
      case('sweets'):
        category = <Category name='Sweets'/>
      break
      case('other'):
        category = <Category name='Other'/>
      break
      case('baking'):
        category = <Category name='Baking'/>
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
        <div className="bg-color">
          <img src={background} alt="bg" className="bg"></img>
        </div>
        <div style={{marginBottom:'50px'}}>
          {category}
        </div>
      </Aux>
    )
  }
}

export default DishCategory
