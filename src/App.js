import React, { Component } from 'react';
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
          <AddRecipe />
          {/* <DishCategory /> */}
          {/* <Homescreen /> */}
        </Layout>
      </div>
    );
  }
}

export default App;
