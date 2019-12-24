import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

import "../../Global.css";

//import data
import mockData from "../../Data/mockData";

class DropDown extends Component {
  state = {
    selectedValue: ""
  };

  handleDropDownChange = event => {
    this.setState({
      selectedValue: event.target.value
    });
  };

  render() {
    return (
      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {this.state.selectedValue ? this.state.selectedValue : "select"}
        </button>
        <div
          class="dropdown-menu"
          aria-labelledby="dropdownMenuButton"
          onClick={this.handleDropDownChange}
        >
          {mockData &&
            mockData.map(item => (
              <option value={item.name} key={item.uid}>
                {item.name}
              </option>
            ))}
        </div>
      </div>
    );
  }
}

export default DropDown;
