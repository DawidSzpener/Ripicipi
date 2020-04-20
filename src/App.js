import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import Layout from './Components/Layout/Layout'
import DishCategory from './Containers/DishCategory/DishCategory'
import Homescreen from './Containers/WelcomeScreen/WelcomeScreen'
import AddRecipe from './Containers/AddRecipe/AddRecipe'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Layout>
          <Route path='/' exact component={Homescreen} />
          <Route path='/categories' component={DishCategory} />
          <Route path='/add' component={AddRecipe} />
        </Layout>
      </div>
    );
  }
}

export default App;
