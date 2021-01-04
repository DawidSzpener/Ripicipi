import React, { Component } from 'react'
import Aux from '../../hoc/Aux'
import Card from '../../Components/UI/Card/Card'
import background from '../../assets/pictures/background8.jpeg'
import { withRouter } from 'react-router-dom'
import './Categories.css'


class Categories extends Component {
  state = {
    categories: [
      'breakfast',
      'dinner', 
      'desserts', 
      'baking', 
      'sauces', 
      'salads', 
      'pizza', 
      'snacks',
      'liquids'
    ]
  }
  
  render() {

    let category = this.state.categories.map(category => {
      return (
      <Card
        key={category}
        clicked={() => this.props.history.push(`/categories/${category}`)}
        picture={category}
       />)
    })

    return (
      <Aux>
        <div className="bg-color">
          <img src={background} alt="bg" className="bg"></img>
        </div>
        <div className='Categories'>
          {category}
        </div>
      </Aux>
    )
  }
}

export default withRouter(Categories)
