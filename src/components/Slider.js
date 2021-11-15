import React, { Component } from "react";

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      updateValue: props.updateValue
    };
  }

  // double truth: the value of the slide is saved as state value
  // and given back to parent using the callback function updateValue
  handleChange = (e) => {
    this.setState({value: e.target.value})
    this.state.updateValue(e.target.value)
  }
  
  render() {
    return (
      <div class="slidecontainer text-white">
        <p>Wait time between each url</p>
        <div className="pt-2 flex justify-start align-middle items-center">
        <input
          type="range"
          min="0"
          max="100"
          value={this.state.value}
          onChange={this.handleChange}
          class="slider"
          id="myRange"
        />
      <label className="pl-3 text-white">
          {this.state.value} seconds
      </label>
      </div>
      </div>
    );
  }
}

export default Slider;
