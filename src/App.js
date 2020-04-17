import React, { Component } from 'react';
import './App.css';
import Layout from './Components/Layout/Layout'
import DishCategory from './Components/DishCategory/DishCategory'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Layout>
          <DishCategory category='breakfast'/>
        </Layout>
      </div>
    );
  }
}

export default App;
