import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import './App.css';
import Layout from './Components/Layout/Layout'
import Categories from './Containers/Categories/Categories'
import DishCategory from './Components/DishCategory/DishCategory'
import Homescreen from './Containers/WelcomeScreen/WelcomeScreen'
import AddRecipe from './Containers/AddRecipe/AddRecipe'
import Approval from './Containers/Approval/Approval'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route path='/categories/liquids' render={(props) => (<DishCategory {...props} category="Liquids"/>)}/>
            <Route path='/categories/snacks' render={(props) => (<DishCategory {...props} category="Snacks"/>)} />
            <Route path='/categories/salads' render={(props) => (<DishCategory {...props} category="Salads"/>)} />
            <Route path='/categories/pizza' render={(props) => (<DishCategory {...props} category="Pizza"/>)} />
            <Route path='/categories/sauces' render={(props) => (<DishCategory {...props} category="Sauces"/>)} />
            <Route path='/categories/baking' render={(props) => (<DishCategory {...props} category="Baking"/>)} />
            <Route path='/categories/desserts' render={(props) => (<DishCategory {...props} category="Desserts"/>)} />
            <Route path='/categories/dinner' render={(props) => (<DishCategory {...props} category="Dinner"/>)} />
            <Route path='/categories/breakfast' render={(props) => (<DishCategory {...props} category="Breakfast"/>)} />
            <Route path='/categories' exact component={Categories} />
            <Route path='/dawid' exact component={Approval} />
            <Route path='/add' component={AddRecipe} />
            <Route path='/' exact component={Homescreen} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
