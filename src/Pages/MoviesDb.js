//react library
import React, { Fragment } from "react";

//import component
import Input from "../Component/Input/Input";
import Images from "../Component/Images/Images";

class MoviesDatabase extends React.Component {
  state = {
    items: [],
    isloading: false,
    selectedInput: ""
  };
  componentWillMount() {
    this.getAPIresult();
  }

  getAPIresult = async () => {
    let typedItem = this.state.selectedInput && this.state.selectedInput;
    await fetch("http://www.omdbapi.com/?apikey=b90ede8f&t=" + `${typedItem}`)
      .then(response => response.json())
      .then(data => this.setState({ items: data, isLoading: true }));
  };

  handleinput = e => {
    this.setState({
      selectedInput: e.target.value
    });
  };

  handleKeyDown = e => {
    if (e.keyCode === 13) {
      this.getAPIresult();
    }
  };

  //render components
  render() {
    let isavilable =
      this.state.items && this.state.items.Title === this.state.selectedInput;
    return (
      <Fragment>
        <Input
          label="Search Movies"
          value={this.state.selectedInput}
          onKeyDown={this.handleKeyDown}
          onChange={this.handleinput}
        />
        {isavilable ? (
          <Images
            data={this.state.items}
            selectedInput={this.state.selectedInput}
          />
        ) : (
          "Please Enter Valid movie Name"
        )}
      </Fragment>
    );
  }
}

export default MoviesDatabase;
