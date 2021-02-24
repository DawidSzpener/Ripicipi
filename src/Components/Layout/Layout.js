import React, { Component } from 'react'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'
import Aux from '../../hoc/Aux'
import axios from '../../axios-recipes'
import './Layout.css'

class Layout extends Component {
  state = {
    showSideDrawer: false
  }

  componentDidMount() {
    axios.get(`/recipes.json`)
    .then(res => {
      const data = Object.values(res.data)
      data.map(category => {
        Object.values(category).map(recipe => {
          console.log(recipe.title)
        })
      })
    })
  }

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false })
  }

  sideDrawerOpenedHandler = () => {
    this.setState( ( prevState ) => {
      return { showSideDrawer: !prevState.showSideDrawer }
    })
  }

  render() {
    return (
      <Aux>
        <Toolbar clicked={this.sideDrawerOpenedHandler}/>
        <SideDrawer
          closed={this.sideDrawerClosedHandler}
          open={this.state.showSideDrawer}/>
        <main className='Layout'>
          {this.props.children}
        </main>
      </Aux>
    )
  }
}

export default Layout