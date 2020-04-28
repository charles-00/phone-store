import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: storeProducts,
    cart: [],
    detailProduct: detailProduct,
    modalOpen: false,
    modalProduct: detailProduct,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
  };

  getItem = (id) => {
    return this.state.products.find((p) => p.id === id);
  };

  handleDetail = (id) => {
    const product = this.getItem(id);
    this.setState({ detailProduct: product });
  };

  addToCart = (id) => {
    const tmpProducts = [...this.state.products];
    const index = tmpProducts.indexOf(this.getItem(id));
    const product = tmpProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;

    const cart = [...this.state.cart];
    cart.push(product);

    this.setState(
      {
        products: tmpProducts,
        cart,
      },
      () => this.handleTotals()
    );
  };

  openModal = (id) => {
    this.setState({ modalProduct: this.getItem(id), modalOpen: true });
  };

  closeModal = () => {
    this.setState({ modalOpen: false });
  };

  handleCount = (id, type) => {
    const cart = [...this.state.cart];
    const index = cart.indexOf(this.getItem(id));
    const product = cart[index];

    if (type) product.count = product.count + 1;
    else product.count = product.count - 1;

    product.total = product.count * product.price;

    this.setState({ cart }, () => this.handleTotals());
  };

  removeItem = (id) => {
    const cart = this.state.cart.filter((c) => c.id !== id);

    const products = [...this.state.products];
    const index = products.indexOf(this.getItem(id));
    const product = products[index];

    product.count = 0;
    product.inCart = false;
    product.total = 0;

    this.setState({ products, cart }, this.handleTotals());
  };

  clearCart = () => {
    const products = [...this.state.products];
    products.map((p) => {
      if (p.inCart) {
        p.inCart = false;
        p.total = 0;
        p.count = 0;
      }
    });
    this.setState({ cart: [], products }, () => this.handleTotals());
  };

  handleTotals = () => {
    let cartSubTotal = 0;
    this.state.cart.map((c) => (cartSubTotal += c.total));

    const tax = cartSubTotal * 0.1;
    const cartTax = parseFloat(tax.toFixed(2));

    const cartTotal = cartSubTotal + cartTax;

    this.setState({ cartSubTotal, cartTax, cartTotal });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          handleCount: this.handleCount,
          removeItem: this.removeItem,
          clearCart: this.clearCart,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
