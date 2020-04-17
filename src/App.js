import React, { Component } from 'react';
import './App.css';
import Layout from './Components/Layout/Layout'
import DishCategory from './Containers/DishList/DishCategory'
import background from './assets/pictures/background3.png'

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="bg-color">
        <img src={background} alt="bg" className="bg"></img>
      </div>
        <Layout>
          <DishCategory />
        </Layout>
      </div>
    );
  }
}

export default App;
