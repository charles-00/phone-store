import React, { Component } from "react";
import Title from "./Title";
import EmptyCart from "./EmptyCart";
import Table from "./Table";
import { ProductConsumer } from "../Context";
import CartTotal from "./CartTotal";

class Cart extends Component {
  state = {};
  render() {
    return (
      <section>
        <ProductConsumer>
          {(value) => {
            const { cart, clearCart } = value;
            if (cart.length < 1) return <EmptyCart />;
            return (
              <>
                <Title name="your" title="cart" />
                <Table value={value} />
                <div className="">
                  <div className="col-12">
                    <button
                      onClick={() => clearCart()}
                      className="mt-3 px-5 btn btn-outline-dark text-capitalize float-right"
                    >
                      clear cart
                    </button>
                  </div>
                </div>
                <div className="row">
                  <div className="col-10 ml-auto">
                    <CartTotal value={value} history={this.props.history} />
                  </div>
                </div>
              </>
            );
          }}
        </ProductConsumer>
      </section>
    );
  }
}

export default Cart;
