import React, { Component } from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { debounce } from "./debounceFunction";

class TouchableDebounce extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity
        style={this.props.style}
        activeOpacity={this.props.activeOpacity}
        onPress={debounce(() => {
          this.props.onPress();
        }, 500)} //wait period in miliseconds
      >
        {this.props.children}
      </TouchableOpacity>
    );
  }
}

export default TouchableDebounce;
