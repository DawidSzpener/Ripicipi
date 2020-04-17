import React, { Component } from 'react';
import './App.css';
import Layout from './Components/Layout/Layout'
import DishCategory from './Components/DishCategory/DishCategory'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Layout>
          <DishCategory />
        </Layout>
      </div>
    );
  }
}

export default App;
