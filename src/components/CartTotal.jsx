import React, { Component } from "react";
import PayPalButton from "./PayPalButton";

class CartTotal extends Component {
  render() {
    const { cartSubTotal, cartTax, cartTotal, clearCart } = this.props.value;
    return (
      <>
        <div>
          <span className="text-title">SUBTOTAL : ${cartSubTotal}</span>
        </div>
        <div>
          <span className="text-title">TAX : ${cartTax}</span>
        </div>
        <div>
          <span className="text-title">TOTAL : ${cartTotal}</span>
        </div>
        <PayPalButton
          total={cartTotal}
          clearCart={clearCart}
          history={this.props.history}
        />
      </>
    );
  }
}

export default CartTotal;
