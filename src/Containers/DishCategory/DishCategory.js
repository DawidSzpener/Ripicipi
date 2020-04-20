import React, { Component } from 'react'
import Category from '../../Components/DishCategories/Category/Category'
import Aux from '../../hoc/Aux'
import Card from '../../Components/UI/Card/Card'
import background from '../../assets/pictures/background7.png'
import Logo from '../../Components/Logo/Logo'
import axios from '../../axios-recipes'


class DishCategory extends Component {
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

    ],
    shownCategory: null
  }

  categoryHandler = () => {
    this.setState({ shownCategory: null })
  }

  componentDidMount() {
    axios.get('/recipes.json')
      .then(res => { console.log(res) })
  }
  
  render() {
    let category = null

    switch (this.state.shownCategory) {
      case('breakfast'):
        category = <Category showList={() => this.categoryHandler()} name='Breakfast'/>
      break
      case('pizza'):
        category = <Category showList={() => this.categoryHandler()} name='Pizza'/>
      break
      case('dinner'):
        category = <Category showList={() => this.categoryHandler()} name='Dinner'/>
      break
      case('salads'):
        category = <Category showList={() => this.categoryHandler()} name='Salads'/>
      break
      case('desserts'):
        category = <Category showList={() => this.categoryHandler()} name='Desserts'/>
      break
      case('sauces'):
        category = <Category showList={() => this.categoryHandler()} name='Sauces'/>
      break
      case('baking'):
        category = <Category showList={() => this.categoryHandler()} name='Baking'/>
      break
      case('snacks'):
        category = <Category showList={() => this.categoryHandler()} name='Snacks'/>
      break
      case('liquids'):
        category = <Category showList={() => this.categoryHandler()} name='Liquids'/>
      break
      default:
        category = this.state.categories.map(category => {
          return (
          <Card
            key={category}
            picture={category}
            clicked={() => this.setState({ shownCategory: category })}></Card>)
        })
    }

    return (
      <Aux>
        <Logo screen='categories' style={{marginTop: '2px', marginLeft: '9px'}}/>
        <div className="bg-color">
          <img src={background} alt="bg" className="bg"></img>
        </div>
        <div className='DishCategory' style={{marginBottom:'50px'}}>
          {category}
        </div>
      </Aux>
    )
  }
}

export default DishCategory
