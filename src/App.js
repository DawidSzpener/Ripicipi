import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Layout from './Components/Layout/Layout'
import DishCategory from './Containers/DishCategory/DishCategory'
import Homescreen from './Containers/WelcomeScreen/WelcomeScreen'
import AddRecipe from './Containers/AddRecipe/AddRecipe'
import Breakfast from './Components/DishCategories/Breakfast/Breakfast'
import Dinner from './Components/DishCategories/Dinner/Dinner'
import Desserts from './Components/DishCategories/Desserts/Desserts'
import Baking from './Components/DishCategories/Baking/Baking'
import Sauces from './Components/DishCategories/Sauces/Sauces'
import Salads from './Components/DishCategories/Salads/Salads'
import Pizza from './Components/DishCategories/Pizza/Pizza'
import Snacks from './Components/DishCategories/Snacks/Snacks'
import Liquids from './Components/DishCategories/Liquids/Liquids'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route path='/categories/liquids' component={Liquids} />
            <Route path='/categories/snacks' component={Snacks} />
            <Route path='/categories/salads' component={Salads} />
            <Route path='/categories/pizza' component={Pizza} />
            <Route path='/categories/sauces' component={Sauces} />
            <Route path='/categories/baking' component={Baking} />
            <Route path='/categories/desserts' component={Desserts} />
            <Route path='/categories/dinner' component={Dinner} />
            <Route path='/categories/breakfast' component={Breakfast} />
            <Route path='/categories' exact component={DishCategory} />
            <Route path='/add' component={AddRecipe} />
            <Route path='/' exact component={Homescreen} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
