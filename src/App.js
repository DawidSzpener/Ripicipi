import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Layout from './Components/Layout/Layout'
import DishCategory from './Containers/DishCategory/DishCategory'
import Homescreen from './Containers/WelcomeScreen/WelcomeScreen'
import AddRecipe from './Containers/AddRecipe/AddRecipe'
import Breakfast from './Components/DishCategories/Category/Breakfast/Breakfast'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Layout>
          <Switch>
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
