import React, { Component } from "react";
import Title from "./Title";

class Emptycart extends Component {
  state = {};
  render() {
    return <Title name="your cart is currently empty" />;
  }
}

export default Emptycart;
