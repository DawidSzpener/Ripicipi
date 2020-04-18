import React, { Component } from 'react';
import './App.css';
import Layout from './Components/Layout/Layout'
import DishCategory from './Containers/DishCategory/DishCategory'
import background from './assets/pictures/background3.png'
import Homescreen from './Containers/WelcomeScreen/WelcomeScreen'

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="bg-color">
        <img src={background} alt="bg" className="bg"></img>
      </div>
        <Layout>
          {/* <DishCategory /> */}
          <Homescreen />
        </Layout>
      </div>
    );
  }
}

export default App;
