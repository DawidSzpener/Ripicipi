import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import "./Dropdown.css";

class Dropdown extends Component {
  onChange = (e) => {
    this.props.history.push(`/categories/${e.target.value}`);
  }

  render() {
    return (
      <div className='Dropdown'>
        <select onChange={this.onChange} className='DropdownToolbar' name='Select' value='Select'>
          <option value="breakfast">Breakfast</option>
          <option value="dinner">Dinner</option>
          <option value="desserts">Desserts</option>
          <option value="baking">Baking</option>
          <option value="sauces">Sauces</option>
          <option value="salads">Salads</option>
          <option value="pizza">Pizza</option>
          <option value="snacks">Snacks</option>
          <option value="liquids">Liquids</option>
        </select>
      </div>
    );
  }
}

export default withRouter(Dropdown)