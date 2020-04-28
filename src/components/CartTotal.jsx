import React, { Component } from "react";

class CartTotal extends Component {
  render() {
    const { cartSubTotal, cartTax, cartTotal } = this.props.value;
    return (
      <>
        <div>
          <span className="text-title">SUBTOTAL : $ {cartSubTotal}</span>
        </div>
        <div>
          <span className="text-title">TAX : $ {cartTax}</span>
        </div>
        <div>
          <span className="text-title">TOTAL : $ {cartTotal}</span>
        </div>
      </>
    );
  }
}

export default CartTotal;
