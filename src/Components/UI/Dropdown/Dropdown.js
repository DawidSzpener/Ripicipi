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
        <select onChange={this.onChange}>
          <option value="breakfast">Breakfast</option>
          <option value="dinner">Dinner</option>
        </select>
      </div>
    );
  }
}

export default withRouter(Dropdown)