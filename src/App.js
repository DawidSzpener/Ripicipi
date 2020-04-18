import React, { Component } from 'react';
import './App.css';
import Layout from './Components/Layout/Layout'
import DishCategory from './Containers/DishCategory/DishCategory'
import Homescreen from './Containers/WelcomeScreen/WelcomeScreen'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Layout>
          {/* <DishCategory /> */}
          <Homescreen />
        </Layout>
      </div>
    );
  }
}

export default App;
