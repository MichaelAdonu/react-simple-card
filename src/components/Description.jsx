import React, { Component } from "react";

export default class Description extends Component {
  render() {
    return (
      <div
        style={{
          fontFamily: "Quicksand",
          fontSize: "20px",
          padding: "10px",
          marginTop: "20px",
        }}
      >
        {this.props.description}
      </div>
    );
  }
}
